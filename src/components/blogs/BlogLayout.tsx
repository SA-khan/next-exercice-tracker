import React from 'react'
import Image from 'next/image'
import Layout from '../Layout';
import PageHeading from '../shared/PageHeading';
import BlogNavigation from './BlogNavigation';

const BlogLayout = ({ children }:{children: React.ReactNode}) => {
    return <React.Fragment>
        <Layout>
        <PageHeading title="Blogs Updates" source="blog.png" />
            <BlogNavigation />
            <div className='shadow card mt-2 mb-2 p-2'>
                { children }
            </div>
        </Layout>
    </React.Fragment>;
}

export default BlogLayout;