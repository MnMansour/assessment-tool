export default function (state = {}, action) {
  switch (action.type) {
    case 'USER_STATUS':
      return { ...state, user: action.payload };
    case 'USER_DB_STATUS':
      return { ...state, dbUsers: action.payload };
    case 'ALLOWED_STATUS':
      return { ...state, dbAllowedUsers: action.payload };
    case 'EDUCATION_DB_STATUS':
      return { ...state, dbEducation: action.payload };
    case 'EXPERIENCE_DB_STATUS':
      return { ...state, dbExperience: action.payload };
    case 'SKILLS_DB_STATUS':
      return { ...state, dbSkills: action.payload };
    case 'PROJECTS_DB_STATUS':
      return { ...state, dbProjects: action.payload };
    case 'ASSIGNMENTS_DB_STATUS':
      return { ...state, dbAssignments: action.payload };
    case 'CLASSES_STATUS':
      return { ...state, dbClasses: action.payload };
    default:
      return state;
  }
}
