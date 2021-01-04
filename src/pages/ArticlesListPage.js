import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/articleList'
const ArticlesListPage = () => (
    <>
        <h1>Article</h1>
    <ArticleList articles={articleContent}></ArticleList>
       
    </>
);

export default ArticlesListPage;