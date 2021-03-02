const Post = require('../models/post')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const getPosts = async (req, res) => {
  try {
      const posts = await Post.find()
      res.json(posts)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}



// app.get("/posts", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get("/posts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Post.findById(id);
//     res.json(post);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/posts", async (req, res) => {
//   try {
//     const post = new Post(req.body);
//     await post.save();
//     res.status(201).json(post);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put("/posts/:id", async (req, res) => {
//   const { id } = req.params;

//   await Post.findByIdAndUpdate(
//     id,
//     req.body,
//     { new: true },
//     (error, post) => {
//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }
//       if (!post) {
//         return res.status(404).json(post);
//       }
//       res.status(200).json(post);
//     }
//   );
// });

// app.delete("/posts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Post.findByIdAndDelete(id);
//     if (deleted) {
//       return res.status(200).send("Post deleted");
//     }
//     throw new Error("Post not deleted!");
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = {getPosts}