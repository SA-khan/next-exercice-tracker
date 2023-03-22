'use client'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import Image from 'next/image'
import PageHeading from '../components/shared/PageHeading'
import Styles from '../app/styles.module.css'
import { createStore } from 'redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '@/pages/index/Index';
import Prayer from '@/pages/prayer'
import WeatherIndex from '@/pages/weather/WeatherIndex'
import NewsIndex from '@/pages/news/NewsIndex'
import TaskIndex from '@/pages/tasks/TaskIndex'
import BlogsIndex from '@/pages/blogs/BlogsIndex'
import ExerciseIndex from '@/pages/exercise/ExerciseIndex'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
      <React.Fragment>
          <div className='card shadow p-2 mt-2 mb-2'>
            <Layout>
              <Index />
            </Layout>
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout><Index /></Layout>}>
                  <Route index element={<Index/>} />
                  <Route path="prayer" element={<Prayer />} />
                  <Route path="weather" element={<WeatherIndex />} />
                  <Route path="news" element={<NewsIndex />} />
                  <Route path="tasks" element={<TaskIndex />} />
                  <Route path="blogs" element={<BlogsIndex />} />
                  <Route path="exercise" element={<ExerciseIndex />} />
                </Route>
              </Routes>
            </BrowserRouter> */}
          </div>
      </React.Fragment>
  )
}
