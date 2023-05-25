import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

function Home(){
    return(
        <Layout>
            <Navbar/>
           <div className="pt-28">
                <h1 className="text-center text-9xl border pt-10 pb-10">Holiwi</h1>
            </div> 
            <Footer/>
        </Layout>
    )
}
export default Home