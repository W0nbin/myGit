import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {
    const navigate = useNavigate();
    const [text, setText] = useState({ title: "", content: "" });
    const { title, content } = text;

    const onChange = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        });
    };

    const onReset = () => {
        setText({ title: "", content: "" });
    };

    const onWrite = () => {
        const nickname = localStorage.getItem('userNickname'); // 로컬 스토리지에서 닉네임 가져오기

        // 닉네임이 없을 경우
        if (!nickname) {
            alert("로그인이 필요합니다.");
            return;
        }

        axios.post("http://localhost:8000/insert", {
            title,
            content,
            nickname
        })
        .then((res) => {
            console.log(res);
            alert("게시물이 작성되었습니다."); // 성공 메시지 추가
            navigate('/'); // 글 작성 후 홈으로 이동
        })
        .catch((err) => {
            console.log(err);
            alert("게시물 작성에 실패했습니다."); // 오류 메시지 추가
        });
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <button onClick={() => navigate("/")}> Home</button>
            </div>
            <h2>게시판 작성 페이지 입니다.</h2>
            <div>
                <label>제목 : </label>
                <input 
                    type='text' 
                    name='title' 
                    value={title} 
                    onChange={onChange} 
                    placeholder="제목을 입력해주세요." 
                    required // 제목 필수 입력
                />
            </div>
            <div>
                <label>내용: </label>
                <textarea
                    name='content'
                    value={content}
                    onChange={onChange}
                    placeholder='내용을 입력해주세요.'
                    required // 내용 필수 입력
                />
            </div>
            <div>
                <button type="button" onClick={onWrite}>작성하기</button>
                <button type="button" onClick={onReset}>취소</button>
            </div>
        </form>
    );
};

export default BoardWrite;
