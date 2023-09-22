import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userdata = useLoaderData();
    const {name} = userdata;
    console.log(userdata);
    return (
        <div>
            <p>Details about user {name}</p>
            <h1>Hello there ! This is for Every single user details</h1>
        </div>
    );
};

export default UserDetails;