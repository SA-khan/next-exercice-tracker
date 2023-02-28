import { BlogModel } from '@/models/BlogModel';
import React from 'react'

const BlogCard = (blogModel: BlogModel) => {
    return <React.Fragment>
        <div className='card m-2'>
            <div className='card-title'>
                {blogModel?.title} - {blogModel?.createdBy}
            </div>
            <div className='card-text'>
                {blogModel?.description}
            </div>
        </div>
    </React.Fragment>;
}

export default BlogCard;