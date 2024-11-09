import { useDispatch, useSelector } from "react-redux";
import { handleAddTodo, handleInputChange } from "../store/slices/blogSlice";


function AddNewBlog(){

    const { blog } = useSelector((state)=>state);
    const dispatch = useDispatch();

    function onChangeInput(event){
        dispatch(
            handleInputChange({
            [event.target.name] : event.target.value,
        }))
    }
    
    function handleTodoSubmit(event){
        event.preventDefault();
        dispatch(handleAddTodo());
    }
    return (
        <div>
            <form>
                <div onSubmit={handleTodoSubmit}>
                    <label>Enter Blog Title</label>
                    <input
                    type="text"
                    name="title"
                    placeholder="Enter Blog Title" 
                    id="title"
                    onChange={onChangeInput}
                    value={blog?.formData?.title}
                    />
                </div>
                <div>
                    <label>Enter Blog Description</label>
                    <input
                    type="text"
                    name="D  escription"
                    placeholder="Enter Blog Description" 
                    id="Description"
                    onChange={onChangeInput}
                    value={blog?.formData?.description}
                    />
                </div>
                <button type="submit">Add New Blog</button>
            </form>
        </div>
    )
}

export default AddNewBlog;