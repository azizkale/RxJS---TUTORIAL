import express from "express";
import cors from "cors";
import opof from "./Routes/Operators/Of";
import opfrom from "./Routes/Operators/From";
import opmap from "./Routes/Operators/Map";
import opscan from "./Routes/Operators/Scan";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.use("/", opof);
app.use("/", opfrom);
app.use("/", opmap);
app.use("/", opscan);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
