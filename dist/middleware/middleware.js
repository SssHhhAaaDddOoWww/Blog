import Jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
export const middleware = async (req, res, next) => {
    try {
        const token = req.headers.token;
        //@ts-ignore
        const decoded = Jwt.verify(token, process.env.JWT_secret);
        if (decoded) {
            next();
        }
        else {
            res.json("error occurred !!");
        }
    }
    catch {
        res.json({
            message: " error u are not signed in !!!!"
        });
    }
};
//# sourceMappingURL=middleware.js.map