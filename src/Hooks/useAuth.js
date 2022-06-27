import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/Authprovider";


const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}

export default useAuth;