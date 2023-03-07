import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import Image from 'next/image'
import PageHeading from '../components/shared/PageHeading'
import Styles from '../app/styles.module.css'
import { createStore } from 'redux'

export default function Home() {
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let symbol = h / 12 > 0 ? 'pm' : 'am' 
  let time = h % 12 + ":" + m;
  return (
      <React.Fragment>
        <Head>
          <title>Exercise App - Home</title> 
        </Head>
        <Layout>
          <div className='card shadow p-2 mt-2 mb-2'>
            <PageHeading title='Home' source='home.jfif' />  
            
            <div className={Styles.container}>
              <h1>
                <div className={Styles.time}>{time} {symbol}</div>
              </h1>
            </div>

            </div>
        </Layout>
      </React.Fragment>
  )
}
