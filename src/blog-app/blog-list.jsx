import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogListOnInitialLoad } from "../store/slices/blogSlice";


function BlogList(){
    const dispatch = useDispatch();
    const { blog } = useSelector((state) => state);
    const { blogList } = blog;

    console.log(blogList);

    useEffect(()=>{
        dispatch(setBlogListOnInitialLoad({
            blogList : JSON.parse(localStorage.getItem('blogList')) || [],
        }))
    },[])
    
    return (
         <ul>
        {blogList?.length > 0 ? (
            blogList.map((singleBlogItem) => (
            <div style={{border : '1px solid red',padding : '10px' }} 
            key={singleBlogItem?.id}>
             <h3>{singleBlogItem?.title}</h3>
             <h3>{singleBlogItem?.description}</h3>
            </div>
            ))
         ) : (
             <h1>No blog added ! Please add a blog</h1>
        )}
    </ul>
    )
}
export default BlogList;