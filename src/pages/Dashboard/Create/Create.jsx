import React from 'react'
import './create.css'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Plus from './img/plus-circle.svg'
import { Formik } from 'formik';
import PostDataService from '../../../services/post.services'

const Create = () => {
  return (
    <div>
        <Navbar/>
        <div className="create">
            <Sidebar/>
            <div className="create-wrapper">
            <Formik
              initialValues={{ 
                name: '',
                created: '',
                status: 'Published',
                author: 'Joe Bloggs',
                authorStatus: 'admin'
              }}
              onSubmit={(values, actions) => {
                if(values.name){
                  PostDataService.addPosts(values)
                  actions.resetForm()
                }else{
                  alert('Enter title of page')
                }
              }}
            >
              {props => (
                <form onSubmit={props.handleSubmit}>
                  <div className="create__block">
                  <input
                    className = "create__block-input"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                  />
                  <div className="create__block-right">
                      <h5 className="view__blocks-block-author">Joe Bloggs</h5>
                      <div className="view__blocks-block-author-status">Admin</div>
                      <button type='submit' className="create__button">Add page</button>
                  </div>
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                  </div> 
                </form>
              )}
            </Formik>
            <div className="create__block-new">
              <img src={Plus} alt="" /><p className="create__block-new-text">Add new section</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Create