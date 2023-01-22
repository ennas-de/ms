import Table from "react-bootstrap/Table";

import "./PostsTable.css";

const PostsTable = ({ posts }) => {
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr className="dark-column">
            <th className="extend">Post ID</th>
            <th className="extend">User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length > 0 ? (
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>
                <p>No data found</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default PostsTable;
