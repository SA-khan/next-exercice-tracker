import Head from 'next/head'
import Layout from '../../components/Layout'

const Delete = ({ id = 1  }) => {
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