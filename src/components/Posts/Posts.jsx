import React from 'react';
import Dots from '../../pages/Dashboard/View/img/more-horizontal.svg';
import './posts.css';

const Posts = ({posts}) => {
  return (
    <div className="view__blocks">
        {posts.map((doc) => {
            return(
                <div className="view__blocks-block" >
                    <h4 className="view__blocks-block-title">{doc.name}</h4>
                    <p className="view__blocks-block-date">Updated 2 minutes ago</p>
                <div className="view__blocks-block-status">
                    <p className="view__blocks-block-status-text">{doc.status}</p>
                </div>
                <div className="view__blocks-block-status">
                    <h5 className="view__blocks-block-author">{doc.author}</h5>
                    <div className="view__blocks-block-author-status">{doc.authorStatus}</div>
                </div>
                    <img src={Dots} alt="" />
                </div>
                ) 
            })}
    </div>
  );
};

export default Posts;