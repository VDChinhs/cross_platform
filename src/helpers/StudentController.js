import axios from "axios";

export const getSV = async () => {
    try {
        // const res = await axios.get('http://6629fe8467df268010a234d6.mockapi.io/api/student');
        const res = await axios.get('http://demo-api.stecom.vn:8888/api/student/get-all');
        if (res.data) {
          return res.data.items
        } else {
          console.log('Unable to fetch');
        }

    } catch (error) {
        console.log('Lỗi lấy sinh viên');
    }
};

export const getOneSV = async (id) => {
    try {
        const res = await axios.get(`http://6629fe8467df268010a234d6.mockapi.io/api/student/${id}`);
        if (res.data) {
          return res.data
        } else {
          console.log('Unable to fetch');
        }

    } catch (error) {
        console.log('Lỗi lấy 1 sinh viên');
    }
};

export const addSV = async (name, code, lop, email, address) => {
    data = {
        name : name,
        code : code,
        class : lop,
        email : email,
        address : address
    }
    try {
        const res = await axios.post('http://6629fe8467df268010a234d6.mockapi.io/api/student',data);
        if (res.data) {
          return res.data
        } else {
          console.log('Unable to fetch');
        }

    } catch (error) {
        console.log('Lỗi thêm sinh viên');
    }
};

export const deleSV = async (id) => {
    try {
        const res = await axios.delete(`http://6629fe8467df268010a234d6.mockapi.io/api/student/${id}`);
        if (res.data) {
          return res.data
        } else {
          console.log('Unable to fetch');
        }

    } catch (error) {
        console.log('Lỗi xóa sinh viên');
    }
};
