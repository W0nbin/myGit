// Upload.js
import React from "react";
import UploadBox from "./UploadBox";
import './Upload.css';
function Upload() {
  return (

    <div className="new">
      <p>내 옷장에 옷을 추가해보세요</p>
      <div>
        <UploadBox />
      </div>

    </div>

  )
};
export default Upload;