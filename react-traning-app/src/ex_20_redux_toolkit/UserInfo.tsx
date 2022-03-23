import { useSelector } from "react-redux"
import { RootState } from "./store"

const UserInfo = () => {
    const { name, ip, isIPLoading } = useSelector((store: RootState) => store.user);
    return <span>Twoje imię to {name} a Twój adres IP to <strong>{ isIPLoading ? 'Trwa ładowanie' : ip}</strong></span>
}

export { UserInfo }