import React from 'react';
import ArticlesList from './Articles/ArticlesList';
import BooksList from './Books/BooksList';
import GradualSpacing from '../magicui/gradual-spacing';
import './ResearchAndArticles.css';

const ResearchAndArticles = () => {
    return (
        <div className='research-articles flex flex-col items-center px-8 py-8 md:px-11 md:py-16'>
            <GradualSpacing text="Books" className="text-black text-2xl font-bold mt-2 mb-3" />
            <div className="w-full">
                <BooksList />
            </div>
            <GradualSpacing text="Research And Articles" className='text-black text-2xl font-bold mt-3 mb-1' />
            <div className="w-full">
                <ArticlesList />
            </div>
        </div>
    )
}

export default ResearchAndArticles;
