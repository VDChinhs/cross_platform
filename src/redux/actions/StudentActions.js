import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateStudent, DeleStudent, GetAllStudent, GetStudentById } from "../../services/StudentService";

export const myStudents = createAsyncThunk(
    'user/getallstudent',
    async ({pageindex}) => {
        try {
            const res = await GetAllStudent(pageindex)
            return res
        } catch (error) {
            return error
        }
    }
)

export const myStudentById = createAsyncThunk(
    'user/getstudentbyid',
    async ({ id }) => {
        try {
            const res = await GetStudentById(id)
            return res
        } catch (error) {
            return error
        }
    }
)

export const myCreateStudent = createAsyncThunk(
    'user/createstudent',
    async ({ name, mssv, dob }) => {
        try {
            const res = await CreateStudent(name, mssv, dob)
            return res
        } catch (error) {
            return error
        }
    }
)

export const myDeleStudent = createAsyncThunk(
    'user/delestudent',
    async ({ id }) => {
        try {
            const res = await DeleStudent(id)
            return res
        } catch (error) {
            return error
        }
    }
)