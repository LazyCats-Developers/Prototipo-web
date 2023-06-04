import { Link } from "react-router-dom"
import { useEffect } from 'react'
import moment from "moment"
function BlogCardHorizontal({ data, index }) {

    useEffect(() => {

    }, [])

    return (
        <li

            key={index}>
            <Link to='/'
                onMouseEnter={() => {
                    const img = document.getElementById(index)
                    img.classList.add('object-fill')
                }}
                onMouseLeave={() => {
                    const img = document.getElementById(index)
                    img.classList.remove('object-fill')
                }}
                className="block hover:shadow-2xl rounded-lg transition duration-300 ease-in-out">
                <div className="flex items-center my-10">
                    <div className="flex min-w-0 flex-1 items-center">

                        <div className="flex-shrink-0">
                            <img id={index} className="h-56 w-96 object-cover rounded-lg " src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="" />
                        </div>

                        <div className="min-w-0 flex-1 px-4 ">
                            <p className="text-xl font-bold text-gray-900 leading-8">{data.title}</p>
                            <span className="hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                            <span className=" mt-2 font-medium text-sm mx-1">{moment(data.published).format('LL')}</span>&middot;
                            <span className=" mt-2 font-medium text-sm "> {data.time_read} min read</span> 
                            <p className="mt-4 text-lg font-regular text-gray-600 leading-8">{data.title}</p>
                        </div>

                    </div>

                </div>
            </Link>
        </li>
    )
}
export default BlogCardHorizontal