import React, { useState } from 'react';

export interface Image {
    id: string;
    download_url: string;
    author: string;
  }

const ImageList: React.FC<{ images: Image[] }> = ({ images }) => {
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleImageLoad = (id: string) => {
        setLoadedImages((prevState) => [...prevState, id]);
    };

    return (
        <div className="image-list">
            {images.map((image) => (
                <div key={image.id} className="image-item">
                    {!loadedImages.includes(image.id) && (
                        <div className="skeleton skeleton-img"></div>
                    )}
                    <img
                        src={image.download_url}
                        alt={image.author}
                        className="image"
                        style={{ display: loadedImages.includes(image.id) ? 'block' : 'none' }}
                        onLoad={() => handleImageLoad(image.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageList;
