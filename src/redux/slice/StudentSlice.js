import { createSlice } from "@reduxjs/toolkit";
import { myStudentById, myStudents, myCreateStudent, myDeleStudent } from "../actions/StudentActions";

const initialStudent = {
    listStudent: [],
    numberPages: 4,
    studenting: {},
    isLoading: true,
    isLoadingOneStudent: true,
    isCreating: false,
    isDele: false
};

const studentSlice = createSlice({
    name: 'student',
    initialState: initialStudent,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(myStudents.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(myStudents.fulfilled, (state, action) => {
                state.listStudent = action.payload.items
                state.numberPages = Math.ceil(action.payload.totalItem / 10)
                state.isLoading = false
            })
            .addCase(myStudents.rejected, (state, action) => {
                state.isLoading = false
            })

            .addCase(myStudentById.pending, (state, action) => {
                state.isLoadingOneStudent = true
            })
            .addCase(myStudentById.fulfilled, (state, action) => {
                state.studenting = action.payload
                state.isLoadingOneStudent = false
            })
            .addCase(myStudentById.rejected, (state, action) => {
                state.isLoadingOneStudent = false
            })

            .addCase(myCreateStudent.pending, (state, action) => {
                state.isCreating = true
            })
            .addCase(myCreateStudent.fulfilled, (state, action) => {
                state.isCreating = false
            })
            .addCase(myCreateStudent.rejected, (state, action) => {
                state.isCreating = false
            })

            .addCase(myDeleStudent.pending, (state, action) => {
                state.isDele = true
            })
            .addCase(myDeleStudent.fulfilled, (state, action) => {
                state.isDele = false
            })
            .addCase(myDeleStudent.rejected, (state, action) => {
                state.isDele = false
            })
    }
})

export default studentReducer = studentSlice.reducer