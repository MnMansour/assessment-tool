import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';
   
//Integrify-Finland/jsonserver/blob/master/db.json
const initialState = {
      "classes": {
        "001": {
          "id": "001",
          "location":"Helsinki",
          "name": "Spring 2018",
          "participantCount": "10",
          "currentSprint": "12",
          "headTeacher": "T001",
          "graduationDate": "2018-04-01",
          "plannedSprints": "20"
        },
        "002": {
          "id": "002",
          "location": "Main Campus Helsinki, Finland",
          "name": "Summer 2018",
          "participantCount": "12",
          "currentSprint": "0",
          "headTeacher": "T002",
          "graduationDate": "2018-06-01",
          "plannedSprints": "20"
        }
      },
      "accounts": {
        "001": {
          "id": "001",
          "type": "teacher",
          "email": "jhon@example.com",
          "githubAuth": true
        },
        "002": {
          "id": "002",
          "type": "teacher",
          "email": "jacky@example.com",
          "githubAuth": true
        },
        "003": {
          "id": "003",
          "type": "student",
          "email": "alex@example.com",
          "githubAuth": true
        }
      },
      "users": {
        "001": {
          "id": "001",
          "account": "001",
          "firstName": "John",
          "lastName": "Doe",
          "phoneNumber": "+358458904323"
        },
        "002": {
          "id": "002",
          "account": "002",
          "firstName": "Jacky",
          "lastName": "Brown",
          "phoneNumber": "+358446544323"
        },
        "003": {
          "id": "003",
          "account": "003",
          "firstName": "Alex",
          "lastName": "Smith",
          "phoneNumber": "+358446544323"
        }
      }
    }

const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOG_IN:
			return { ...payload };
		case LOG_OUT:
			return {};
		default:
			return state;
	}
};

export default combineReducers({ user });