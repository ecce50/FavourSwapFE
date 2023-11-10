/* eslint-disable no-unused-vars */
import { AuthContext } from "../context/Auth.context"
import { useContext } from "react"

function Profile() {
    const { authenticateUser, user } = useContext(AuthContext)
    //authenticateUser()

 
 
    return (
        <>
        <div>Profile</div>
            <h3>Welcome {user ? user.email : null} </h3>
      </>
  )
}

export default Profile