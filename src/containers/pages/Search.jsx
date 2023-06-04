import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page, search_blog } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
function Search({
    posts,
    count,
    next,
    previous,
    search_blog
}) {

    const params =useParams()
    const term = params.term
    
    useEffect(() => {
        window.scrollTo(0, 0)
        search_blog(term)
    }, [])
    return (
        <Layout>
            {/* aqui va el helmet */}
            <Navbar />
            <div className="pt-24">
                SEARCH POST
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    posts: state.blog.filtered_post,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps, {
    search_blog
})(Search)