import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Hello there this is home component using with React Router</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;