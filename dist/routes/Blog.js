import { Router } from "express";
import { BlogModel } from "../model/schema.js";
import { middleware } from "../middleware/middleware.js";
const BlogRouter = Router();
BlogRouter.post("/create", middleware, async function (req, res) {
    const { title, content } = req.body;
    try {
        await BlogModel.create({
            title: title,
            content,
        });
        res.json("Blog created succesfully !");
    }
    catch {
        res.json({
            message: "error cant create blog !!"
        });
    }
});
BlogRouter.get("/preview", async function (req, res) {
    try {
        const Blogs = await BlogModel.find({}).populate("author", "username");
        res.json(Blogs);
    }
    catch {
        res.json({
            message: "error fetching blogs !!!"
        });
    }
});
export default BlogRouter;
//# sourceMappingURL=Blog.js.map