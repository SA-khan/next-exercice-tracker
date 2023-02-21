import React from 'react'
import Image from 'next/image'

const PageHeading = ({title, source}) => {
    return <React.Fragment>
        <div className="bg-light p-2">
            <Image className="d-inline" src={"/images/"+source} width={40} height={40} alt="logo" />
            <h2 className="d-inline align-middle"> {title} </h2>
        </div>
    </React.Fragment>;
}

export default PageHeading;