import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postdetails = useLoaderData();
    const {id, title, body} = postdetails;
    // console.log(postdetails);
    // const params = useParams()
    // console.log(params);
    return (
        <div>
            <h1>post details about: {id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default PostDetails;