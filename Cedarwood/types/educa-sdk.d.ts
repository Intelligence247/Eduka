declare module 'educa-sdk' {
    export class Staff {
        constructor(siteId: string);
        account: {
            login: (params: any) => void;
            verifyLogin: (params: any) => void;
            loginStatus: (params: any) => void;
            logout: (params: any) => void;
            getProfile: (params: any) => void;
            changePassword: (params: any) => void;
        };
        student: {
            studentList: (params: any) => void;
        };
        // Patched modules
        classroom: {
            getAssignedClassrooms: (params: any) => void;
            getClassroomStudents: (params: any) => void;
            getStudentInfo: (params: any) => void;
            getStudentReport: (params: any) => void;
            getStudentAttendance: (params: any) => void;
            getClassAttendance: (params: any) => void;
            getTodayAttendance: (params: any) => void;
            updateTodayAttendance: (params: any) => void;
        };
        exam: {
            getAssignedExams: (params: any) => void;
            getExamQuestions: (params: any) => void;
            addExamQuestion: (params: any) => void;
            updateExamQuestion: (params: any) => void;
            updateExamEssay: (params: any) => void;
            deleteExamQuestion: (params: any) => void;
            getExamScores: (params: any) => void;
            updateExamScores: (params: any) => void;
        };
        school: {
            schoolInfo: (params: any) => void;
            getSessions: (params: any) => void;
            getTerms: (params: any) => void;
            getEvents: (params: any) => void;
        };
    }
}
