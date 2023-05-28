import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";

function Cases(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
           <div className="pt-28">
                Cases
            </div> 
            <Footer/>
        </Layout>
    )
}
export default Cases