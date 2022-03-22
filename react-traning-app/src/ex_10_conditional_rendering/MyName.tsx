interface Props {
    name?: string
    favouriteColor?: string;
}

const MyName = ({name, favouriteColor}: Props) => {
    return <>
        <h1>Witaj {name || 'Nieznajomy'}</h1>
        {favouriteColor && <p>Twój ulubiony kolor to {favouriteColor}</p>}
    </>
}

export {MyName}