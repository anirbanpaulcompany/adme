import React, { useState, useEffect } from 'react';
import ImageList, { Image } from './components/ImageList';
import Pagination from './components/Pagination';



const Gallery: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasPrevious, setHasPrevious] = useState<boolean>(false);
    const [hasNext, setHasNext] = useState<boolean>(false);

    useEffect(() => {
        fetchImages();
    }, [page]);

    const fetchImages = async () => {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
            const data: Image[] = await response.json();
            setImages(data);
            setHasPrevious(page > 1);
            setHasNext(data.length === 10); 
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const loadPrevious = () => {
        setPage(page - 1);
    };

    const loadNext = () => {
        setPage(page + 1);
    };

    return (
        <div className="container">
            <img src="/logo512.png" alt="logo" className="logo" />
            <h1>Image Gallery</h1>
            <ImageList images={images} />
                <Pagination
                    loadPrevious={loadPrevious}
                    loadNext={loadNext}
                    hasPrevious={hasPrevious}
                    hasNext={hasNext}
                />
        </div>
    );
};

export default Gallery;
