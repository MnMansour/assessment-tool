import axios from "axios";

const studentsUrl = "http://localhost:8888/users";

export const fetchStudents = () => axios.get(studentsUrl);
