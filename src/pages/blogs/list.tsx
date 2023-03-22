import React from 'react'
import BlogLayout from '../../components/blogs/BlogLayout';
import BlogCard from '@/components/blogs/BlogCard'
import BlogService from '../../services/BlogService'
import { BlogModel } from '../../models/BlogModel'

const List = () => {
    const blogService = new BlogService();
    const response = blogService.GetAllBlogs();
    const blogs: BlogModel[] = response.content;
    return <React.Fragment>
        <BlogLayout>
            {
            // blogs.map((blog: BlogModel) => ( <BlogCard key={blog.blogId} blogModel={blog} /> ))
            }
        </BlogLayout>
    </React.Fragment>;
}

export default List;