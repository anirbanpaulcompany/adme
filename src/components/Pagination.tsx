import React from 'react';

interface PaginationProps {
    loadPrevious: () => void;
    loadNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ loadPrevious, loadNext, hasPrevious, hasNext }) => {
    return (
        <div className="pagination">
            {hasPrevious && <button onClick={loadPrevious}>Prev</button>}
            {hasNext && <button onClick={loadNext}>Next</button>}
        </div>
    );
};

export default Pagination;
