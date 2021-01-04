import React, { useState, useEffect } from 'react';
import ArticleList from '../components/articleList';
import articleContent from './article-content';
import NotFoundPage from './notFoundPage';
import CommentsList from '../components/commentList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const Article = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
       const fetchData = async () => {
           const result = await fetch(`/api/articles/${name}`);
           const body = await result.json();
      
           setArticleInfo(body);
       }
       fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />
    const otherArticles = articleContent.filter(article => article.name !== name)
    return (
        <>
            <h1>{article.name}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}></UpvotesSection>
            {article.content.map((para, key) => (
                <p key={key}>{para}</p>
            ))}
            <CommentsList comments={articleInfo.comments}></CommentsList>
            <AddCommentForm articleName ={name} setArticleInfo={setArticleInfo}/>
            <h3>Related articles</h3>
            <ArticleList articles={otherArticles}></ArticleList>
        </>
    );
}

export default Article;