import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongoose from "mongoose";

import { Posts } from "./data/posts.js";
import { Users } from "./data/users.js";

const app = express();
dotEnv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.get("/", (req, res) => res.send("Hello Abdulhakeem"));

// posts endpoint
app.get("/api/posts", (req, res) => {
  try {
    const { q } = req.query;
    // console.log(q);

    const search = (data, q) => {
      var filteredData = [];
      var qArray = [];

      for (let i = 0; i < data.length; i++) {
        qArray = q.split(" ");

        let userId = data[i].userId;
        let postId = data[i].id;
        let title = data[i].title.toLowerCase();
        let body = data[i].body.toLowerCase();

        if (
          qArray.some((qq) => postId === Number(qq)) ||
          qArray.some((qq) => userId === Number(qq)) ||
          qArray.some((qq) => title.includes(qq)) ||
          qArray.some((qq) => body.includes(qq))
        ) {
          filteredData.push(data[i]);
        }
      }

      return filteredData;
    };

    q
      ? res.json(search(Posts, q).slice(0, 100))
      : res.json(Posts.slice(0, 100));
  } catch (error) {
    error && res.status(500).json(error.message);
  }
});

app.get("/api/users", (req, res) => {
  try {
    const { q } = req.query;

    const search = (data, q) => {
      var filteredData = [];
      var qArray = [];

      for (let i = 0; i < data.length; i++) {
        qArray = q.split(" ");

        let userId = data[i].id;
        let first_name = data[i].first_name.toLowerCase();
        let last_name = data[i].last_name.toLowerCase();
        let email = data[i].email.toLowerCase();
        let gender = data[i].gender.toLowerCase();

        if (
          qArray.some((qq) => userId === Number(qq)) ||
          qArray.some((qq) => first_name.includes(qq)) ||
          qArray.some((qq) => last_name.includes(qq)) ||
          qArray.some((qq) => email.includes(qq)) ||
          qArray.some((qq) => gender.includes(qq))
        ) {
          filteredData.push(data[i]);
        }
      }

      return filteredData;
    };

    q
      ? res.json(search(Users, q).slice(0, 100))
      : res.json(Users.slice(0, 100));
  } catch (error) {
    error && res.status(500).json(error.message);
  }
});

// old
// get all posts
// app.get("/api/posts", async (req, res) => {
//   try {
//     let posts = [];

//     Posts.forEach((post) => posts.push(post));

//     // console.log(posts)

//     if (posts.length < 1)
//       return res.status(200).json({
//         success: false,
//         message: "No record found",
//       });

//     res.status(200).json(posts);
//   } catch (error) {
//     console.log(error.message);
//     error &&
//       res.status(500).json({
//         success: false,
//         message: "Error ocurred",
//         // message: error.message,
//       });
//   }
// });

// get selected posts from search keyword
// app.post("/api/posts", async (req, res) => {
//   try {
//     let posts = [];

//     let _detail = req.query.toLocaleLowerCase();

//     console.log(_detail);

//     let detail = _detail || false;

//     if (detail) {
//       Posts.filter((post) => {
//         if (
//           post.title.toLocaleLowerCase() === detail ||
//           post.body.toLocaleLowerCase() === detail
//         )
//           posts.push(post);
//       });
//     }

//     if (posts.length < 1) {
//       return res.status(200).json({
//         success: true,
//         message: "No record found",
//       });
//     }

//     res.status(200).json(posts);
//   } catch (error) {
//     console.log(error.message);

//     error &&
//       res.status(500).json({
//         success: false,
//         message: "Error Ocurred",
//         // message: error.message,
//       });
//   }
// });

mongoose
  .connect(process.env.dbUri, { useUnifiedTopology: true })
  .then(() => console.log("db connected..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3001, () => {
  console.log(`server started`);
});
