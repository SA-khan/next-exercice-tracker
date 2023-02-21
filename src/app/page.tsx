import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import Image from 'next/image'
import PageHeading from '../components/shared/PageHeading'

export default function Home() {
  return (
      <React.Fragment className="w-100">
        <Head>
          <title>Exercise App - Home</title> 
        </Head>
        <Layout>
          <PageHeading title='Home' />  
          <div className="bg-light h-95 w-100 p-2">
              <Link className="text-decoration-none" href='/tasks/Index'>Goto Tasks</Link> <br/>
              <Link className="text-decoration-none" href='/blogs/Index'>Goto Blogs</Link> <br/>
              <Link className="text-decoration-none" href='/news/Index'>Goto News</Link> <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
        </Layout>
      </React.Fragment>
  )
}
