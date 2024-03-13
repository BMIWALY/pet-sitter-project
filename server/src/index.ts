import express, { Request, Response } from "express";
import cors from "cors";

async function init() {
    const app = express();
    const port = 4000;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req: Request, res: Response) => {
        res.json({ message: 'Hello World' });
    });

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

init();
