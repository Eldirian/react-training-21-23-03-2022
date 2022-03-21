interface User {
    name: string;
    lastLoginDt: Date | string;
}

const user1: User = {
    name: 'Marcin',
    lastLoginDt: new Date()
}

const user2: User = {
    name: 'Franek',
    lastLoginDt: '2022-02-12Z10:23:00'
}

