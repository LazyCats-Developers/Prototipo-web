import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import BlogCardHorizontal from "./BlogCardHorizontal"


  
function BlogList({posts}) {


    return (
        <div className="overflow-hidden px-8 bg-white">
      <ul role="list" className="divide-y space-y-8 gap-8 divide-gray-100">
        {posts&&posts.map((post,  index) => (
          <BlogCardHorizontal data={post} index={index}/>
        ))}
      </ul>
    </div>
        
    )
}
export default BlogList