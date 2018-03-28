import axios from "axios";

const studentsUrl = "http://localhost:8888/users";
const url = "http://localhost:8888/classes";

export const fetchStudents = () => axios.get(studentsUrl);
export const fetchClassess = ()=>axios.get(url);
