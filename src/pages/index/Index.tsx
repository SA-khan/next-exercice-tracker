import React from 'react';
import PageHeading from '@/components/shared/PageHeading';
import Styles from './styles.module.css';
import Layout from '@/components/Layout';

const Index = () => {

    // function addZero(i) {
    //     if (i < 10) {i = "0" + i}
    //     return i;
    //   }
      
    //   const d = new Date();
    //   let h = addZero(d.getHours());
    //   let m = addZero(d.getMinutes());
    //   let s = addZero(d.getSeconds());
    //   let symbol = h / 12 > 0 ? 'pm' : 'am' 
    //   let time = h % 12 + ":" + m;
    let time = ''
    let symbol = ''

    return <React.Fragment>
        <PageHeading title='Home' source='home.jfif' />  
              <div className={Styles.container}>
                <h1>
                  <div className={Styles.time}>{time} {symbol}</div>
                </h1>
              </div>
    </React.Fragment>;
}

export default Index;