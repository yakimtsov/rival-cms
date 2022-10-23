import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './files.css';
import Search from './img/search.svg';
import Photo from './img/photo.png';
import Dots from '../View/img/more-horizontal.svg';

const Files = () => {
  return (
    <div>
        <Navbar/>
        <div className="files">
            <Sidebar/>
            <div className="files-wrapper">
                <form className="upload__container">
                  <button className='upload__container-button'>click to upload</button>
                  <p className='upload__container-text'>Drag & drop multiple files to upload</p>
                </form>
              <div className="search__container">
                <div className="search__container-search">
                  <img src={Search} alt="" />
                  <input className="search__container-search-input" type="search" placeholder='Search for file'/>
                </div>
                <div className="search__container-filter">
                  <p className='search__container-filter-title'>Filter</p>
                  <p className="search__container-filter-text">Images</p>
                  <p className="search__container-filter-text">Files</p>
                  <p className="search__container-filter-text">Audio</p>
                  <p className="search__container-filter-text">Video</p>
                </div>
            </div>
            <div className="files__container">
              <div className="files__container-img"><img src={Photo} alt="" /></div>
              <div className="files__container-title">Oceanic_view.jpg</div>
              <div className="files__container-time">Uploaded 2 days ago</div>
              <div className="files__container-dots"><img src={Dots} alt="" /></div>
            </div>
            <div className="files__container">
              <div className="files__container-img"><img src={Photo} alt="" /></div>
              <div className="files__container-title">Oceanic_view.jpg</div>
              <div className="files__container-time">Uploaded 2 days ago</div>
              <div className="files__container-dots"><img src={Dots} alt="" /></div>
            </div>
            <div className="files__container">
              <div className="files__container-img"><img src={Photo} alt="" /></div>
              <div className="files__container-title">Oceanic_view.jpg</div>
              <div className="files__container-time">Uploaded 2 days ago</div>
              <div className="files__container-dots"><img src={Dots} alt="" /></div>
            </div>
            <div className="files__container">
              <div className="files__container-img"><img src={Photo} alt="" /></div>
              <div className="files__container-title">Oceanic_view.jpg</div>
              <div className="files__container-time">Uploaded 2 days ago</div>
              <div className="files__container-dots"><img src={Dots} alt="" /></div>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Files