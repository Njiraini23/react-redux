import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange, setBlogListOnInitialLoad, setCurrentEditedBlogId } from "../store/slices/blogSlice";


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

    function onDeleteBlog(getCurrentBlogId){
        console.log(getCurrentBlogId);
        dispatch(
            handleDeleteBlog({
            CurrentBlogId : getCurrentBlogId,
        }))
    }

    function onEditBlog(getCurrentBlog){
        dispatch(setCurrentEditedBlogId({
            CurrentBlogId: getCurrentBlog?.id,
        }))
        dispatch(handleInputChange({
            title : getCurrentBlog?.title,
            description: getCurrentBlog?.description,
        }))
    }
    
    return (
         <ul>
        {blogList?.length > 0 ? (
            blogList.map((singleBlogItem) => (
            <div 
            style={{border : '1px solid red',padding : '10px' }} 
            key={singleBlogItem?.id}
            >
             <h3>{singleBlogItem?.title}</h3>
             <h3>{singleBlogItem?.description}</h3>
             <button
             onClick={()=>onEditBlog(singleBlogItem)}
             >Edit Blog</button>
             <button onClick={()=>onDeleteBlog(singleBlogItem.id)} >
                Delete Blog
                </button>
            </div>
            ))
         ) : (
             <h1>No blog added ! Please add a blog</h1>
        )}
    </ul>
    )
}
export default BlogList;