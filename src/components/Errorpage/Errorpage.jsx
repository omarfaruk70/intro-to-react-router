import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();  // to catch the error we will use useRouterError() hook.
    // console.log(error); 
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{error.statusText || error.message}</p>
            {
             error.status === 400 && <div>
                <h1> Page not found</h1>
                <p>Go back where you from</p>
                 <Link to='/'><button>Home</button></Link>
                    
                    
             </div>
            }
        </div>
    );
};

export default Errorpage;