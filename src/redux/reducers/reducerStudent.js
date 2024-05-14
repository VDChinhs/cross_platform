import { 
    FETCH_STUDENT_FAIL, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_REQUEST, 
    CREATE_STUDENT_REQUEST, CREATE_STUDENT_SUCCESS, CREATE_STUDENT_FAIL,
    DELE_STUDENT_FAIL, DELE_STUDENT_REQUEST, DELE_STUDENT_SUCCESS 
} from "../types/typesUser";

const initialState = {
    students: [],
    isLoading: true,
    error: '',
    isCreating: false,
    isDeleting: false,
};

function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_STUDENT_SUCCESS:
            return {
                ...state, 
                students: action.payload, 
                isLoading: false,
                error: ''
            };

        case FETCH_STUDENT_FAIL:
            return {
                ...state, 
                students: [],
                error: action.payload
            };
        
        case CREATE_STUDENT_REQUEST:
            return {
                ...state,
                isCreating: true
            };
        
        case CREATE_STUDENT_SUCCESS:
            return {
                ...state,
                isCreating: false
            };
        
        case CREATE_STUDENT_FAIL:
            return {
                ...state,
                isCreating: false,
                error: action.payload
            };

        case DELE_STUDENT_REQUEST:
            return {
                ...state,
                isDeleting: true
            };
        
        case DELE_STUDENT_SUCCESS:
            return {
                ...state,
                isDeleting: false
            };
        
        case DELE_STUDENT_FAIL:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default studentsReducer;