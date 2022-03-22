import { createElement } from "react";

interface User {
    id: number
    name: string;
    lastName: string;
}
const App = () => {
    const users: User[] = [
        {
          id: 1,
            name: 'Marek',
            lastName: 'Kowalski'
        },
        {
          id: 2,
            name: 'Tomasz',
            lastName: 'Frankowski'
        },
        {
          id: 3,
            name: 'Ewa',
            lastName: 'Bem'
        },
        {
          id: 4,
            name: 'Anna',
            lastName: 'Jantar'
        }
    ];

    const renderedUser = <li>{users[0].name}</li>;
    const renderedUser2 = createElement('li',{}, users[0].name); //działanie jednoznaczne z linijką wyżej

    const renderedUsers = [renderedUser,renderedUser2];


    const mappedUsers = users.map(user => <li key={user.id}>{user.name}</li>);

    return <ul>{mappedUsers}
    </ul>
}

export {App};