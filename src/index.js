import express from "express";
import cors from "cors";
import opof from "./Routes/Operators/Of";
import opfrom from "./Routes/Operators/From";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.use("/opof", opof);
app.use("/opfrom", opfrom);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
