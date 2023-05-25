import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

function Contact(){
    return(
        <Layout>
            <Navbar/>
           <div className="pt-28">
           Contact
            </div> 
            <Footer/>
        </Layout>
    )
}
export default Contact