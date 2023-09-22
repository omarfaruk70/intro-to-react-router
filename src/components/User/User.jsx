import { Link, useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, email} = user;
    console.log(user);
    const navigate = useNavigate(); // to navigate we use this hook
    const gobackOneStep = ()=>{
        navigate(-1);
        // navigate('user/${user.id}') we can also use like it
    }
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
            <Link to={`/user/${user.id}`}>Show Details</Link>
            {/* go back one step with useNavigate hook */}
            <button onClick={gobackOneStep}>Go back</button>
        </div>
    );
};

export default User;