interface UserDetails {
    role: 'user',
    login: string;
    age: number;
}

interface AdminDetails {
    role: 'admin',
    scope: string;
    lastLoginDt: Date;
}

interface EmployeeDetails {
    role: 'employee',
    workingHours: string,
    phone: string
}

type PossibleDetails = UserDetails | AdminDetails | EmployeeDetails;

interface User {
    name: string;
    details: PossibleDetails;
}
