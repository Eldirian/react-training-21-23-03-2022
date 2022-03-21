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

interface User {
    name: string;
    details: UserDetails | AdminDetails;
}

const admin: User = {
    name: 'Marcin',
    details: {
        role: 'admin',
        lastLoginDt: new Date(),
        scope: 'asd'
    }
}

const user: User = {
    name: 'Tomek',
    details: {
        role: 'user',
        login: 'tomek',
        age: 28
    }
}

const displayUserDetails = (person: User) => {
    switch (person.details.role) {
        case 'user': {
            const { login, age } = person.details;
            console.log(`You are a user ${login} with ${age} years`);
            break;
        }
        case 'admin': {
            const { lastLoginDt, scope } = person.details;
            console.log(`You are a admin with scope ${scope} and you logged on ${lastLoginDt}`);
            break;
        }
    }
}

displayUserDetails(user);
displayUserDetails(admin);