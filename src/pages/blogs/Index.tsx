import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'
import BlogNavigation from '@/components/blogs/BlogNavigation'
import Styles from './styles.module.css'

const index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Blogs Updates" source="blog.png" />
            <BlogNavigation />
            <div className='shadow card mt-2 mb-2 p-2 pull-right'>
                <Image className='card-image-top' src="/images/blogs.png" width={940} height={400} alt="card" />
                <div className='card-body'>
                    <div className="card-title blog-text"><strong>Lets make a blog</strong><Link className='text-decoration-none' href="/blogs/create"> Create One!</Link></div>
                    <p className="card-text blog-text">Where the Internet is about availability of information, blogging is about making information creation available to anyone ~ <em>George Siemens
</em></p>
                </div>
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default index;