import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRoute from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}));
app.use(cors());

app.use("/posts", postsRoute);

const CONNECTION_URL =  "mongodb+srv://<userName>:<Passowrd>@cluster0.cg5oyzu.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify', false);
