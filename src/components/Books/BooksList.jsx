import React, { useState } from 'react';
import { Pagination } from '@nextui-org/react';
import booksData from '../../assets/data/Books';
import './BooksList.css';

const BooksList = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="books-container">
            <div>
                {currentBooks.map((book, index) => (
                    <div className="book-item" key={index}>
                        <span className="book-number">{indexOfFirstBook + index + 1}. </span>
                        <div>
                            <span>{book.title}, </span>
                            <span>{book.author}, </span>
                            <span>{book.publisher}, </span>
                            <span>{book.location}, </span>
                            <span>{book.year}, </span>
                            <a href={book.url} target="_blank" rel="noopener noreferrer">
                                <span className="more-link">More</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
                total={Math.ceil(booksData.length / itemsPerPage)}
                initialPage={1}
                page={currentPage}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default BooksList;
