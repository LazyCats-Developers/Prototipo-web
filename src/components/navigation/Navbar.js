import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, Fragment, useEffect } from 'react'
import logo_bk from 'assets/img/cat-blackface.png'
import logo_ot2 from 'assets/img/cat-outline2.png'
import DotLoader from 'react-spinners/DotLoader'

function Navbar() {
    
    const [loading,setLoading]=useState(true)
    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return (
        <nav id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <Link to='/'>
                        <img
                        src={logo_bk}
                        width={70}
                        height={60}
                        className=""/></Link>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</Link>
                        <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</Link>
                        <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</Link>
                        <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</Link>
                        <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</Link>
                        <Link to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</Link>
                        <Link
                            to="/contacto"
                            type="button"
                            className="ml-12 inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            Hire us
                            <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={15} color='#ffffff'/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProp = state => ({

})
export default connect(mapStateToProp, {

})(Navbar)