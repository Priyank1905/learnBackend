import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app =express();

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"8kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js"
import videoRouter from "./routes/video.routes.js";
import tweetRouter from "./routes/tweet.routes.js";


//route declatration

app.use("/api/v1/video", videoRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/users",userRouter);

export { app }