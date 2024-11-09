import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    FormData : {
        title : '',
        description : '',
    },
    blogList : []
}

export const blogSlice = createSlice({
    name : 'blog',
    initialState, 
    reducers : {
        handleInputChange: (state, action)=> {
            console.log(action);
            let cpyFormData = {...state.formData };
            cpyFormData = {
                ...cpyFormData,
                ...action.payload
            };
            state.formData = cpyFormData;
        },
        handleAddTodo : (state, action)=> {
            console.log(action);
            state.blogList.push({
                id : nanoid(),
                ...state.formData
            });
            
        },
    },
});
export const {handleInputChange, handleAddTodo} = blogSlice.actions
export default blogSlice.reducer