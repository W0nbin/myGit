import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";

const BoardDetail = () => {
  const { idx } = useParams();
  const [boardDetail, setBoardDetail] = useState({});

  useEffect(() => {
    const getBoardDetail = () => {
      Axios.post(`http://localhost:8000/detail/${idx}`, {})
      .then((res) => {
        setBoardDetail(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    };
    getBoardDetail();
    console.log(idx);
  }, []);

  const onDelete = (e) => {
    Axios.post(`http://localhost:8000/delete/${idx}`, {})
    .then((res) => {
      console.log(res);
      alert("게시글이 삭제되었습니다.")
      document.location.href = '/'
    })
    .catch((err) => {
      console.log(err);
    })
  }

  

  return (
    <div>
      <div>
        세부내용
      </div>
      <h3>번호 : {idx}</h3>
      <h2>제목 : {boardDetail.TITLE} ({boardDetail.CREATED_AT})</h2>
      <h5>작성자 : {boardDetail.CREATED_BY}</h5>
      <p>내용 : {boardDetail.CONTENT}</p>
      <button>수정</button>
      <div>
        <Link to={"/BoardList"}>게시판 가기</Link>
        <button id={idx} onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
};

export default BoardDetail;