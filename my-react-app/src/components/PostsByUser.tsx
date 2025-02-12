import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Form, Button, Container, ListGroup} from 'react-bootstrap'
import { GET_POSTS_BY_USER } from "../queries/Queries";

const PostsByUser = () => {

    const [userId, setUserId] = useState<string>("");
    const [searchId, setSearchId] = useState<string>("");

    const { data, loading, error} = useQuery(GET_POSTS_BY_USER,
        { variables: {userId: searchId},
        skip: !searchId
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchId(userId.trim());
    };

    return(
        <Container>
            <h2>Search by User ID</h2>
            <Form onSubmit={handleSearch}>
                <Form.Group>
                    <Form.Label>Filter by User ID:</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter ID here"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Search...</Button>
            </Form>
            {loading && <div><h3>Loading...</h3></div>}
            {error && <div><h3>Error: {error.message}</h3></div>}

            {data && data.posts && data.posts.data && data.posts.data.length > 0 && (
                <ListGroup>
                    {data.posts.data.map((post: {id: string; title: string; body:string; user:{id:string}}) =>(
                        <ListGroup.Item key={post.id}>{post.title} by {post.user.id}<br/>
                        {post.body}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    )
}

export default PostsByUser;