import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

const Delete = () => {

    const router = useRouter();
    const { id } = router.query;

    return <div>
        <Head>
            <title>Exercise Tracker - Delete Task</title>
        </Head>
        <Layout>
            <h2>Delete Task {id}</h2>
        </Layout>
    </div>;
} ;

export default Delete;