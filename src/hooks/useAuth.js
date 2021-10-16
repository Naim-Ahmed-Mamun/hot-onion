import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    const {allContext} = useContext(AuthContext)
    return allContext;
}

export default useAuth;