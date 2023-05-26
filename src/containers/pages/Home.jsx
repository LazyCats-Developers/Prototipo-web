import Header from "components/home/Header";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Incentives from "components/home/Incentives";

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                    <Header/>
                    <Incentives/>
            </div> 
            <Footer/>
        </Layout>
    )
}
export default Home