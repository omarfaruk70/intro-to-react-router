import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts);
    return (
        <div>
            <h1>this is  post: {posts.length} </h1>
           <div className="users-container">
           {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;