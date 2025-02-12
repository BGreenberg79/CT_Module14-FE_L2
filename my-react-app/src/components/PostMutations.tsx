import { useMutation } from "@apollo/client";
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "../mutations/mutations";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const PostMutations = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [postId, setPostId] = useState("");

    const [createPost] = useMutation(CREATE_POST);
    const [updatePost] = useMutation(UPDATE_POST);
    const [deletePost] = useMutation(DELETE_POST)

    const handleCreatePost = async (e: React.FormEvent) =>{
        e.preventDefault()
        await createPost({ variables: { input:{ title, body } } });
        alert("Post Created")
        setTitle("");
        setBody("")
    }

    const handleUpdatePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!postId) return alert("Must provide a post ID to update post")
        await updatePost({ variables: { id: postId, input: { title, body } } });
        alert("Post Updated");
        setPostId("");
        setTitle("");
        setBody("");
    }

    const handleDeletePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!postId) return alert("Provide a post ID to delete");
        await deletePost({ variables: { id: postId } });
        alert("Post Deleted")
        setPostId("");
    }

    return(
        <Container>
            <h2>Create, Delete, and Update Posts</h2>
            <br/>
            <Form onSubmit={handleCreatePost}>
                <h4>Create Posts</h4>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder="Enter post title here..."
                    required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    placeholder="Enter post body here..."
                    required/>
                </Form.Group>
                <Button variant="success" type="submit">Create Post</Button>

            </Form>
            <br/>
            <Form onSubmit={handleUpdatePost}>
                <h4>Update Posts</h4>
                <Form.Group>
                    <Form.Label>Post ID</Form.Label>
                    <Form.Control
                    type="text"
                    value={postId}
                    onChange={(e)=> setPostId(e.target.value)}
                    placeholder="Enter post ID of post you wish to update"
                    required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Update Title</Form.Label>
                    <Form.Control
                    type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder="Update post title here..."
                    required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Update Body</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    placeholder="Update post body here..."
                    required/>
                </Form.Group>
                <Button variant="warning" type="submit">Update Post</Button>
            </Form>
            <br/>
            <Form onSubmit={handleDeletePost}>
                <h4>Delete Posts</h4>
                <Form.Group>
                    <Form.Label>Post ID</Form.Label>
                    <Form.Control type="text" value={postId} onChange={(e) => setPostId(e.target.value)}
                    placeholder="Enter Post ID of post you wish to delete"
                    required/>
                </Form.Group> 
                <Button variant="danger" type="submit">Delete Post</Button>  
            </Form>
        </Container>
    );
};

export default PostMutations;