import React, { useState } from 'react';
import axios from 'axios';
import './UploadBox.css';


const UploadBox = () => {
  const [isActive, setActive] = useState(false);
  const [image, setImage] = useState();
  const [previewUrl, setPreviewUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  const postImageFile = async () => {
    if (!image) {
      setMessage('이미지를 선택하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('photo', image); // 'photo'는 서버에서 파일을 받을 때 사용하는 키

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('업로드 성공: ' + response.data.filePath);
    } catch (error) {
      setMessage('업로드 실패: ' + error.message);
    }
  };

  return (
    <label
      className={`preview${isActive ? ' active' : ''}`}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <input type="file" className="file" onChange={handleUpload} />
      {previewUrl && (
        <div className="image-preview">
          <img src={previewUrl} alt="미리보기" />
        </div>
      )}
      {!previewUrl && (
        <>
          <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
          <p className="preview_desc">파일당 최대 3MB</p>
        </>
      )}
      <button onClick={postImageFile}>전송</button>
      {message && <p>{message}</p>} {/* 메시지 표시 */}
    </label>
  );
};

export default UploadBox;
