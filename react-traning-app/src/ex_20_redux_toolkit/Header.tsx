import { useSelector } from "react-redux"
import { RootState } from "./store"
import { UserInfo } from "./UserInfo"

const Header = () => {
    const { name } = useSelector((store: RootState) => store.user);

    if(!name)
        return <p>Jesteś niezalogowany</p>

    return <UserInfo />
}

export { Header }