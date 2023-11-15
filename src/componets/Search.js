import React, { useEffect, useState } from 'react';
import "./Search.css";

const Search = () => {
    const [searchterm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [searchterm]);

    async function getBooks() {
        const response = await fetch(`https://openlibrary.org/search.json?title=${searchterm}`);
        const data = await response.json();
        setBooks(data?.docs);
    }

    return (
        <>
            <div className='searchbox'>
                <p>
                    SEARCH <input onChange={(e) => setSearchTerm(e.target.value)} type="text" /> HERE
                </p>
            </div>
            <div className="book-list">
                {books.slice(0, 12).map((book) => (
                    <div key={book.key} className="book-item">
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} 
                         />
                         <h1 className='book-title'>{book.title}</h1>
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;
