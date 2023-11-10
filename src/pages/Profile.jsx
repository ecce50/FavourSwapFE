/* eslint-disable no-unused-vars */
import { AuthContext } from "../context/Auth.context"
import { useContext } from "react"
import Logout from "../components/Logout"

function Profile() {
    const { authenticateUser, user } = useContext(AuthContext)

 
 
    return (
        <>
        <div>Profile</div>
            <h3>Welcome {user ? user.email : null} </h3>
        <Logout/>
      </>
  )
}

export default Profile