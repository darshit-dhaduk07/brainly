import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { generateHash } from "./utils.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await UserModel.create({ username, password });

  res.json({
    message: "user Signed up",
  });
});

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({ username, password });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );
    res.json({ token });
  } else {
    res.status(403).json({ message: "invalid cradential" });
  }
});

//@ts-ignore
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;

  //@ts-ignore
  await ContentModel.create({
    link,
    type,
    //@ts-ignore
    userId: req.userId,
    tags: [],
  });
  res.json({
    message: "content created",
  });
});

//@ts-ignore
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");

  res.json({
    content,
  });
});
app.delete("/api/v1/content/", async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.uerId,
  });
  res.json({
    message: "content deleted",
  });
});

//@ts-ignore
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    const hash = generateHash(10);

    
    const existingLink = await LinkModel.findOne({
      //@ts-ignore
      userId: req.userId,
    });
    console.log(existingLink);
    
    if (existingLink) {
      res.json({
        message: "/share/" + existingLink.hash,
      });
    }
    await LinkModel.create({
      //@ts-ignore
      userId: req.userId,
      hash: hash,
    });
    res.json({
      message: "/share/" + hash,
    });
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId,
    });
    res.json({
      message: "Removed link",
    });
  }
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;


  const link = await LinkModel.findOne({
    hash,
  });
  console.log(link);
  
  if (!link) {
    return res.status(411).json({
      message: "sorry link is not valid",
    });
  }
  const content = await ContentModel.findOne({
    userId: link.userId,
  });
  console.log(content);
  
  const user = await UserModel.findOne({
    _id: link.userId,
  });
  console.log(user);
  
  res.json({
    username: user?.username,
    content: content,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
