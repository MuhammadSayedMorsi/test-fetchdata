import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Table } from "reactstrap";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Table dark>
      {posts.map((post: any) => (
        <tbody>
          <tr>
            <td key={post.id}>{post.name}</td>
          </tr>
          <tr>
            <td key={post.id}>{post.body}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}

export default App;
