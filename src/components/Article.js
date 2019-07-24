import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

class Article extends Component {
    render() {
        return (
            <section className="article-home">
                <div className="container-fluid">
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                </div>
            </section>
        );
    }
}

export default Article;