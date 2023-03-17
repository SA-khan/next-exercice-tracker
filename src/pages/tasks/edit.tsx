import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

const Edit = () => {
    const router = useRouter()
    const { id } = router.query
    return <div>
        <Head>
            <title>Exercise Tracker - Edit Task</title>
        </Head>
        <Layout>
            <h2>Edit Task {id}</h2>
        </Layout>
    </div>;
} ;

export default Edit;