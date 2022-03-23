import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getUserIPAddress, setName } from "./feature/user/user-slice";
import { RootState } from "./store";

const UserForm = () => {
    const { name } = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();

    const [value, setValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setName(value));
        dispatch(getUserIPAddress());
    }

    return <div>
        { name && <p>Witaj {name}, czy chcesz zmienić swoje imię?</p>}
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={value} onChange={handleInputChange} />
            <button type='submit'>Zapisz</button>
        </form>
    </div>
}

export { UserForm }