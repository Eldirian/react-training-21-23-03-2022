import { createElement } from "react";

interface User {
    id: number;
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
            name: 'Katarzyna',
            lastName: 'Nowak'
        },
        {
            id: 4,
            name: 'Anna',
            lastName: 'Annowska'
        }
    ];

    const renderedUser = <li>{users[0].name}</li>; // Element możemy zapisać do stałej/zmiennej
    const renderedUser2 = createElement('li', {}, users[0].name); // działanie jednoznaczne z linijką wyżej - JSX daje ładniejszą składnię w postaci znaczników

    const renderedUsers = [renderedUser, renderedUser2];

    const mappedUsers = users.map(user => <li key={user.id} id={`user-${user.id}`}>{user.name}</li>)

    return <ul>
        {/* Podejście nr 4 - mapujemy tablicę na elementy */}
        {mappedUsers}

        {/* Podejście nr 3 - renderowanie tablicy 2 elementów */}
        {/* {renderedUsers} */}

        {/* Podejście nr 2 - renderowanie pojedynczego elementu */}
        {/* {renderedUser2} */}

        {/* Podejście nr 1 - wszystko ręcznie */}
        {/* <li>Marek</li>
        <li>Tomek</li>
        <li>Ania</li>
        <li>Kasia</li>
        <li>Franek</li> */}
    </ul>
    }

export {App}