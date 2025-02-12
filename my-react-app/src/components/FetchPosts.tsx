import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/Queries";
import { Container, ListGroup } from "react-bootstrap";

const FetchPosts = () => {
    const { data, loading, error } = useQuery(GET_POSTS);

    if (loading) return <div><h2>Loading...</h2></div>

    if (error) return <div><h3>Error: {error.message}</h3></div>

    return(
        <Container>
            <h2>Posts</h2>
            <ListGroup>
                {data.posts.data.map((post: {id:string; title:string; body:string; user: {id: string}}) =>(
                    <ListGroup.Item key={post.id}><h4>{post.title} from {post.user.id}</h4>
                    <br/>
                    {post.body}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default FetchPosts