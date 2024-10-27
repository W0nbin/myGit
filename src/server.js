const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 8000;

app.use(cors()); // CORS 설정 개선 가능
app.use(bodyParser.json());

// MySQL 데이터베이스 연결
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ak47321!!!',
  database: 'weather_project',
  port:3306,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

// Multer 설정 - 파일 업로드
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 회원가입 API (닉네임 추가)
app.post('/register', async (req, res) => {
  const { email, password, nickname } = req.body; // 닉네임도 받음

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (email, password, nickname) VALUES (?, ?, ?)`; // 닉네임 추가
    db.query(query, [email, hashedPassword, nickname], (err, result) => {
      if (err) {
        console.error('회원가입 실패:', err);
        return res.status(500).json({ message: '회원가입 실패', error: err });
      }
      res.status(200).json({ message: '회원가입 성공' });
    });
  } catch (error) {
    console.error('암호화 실패:', error);
    res.status(500).json({ message: '회원가입 실패', error });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body; // 클라이언트에서 전달된 이메일과 비밀번호

  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
  }

  const query = `SELECT * FROM users WHERE email = ?`;
  
  // DB에서 사용자 정보 조회
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: '서버 에러', error: err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const user = results[0]; // 조회된 사용자 정보
    try {
      // 비밀번호 비교
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
      }

      // 로그인 성공 시 응답
      return res.status(200).json({ message: '로그인 성공', user: { email: user.email, nickname: user.nickname } });

    } catch (compareError) {
      // 비동기 처리 에러 핸들링
      return res.status(500).json({ message: '비밀번호 검증 중 오류가 발생했습니다.', error: compareError });
    }
  });
});
app.post('/login', (req, res) => {
  const { email, password } = req.body; // 클라이언트에서 전달된 이메일과 비밀번호

  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
  }

  const query = `SELECT * FROM users WHERE email = ?`;
  
  // DB에서 사용자 정보 조회
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: '서버 에러', error: err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const user = results[0]; // 조회된 사용자 정보
    try {
      // 비밀번호 비교
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
      }

      // 로그인 성공 시 응답
      return res.status(200).json({ message: '로그인 성공', user: { email: user.email, nickname: user.nickname } });

    } catch (compareError) {
      // 비동기 처리 에러 핸들링
      return res.status(500).json({ message: '비밀번호 검증 중 오류가 발생했습니다.', error: compareError });
    }
  });
});


// 업로드 라우트 - 파일 업로드
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({ filePath: `http://localhost:${PORT}/uploads/${req.file.filename}` });
});

app.post('/board', (req, res) => {
  const { title, content, writer } = req.body;
  const query = 'INSERT INTO posts (title, content, writer) VALUES (?, ?, ?)';
  
  db.query(query, [title, content, writer], (error) => {
    if (error) return res.status(500).json({ error: '게시물 작성 실패' });
    res.status(201).json({ message: '게시물 작성 완료' });
  });
});
// 보드(임시)
app.post('/board', (req, res) => {
  const { title, content, writer } = req.body;
  const query = 'INSERT INTO BOARD (TITLE, CONTENT, CREATED_BY) VALUES (?, ?, ?)';
  
  db.query(query, [title, content, writer], (error) => {
    if (error) return res.status(500).json({ error: '게시물 작성 실패' });
    res.status(201).json({ message: '게시물 작성 완료' });
  });
});


// 사진 목록 가져오기 API
app.get('/photos', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) {
      return res.status(500).json({ error: '파일 목록을 가져오는 데 오류가 발생했습니다.' });
    }
    const filePaths = files.map(file => `http://localhost:${PORT}/uploads/${file}`);
    res.json(filePaths);
  });
});

// 정적 파일 제공
app.use('/uploads', express.static('uploads'));

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});

app.post("/insert", (req, res) => {
  const { title, content, nickname } = req.body; // 닉네임 추가
  const userQuery = "INSERT INTO BOARD (TITLE, CONTENT, CREATED_BY) VALUES (?, ?, ?);";
  db.query(userQuery, [title, content, nickname], (err, result) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      return res.status(500).json({ error: '게시물 작성 실패' });
    }
    res.status(201).json({ message: '게시물이 작성되었습니다.' });
  });
});
app.get("/list", (req, res) => {
  const userQuery = "SELECT IDX, TITLE, CREATED_BY, DATE_FORMAT(CREATED_AT, '%Y-%m-%d') AS CREATED_AT FROM BOARD;";
  db.query(userQuery, (err, result) => {
    if (err) return res.status(500).json({ error: '게시물 목록 조회 실패' });
    res.send(result);
  });
});

app.post("/detail/:idx", (req, res) => {
  const value = [req.params.idx];

  const userQuery = "SELECT IDX, TITLE, CONTENT, CREATED_BY, DATE_FORMAT(CREATED_AT, '%Y-%m-%d') AS CREATED_AT FROM BOARD WHERE IDX=?";
  db.query(userQuery, value, (err, result) => {
    if (err) return res.status(500).json({ error: '게시물 상세 조회 실패' });
    res.send(result);
  });
});

app.post("/delete/:idx", (req, res)=> {
  const value = [req.params.idx];

  const userQuery = "DELETE FROM BOARD WHERE IDX=?;";
  db.query(userQuery, value, (err, result) => {
    res.send(result);
  });
})

app.put("/update/:idx", (req, res)=>{
  const value = [req.body.title, req.body.content, req.params.idx];

  const userQuery = "UPDATE BOARD SET TITLE = ?, CONTENT = ? WHERE IDX = ?;";
  db.query(userQuery, value, (err, result) => {
    res.send(result);
  });
});