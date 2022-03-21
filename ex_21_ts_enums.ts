enum UserRole {
    ADMIN,
    USER,
    EMPLOYEE
}

enum UserRoleV2 {
    ADMIN = 'ADMIN',
    USER = 'USER',
    EMPLOYEE = 'EMPLOYEE'
}

interface User {
    name: string;
    email: string;
    role: UserRoleV2;
}

const user1: User = {
    name: 'Marcin',
    email: 'example@email.com',
    role: UserRoleV2.ADMIN
}

if (user1.role === UserRoleV2.ADMIN) {
    console.log('User is admin')
}