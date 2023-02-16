import Head from 'next/head'
import Layout from '../../components/Layout'

const Edit = ({ id = 1  }) => {
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