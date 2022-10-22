import React, { useEffect, useState } from 'react'
import './view.css'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Posts from '../../../components/Posts/Posts'
import PostDataService from '../../../services/post.services'
import Pagination from '../../../components/Pagination/Pagination'

const View = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
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
                <Posts posts={currentPosts} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                />
            </div>
        </div>
    </div>
  )
}

export default View