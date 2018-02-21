import axios from "axios";

const url = "http://localhost:8888/classes";
const studentsUrl = "http://localhost:8888/users";

export const fetchClassess = () => axios.get(url);
export const fetchStudents = () => axios.get(studentsUrl);
