import { connect } from 'react-redux'

function Navbar() {
    return (
        <nav className='w-full py-10 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-8">Job Postings</h3>
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-8">Job Postings</h3>
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-8">Job Postings</h3>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Create new job
                        </button>
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