import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import Home from './img/home.svg'
import Create from './img/file-plus.svg'
import Blog from './img/pen-tool.svg'
import Files from './img/image.svg'
import Users from './img/users.svg'
import Sub from './img/zap.svg'
import Archived from './img/trash-2.svg'
import Coffee from './img/coffee.svg'
import Box from './img/box.svg'
import Book from './img/book-open.svg'



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="manage">
            <h1 className="manage__title">Manage</h1>
            <ul className='manage__list'>
                <div className="manage__link">
                    <img src={Home} alt="" /><Link to='/dashboard' className="manage__li"><li>View site</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Create} alt="" /><Link to='/dashboard/create' className="manage__li"><li>Create page</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Blog} alt="" /><Link className="manage__li"><li>Blog articles</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Files} alt="" /><Link to='/dashboard/files' className="manage__li"><li>Files</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Users} alt="" /><Link className="manage__li"><li>Users</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Sub} alt="" /><Link className="manage__li"><li>Subscriptions</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Archived} alt="" /><Link className="manage__li"><li>Archived pages</li></Link>
                </div>
            </ul>
            <h1 className="manage__title">Pro features</h1>
            <ul className='manage__list'>
            <div className="manage__link">
                    <img src={Book} alt="" /><Link className="manage__li"><li>Themes</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Box} alt="" /><Link className="manage__li"><li>Plugins</li></Link>
                </div>
                <div className="manage__link">
                    <img src={Coffee} alt="" /><Link className="manage__li"><li>Upgrade plans </li></Link>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar