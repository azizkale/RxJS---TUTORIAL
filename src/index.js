import express from "express";
import cors from "cors";
import opof from "./Routes/Of";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.use("/", opof);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
