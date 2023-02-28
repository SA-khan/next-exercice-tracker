import React, { useState } from 'react'
import BlogLayout from '../../components/blogs/BlogLayout'

const Create = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [keywords, setKeywords] = useState([])

    function saveHandler(e)  {
        e.preventDefault();
        console.log(title + '-' + description + '-' + keywords);
    }
    
    return <React.Fragment>
        <BlogLayout>
        <div className='h-100'>
            <div className='form-group'>
                <label className='form-control' htmlFor='title'> Title 
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter blog title" />
                </label>
            </div>

            <div className='form-group'>
                <label className='form-control w-100' htmlFor='description'> Description
                    <textarea className='text'  rows={4} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description" />
                </label>
            </div>
            <div className='form-group'>
                <label className='form-control' htmlFor='keywords'>Keywords
                    <input value={keywords} onChange={(e)=>setKeywords(e.target.value)} placeholder="Enter Keywords" />
                </label>
            </div>
            <button className='btn btn-primary m-2' onClick={(e)=>saveHandler(e)}>Save</button>
        </div>
        </BlogLayout>
    </React.Fragment>;
}

export default Create;