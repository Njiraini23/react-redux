import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData : {
        title : '',
        description : '',
    },
    blogList : [],
};

export const blogSlice = createSlice({
    name : 'blog',
    initialState, 
    reducers : {
        handleInputChange: (state, action)=> {
            
            let cpyFormData = {...state.formData };
            cpyFormData = {
                ...cpyFormData,
                ...action.payload,
            };
            state.formData = cpyFormData;
        },
        handleAddTodo : (state, action) => {
            console.log(action);
            state.blogList.push({
                id : nanoid(),
                ...state.formData,
            });
            state.formData = {
                title : '',
                description : '',
            };
            localStorage.getItem('blogList', JSON.stringigy(state.blogList));
        },
        setBlogListOnInitialLoad : (state, action)=> {
            state.blogList = action.payload.blogList;
        }
    },
});
export const {handleInputChange, handleAddTodo, setBlogListOnInitialLoad} = blogSlice.actions
export default blogSlice.reducer