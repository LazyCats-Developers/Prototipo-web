import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list_category } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_page,
    posts,
    count,
    next,
    previous
}) {

    const params = useParams()
    const slug = params.slug   

    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list_category(slug)
    }, [])
    return (
        <Layout>
            <Helmet>
                <title> Category: {slug}</title>
            </Helmet>
            <Navbar />
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list_category,
})(Category)