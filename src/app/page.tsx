import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'

export default function Home() {
  return (
      <div>
        <Head>
          <title>Exercise App - Index</title>
        </Head>
        <Layout>
            <h2 className="bg-light text-dark p-2">Home</h2>
            <div className="m-2 p-2">
              <Link href='/tasks/GetAllTasks'>Goto Tasks</Link> <br/>
              <Link href='/blogs/index'>Goto Blogs</Link>
            </div>
        </Layout>
      </div>
  )
}
