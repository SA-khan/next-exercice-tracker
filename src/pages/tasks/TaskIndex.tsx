import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Script from 'next/script' 
import Image from 'next/image'
import Head from 'next/head'
import TaskLayout from '@/components/tasks/TaskLayout';

const TaskIndex = () => {

    return <div>
            <Head>
                <title>Excercise App - Tasks - Index</title>
            </Head>
            <TaskLayout>
                <Image priority placeholder='blur' blurDataURL="/images/task.jpg" className='' src='/images/task.jpg' width={900} height={600} alt="task log0" />
            </TaskLayout>
        </div>;
}

export default TaskIndex;