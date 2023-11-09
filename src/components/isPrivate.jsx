/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { AuthContext } from "../context/Auth.context"
import { useNavigate } from "react-router-dom"

function IsPrivate({ children }) {
    const { isLoading, isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate();
    if (isLoading) { // if the page is loading then show this
        return <p>Loading...</p>
    }
    if (!isLoggedIn) { // once the page has loaded and isLoading is true, then user goes through this if statement, check if not logged in
navigate("/login")
    }
    return <div>{children}</div> // user sent to the page in the IsPrivate
}

export default IsPrivate