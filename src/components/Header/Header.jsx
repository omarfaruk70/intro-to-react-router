import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <ul>
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link> */}

                {/* using navlink is professional style */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </ul>
        </div>
    );
};

export default Header;