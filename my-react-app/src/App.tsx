import { Route, Routes } from "react-router-dom"
import FetchPosts from "./components/FetchPosts"
import PostsByUser from "./components/PostsByUser"
import PostMutations from "./components/PostMutations"

function App() {

  return (
    <Routes>
      <Route path="/posts" element={<FetchPosts/>}/>
      <Route path="/posts-by-user" element={<PostsByUser/>}/>
      <Route path="/post-mutations" element={<PostMutations/>}/>
    </Routes>
  )
}

export default App
