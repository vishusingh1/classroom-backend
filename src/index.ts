import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})