import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../apis/api";

import PostsTable from "../../components/PostsTable";

import "./Posts.css";

const Posts = ({ searchTerm }) => {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await axios.get(`${API}/posts/?q=${searchTerm}`);
      setPosts(res.data);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <section className="main">
        {isLoading ? (
          "Loading..."
        ) : (
          <PostsTable posts={posts} id="data-table" />
        )}
      </section>
    </div>
  );
};

export default Posts;
