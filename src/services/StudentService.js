import axios from "axios";

export const GetAllStudent = async (pageindex) => {
    try {
        const res = await axios.get(`http://demo-api.stecom.vn:8888/api/student/get-all?pageSize=10&pageIndex=${pageindex}`);
        if (res.status == 200) {
            return res.data
        } else {
            console.log('Không có dữ liệu danh sách sinh viên');
        }
    } catch (error) {
        console.log('Lỗi lấy danh sách sinh viên');
    }
};

export const GetStudentById = async (id) => {
    try {
        const res = await axios.get(`http://demo-api.stecom.vn:8888/api/student/get-student-by-id/${id}?id=${id}`);
        if (res.status == 200) {
            return res.data
        } else {
            console.log('Không có dữ liệu sinh viên');
        }
    } catch (error) {
        console.log('Lỗi lấy sinh viên');
    }
};

export const CreateStudent = async (name, mssv, dob) => {
    try {
        data = {
            name: name,
            dateOfBirth: dob.toISOString(),
            studentCode: mssv
        }
        const res = await axios.post('http://demo-api.stecom.vn:8888/api/student/create-student', data);
        if (res.status == 200) {
            return res.data
        } else {
            console.log('Không thể thêm sinh viên');
        }
    } catch (error) {
        console.log('Lỗi thêm sinh viên');
    }
};

export const DeleStudent = async (id) => {
    try {
        const res = await axios.delete(`http://demo-api.stecom.vn:8888/api/student/delete/${id}`);
        if (res.status == 200) {
            return res.data
        } else {
            console.log('Không thể xóa sinh viên');
        }
    } catch (error) {
        console.log('Lỗi xóa sinh viên');
    }
};