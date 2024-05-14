import { addSV, deleSV, getSV, getOneSV } from "../../helpers/StudentController";
import { 
    FETCH_STUDENT_REQUEST, 
    FETCH_STUDENT_SUCCESS, 
    FETCH_STUDENT_FAIL,

    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS, 
    CREATE_STUDENT_FAIL,
    
    DELE_STUDENT_REQUEST,
    DELE_STUDENT_SUCCESS,
    DELE_STUDENT_FAIL
} from "../types/typesUser";

const fetchStudentRepest = () => {
    return{
        type: FETCH_STUDENT_REQUEST
    }
}

const fetchStudentSuccess = (students) => {
    return{
        type: FETCH_STUDENT_SUCCESS,
        payload: students
    }
}

const fetchStudentFail = (error) => {
    return{
        type: FETCH_STUDENT_FAIL,
        payload: error
    }
}

export function getSutudent (){
    try {
        return async (dispatch) => {
            dispatch(fetchStudentRepest())
            const data = await getSV();
            if (data) {
                dispatch(fetchStudentSuccess(data));
            } else {
                dispatch(fetchStudentFail())
            }
      };
    } catch (error) {
        console.log('Lỗi lấy sinh viên');
    }
};


const createStudentRepest = () => {
    return{
        type: CREATE_STUDENT_REQUEST
    }
}

const createStudentSuccess = () => {
    return{
        type: CREATE_STUDENT_SUCCESS,
    }
}

const createStudentFail = (error) => {
    return{
        type: CREATE_STUDENT_FAIL,
        payload: error
    }
}

export function addSutudent (name, code, lop, email, address){
    try {
        return async (dispatch) => {
            dispatch(createStudentRepest())
            const data = await addSV(name, code, lop, email, address);
            if (data) {
                dispatch(createStudentSuccess(data));
            } else {
                dispatch(createStudentFail())
            }
      };
    } catch (error) {
        console.log('Lỗi thêm sinh viên');
    }
};


const deleStudentRepest = () => {
    return{
        type: DELE_STUDENT_REQUEST
    }
}

const deleStudentSuccess = () => {
    return{
        type: DELE_STUDENT_SUCCESS,
    }
}

const deleStudentFail = (error) => {
    return{
        type: DELE_STUDENT_FAIL,
        payload: error
    }
}

export function deleSutudent (id){
    try {
        return async (dispatch) => {
            dispatch(deleStudentRepest())
            const data = await deleSV(id);
            if (data) {
                dispatch(deleStudentSuccess(data));
            } else {
                dispatch(deleStudentFail())
            }
      };
    } catch (error) {
        console.log('Lỗi xóa sinh viên');
    }
};
