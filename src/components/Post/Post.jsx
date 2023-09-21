import { Link } from "react-router-dom";

const Post = ({post}) => {
    // console.log(post);
    const {id, title} = post;
    const postStyle = {
        border: '5px solid pink',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
            <h1>post title: {title}</h1>
            <h1>post id:  {id}</h1>
           <Link to={`/post/${id}`}><button>show details</button></Link>
        </div>
    );
};

export default Post;