import Layout from '../components/Layout'
import Head from 'next/head'
const About = () => {
    return <div>
        <Head>
            <title>Exercise Tracker - About</title>
        </Head>
        <Layout>
            <div className="bg-white">
            <h2 className="bg-light text-dark p-2">Exercise Tracker - About</h2>
            <div className="m-2 p-2">
                <p className="text-dark">
                The information presented in the EQ-5D demo is for demonstration purposes only and not for research or any other purposes. No part of these pages, either texts or images may be used for any purpose other than personal use. Reproduction, modification, storage in a retrieval system or retransmission, in any form or by any means, electronic, mechanical or otherwise, for reasons other than personal use, is thus strictly prohibited without prior written permission. <br /><br />

The EuroQol Research Foundation makes no representations or warranties in relation to the EQ-5D demo or the information and materials provided on the EQ-5D demo.<br /><br />

The EuroQol Research Foundation does not accept responsibility for any loss or damage however caused including, without limitation, any indirect or consequential loss or damage arising from or in connection with the use of the EQ-5D demo or any linked website. Nor does the EuroQol Research Foundation accept any responsibility for any such loss arising out of the reliance on any information contained on or accessed through the EQ-5D demo.<br /><br />

Trade marks, copyrights, brand names, product and company names related to the products and images appearing on the EQ-5D demo are for demonstration purposes only and remain the property of their respective owners. The depiction of products or images is for demonstration purposes only and in no way indicates that the EuroQol Research Foundation is sponsored or approved by, or otherwise affiliated with, the owner of any such rights.<br /><br />

The EuroQol Research Foundation is the proprietor of all Intellectual Property rights, including but not limited to copyright and neighbouring rights, patent rights and rights relating to know-how, database rights, trade mark and trade name rights, and design rights in the EQ-5D demo.<br /><br />
                </p>
            </div>
            </div>
            </Layout>
    </div>;
}

export default About;