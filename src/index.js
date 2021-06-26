import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
