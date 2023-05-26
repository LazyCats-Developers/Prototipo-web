import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import React  from 'react';
function About(){
    return(
        <Layout>
            <Navbar/>
           <div className="pt-28">
           About
            </div> 
            <Footer/>
        </Layout>
    )
}
export default About