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
        },
    },
});
export const {handleInputChange, handleAddTodo} = blogSlice.actions
export default blogSlice.reducer