const {} = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "This is node REST API response",
        imageUrl: "images/bulb.jpeg",
        creator: {
          name: "Harit",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(req.body);
  // create
  res.status(201).json({
    message: "Post created successfully.",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Harry" },
      createdAt: new Date(),
    },
  });
};
