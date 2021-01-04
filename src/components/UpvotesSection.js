import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {

    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <>
            <div id="upvotes-section">
                <button onClick={() => upvoteArticle()}>Like</button>
                <p>This post has been liked {upvotes} times</p>
            </div>
        </>
    );
}

export default UpvotesSection;