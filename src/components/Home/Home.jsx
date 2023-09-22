import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    // console.log(navigation);
    // console.log(location);
    return (
        <div>
            <Header></Header>
            <h1>Hello there this is home component using with React Router</h1>

            {
                navigation.state === 'loading' ? 
                 <h1>Loading....</h1> : 
                   <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;