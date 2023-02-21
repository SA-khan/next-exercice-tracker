import React from 'react'
import Image from 'next/image'

const NewsReport = ({title, description, imageUrl, reportingDate}) => {
    return <React.Fragment>
        <div className='card p-2 mb-2'>
            <Image className='card-img-top' src="/images/news1.jpg" width={404} height={480} alt="news image" />
            <div className='card-body'>
                <h5 className='card-title'> {title} -  <kbd>{reportingDate}</kbd> </h5>
               
                <p className='card-text'> {description} </p>
                <a className='btn btn-primary'>Read more</a>
            </div>
        </div>
    </React.Fragment>;
}

export default NewsReport;