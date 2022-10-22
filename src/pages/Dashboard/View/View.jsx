import React, { useEffect, useState } from 'react'
import './view.css'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Dots from './img/more-horizontal.svg'
import PostDataService from '../../../services/post.services'

const View = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const deleteHandler = async (id) => {
  //   await PostDataService.deleteBook(id);
  //   getPosts();
  // };
  return (
    <div className='view'>
        <Navbar/>
        <div className="main__view">
            <Sidebar />
            <div className="view__container">
                <div className="view__bar">
                  <p className="view__bar-title">Page title</p>
                  <p className="view__bar-title">Created</p>
                  <p className="view__bar-title">Status</p>
                  <p className="view__bar-title">Author</p>
                  <Link to='/dashboard/create'> <button className="view__button">Add new</button></Link>
                </div>
                <div className="view__blocks">
                  {posts.map((doc, index) => {
                    return(
                      <div className="view__blocks-block">
                      <h4 className="view__blocks-block-title">{doc.name}</h4>
                      <p className="view__blocks-block-date">Updated 3 weeks ago</p>
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
            </div>
        </div>
    </div>
  )
}

export default View