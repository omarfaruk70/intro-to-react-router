import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const Users = useLoaderData()
    // console.log(Users);
    return (
        <div>
            <h3>our users are awsome and polite</h3>
            <small>Our Users {Users.length}</small>

            <div className="users-container">
                {
                    Users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};



export default Users;