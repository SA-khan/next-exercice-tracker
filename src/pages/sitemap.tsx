import Layout from "@/components/Layout";
import Link from 'next/link';

function Sitemap() {
    return <div>
        <Layout>
            <div className="bg-white">
            <h2 className="bg-light p-2">Exercise Tracker - Sitemap</h2>
            <div className="m-2 p-2">
            <h4 className=""><i>Authentication</i></h4>
            <hr/>
            <ul>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/registration"}>Get Yourself Registered</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/login"}>Login</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/forgetpassword"}>Forget Password</Link></li>
            </ul>
            <h4><em>Tasks</em></h4>
            <hr/>
            <ul>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/tasks/GetAllTasks"}>Get All Tasks</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/tasks/getTask"}>Get Task Details</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/tasks/rdit"}>Edit Task</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/tasks/delete"}>Delete Task</Link></li>
            </ul>
            <h4><em>Others</em></h4>
            <hr/>
            <ul>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/"}>Index</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/about"}>About</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/sitemap"}>Sitemap</Link></li>
                <li><Link className="text-decoration-none" target={"_blank"} href={"/disclaimer"}>Disclaimer</Link></li>
            </ul>
            </div>
            </div>
            </Layout>
        </div>;
}

export default Sitemap;