import { useState } from 'react';
// import { Pagination } from '@nextui-org/react';
import articlesData from '../../../assets/data/Articles';
import './ArticlesList.css';

const ArticlesList = () => {
    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);

    const articlesArray = Object.entries(articlesData).flatMap(([key, value]) => {
        return value.map(article => ({ ...article, category: key }));
    });

    // const indexOfLastArticle = currentPage * itemsPerPage;
    // const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };

    const groupedArticles = {};
    articlesArray.forEach(article => {
        if (!groupedArticles[article.category]) {
            groupedArticles[article.category] = [];
        }
        groupedArticles[article.category].push(article);
    });

    return (
        <div className="articles-container">
            {Object.entries(groupedArticles).map(([category, articles]) => (
                <div className='articles-main' key={category}>
                    <h2 className='text-black'>{category}</h2>
                    {articles.map((article, index) => (
                        <div className="article-item text-justify" key={`${article.category}-${index}`}>
                            <span>{index + 1}. </span>
                            <div>
                                <span>{article.Title}, </span>
                                <span>{article.Authors}, </span>
                                <span>{article.Journal}, </span>
                                <span>{article.Year}, </span>
                                <span>{!article['Impact Factor'] && article['Impact Factor'] + ","} </span>
                                <a href={article.DOI || "#"} target="_blank" rel="noopener noreferrer">
                                    <span className="font-bold text-black">More</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ArticlesList;
