import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // 모달 컴포넌트 import
import "./PhotoGallery.css"

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/photos');
                setPhotos(response.data);
            } catch (err) {
                setError('사진을 가져오는 데 오류가 발생했습니다.');
            }
        };

        fetchPhotos();
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div className='gallery-container'>
        <div>
            <h1>사진 갤러리</h1>
            {error && <p>{error}</p>}
            <div className="photo-gallery">
                {photos.map((photo, index) => (
                    <img 
                        key={index} 
                        src={photo} 
                        alt={`Uploaded ${index}`} 
                        onClick={() => handleImageClick(photo)} 
                    />
                ))}
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                imageSrc={selectedImage} 
            />
        </div>
        </div>
    );
};

export default PhotoGallery;