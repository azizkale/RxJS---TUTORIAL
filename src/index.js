import express from "express";
import cors from "cors";
import opof from "./Routes/Operators/Of";
import opfrom from "./Routes/Operators/From";
import opmap from "./Routes/Operators/Map";
import opscan from "./Routes/Operators/Scan";
import opinterval from "./Routes/Operators/Interval";
import optap from "./Routes/Operators/Tap";
import optimer from "./Routes/Operators/Timer";
import opconcatmap from "./Routes/Operators/ConcatMap";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.use("/", opof, opconcatmap);
app.use("/", opfrom);
app.use("/", opmap);
app.use("/", opscan);
app.use("/", opinterval);
app.use("/", optap);
app.use("/", optimer);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
