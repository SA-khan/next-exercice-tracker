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
          <h2>Index</h2>
          <Link href='/tasks/GetAllTasks'>Get All Tasks</Link>
        </Layout>
      </div>
  )
}
