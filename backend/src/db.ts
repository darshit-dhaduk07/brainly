import mongoose, { Model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://darshit_dhaduk:darshit123@cluster0.xuj68q3.mongodb.net/Brainly"
);
const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const ContentSchema = new Schema({
  tiele: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const LinkSchema = new Schema({
  hash: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true ,unique:true},
});


export const LinkModel = mongoose.model("Link", LinkSchema);
export const ContentModel = mongoose.model("content", ContentSchema);
export const UserModel = mongoose.model("User", UserSchema);
