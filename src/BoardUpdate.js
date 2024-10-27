import React, { useEffect } from 'react';
import Axios from 'axios';

const BoardUpdate = () => {
    useEffect(() => {
        const [text, setText] = useState({title: "", content: ""});
    const {title, content} = text;
    const onChange = (e) => {
        const {name, value} = e.target;
        setText({
            ...text,
            [name]: value
        });
    };
    const getBoardUpdate = () => {
        Axios.post(`http://localhost:8000/detail/${idx}`, {})
        .then((res) => {
            setText(res.data[0]);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    getBoardUpdate();
    console.log(idx);
}, []);

const onUpdate = () => {
    Axios.put(`http://localhost:8000/update/${idx}`, {
        title,
        content
    })
    .then(res => {
        console.log(res.data)
        alert("글 수정이 완료되었습니다.")
        document.location.href = '/'
    })
    .catch(function(error){
        console.log(error);
    })
}
const onReset = () =>{setText("")};

    return (
        <form>
        <div>
            <button onClick={()=> Navigate("/")}> Home</button>
        </div>
        게시판 작성 페이지 입니다.
        <div>
            <label>제목 : </label>
            <input type='text' name='title' value={title} onChange={onChange} placeholder="제목을 입력해주세요." />

        </div>
        <div>
            <label>내용: </label>
            <input type='text' name='content' value={content} onChange={onChange} placeholder='내용을 입력해주세요.' />
        </div>
        <div>
            <button onClick={onUpdate}>수정하기</button>
            <button onClick={onReset}>취소</button>
        </div>
        </form>
    );
    
};

export default BoardUpdate;