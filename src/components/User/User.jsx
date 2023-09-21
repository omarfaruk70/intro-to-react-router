import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, email} = user;
    const userStyle = {
        border: '5px solid pink',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`user/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;