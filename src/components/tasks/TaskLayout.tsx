import React from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import TaskNavigation from './TaskNavigation';

const TaskLayout = ({children}:{children:React.ReactNode}) => {
    return <React.Fragment>
        <Head>
            <title>Excercise App - Tasks</title>
        </Head>
        
        <Layout>
            <div className='bg-light border border-light'>
            <div className='align-items-center'>
                <Image className="m-2" src='/images/task.png' width={40} height={40} alt="task logo" />
                <div className="d-inline h4"> Tasks </div>
                <TaskNavigation />
            </div>
            {children}
            </div>
        </Layout>
        
    </React.Fragment>;
}

export default TaskLayout;