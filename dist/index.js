import express from "express";
import connectDB from "./db.js";
import BlogRouter from "./routes/Blog.js";
import UserRouter from "./routes/auth.js";
const app = express();
app.use(express.json());
app.use("/api/blogs", BlogRouter);
app.use("/api/auth", UserRouter);
const main = async () => {
    try {
        await connectDB();
        app.listen(3000);
        console.log("working ");
    }
    catch (error) {
        console.log("Error starting server:", error);
    }
};
main();
//# sourceMappingURL=index.js.map