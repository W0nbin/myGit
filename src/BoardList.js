import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./BoardList.css"

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        const getBoardList = async () => {
            try {
                const res = await Axios.get("http://localhost:8000/list");
                setBoardList(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getBoardList();
    }, []); // 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((list) => (
                            <tr key={list.IDX}>
                                <td><Link to={`/detail/${list.IDX}`}>{list.IDX}</Link></td>
                                <td><Link to={`/detail/${list.IDX}`}>{list.TITLE}</Link></td>
                                <td>{list.CREATED_BY}</td>
                                <td>{list.CREATED_AT}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <Link to={"/write"}>글 쓰기</Link>
            </div>
        </div>
    );  
};

export default BoardList;
