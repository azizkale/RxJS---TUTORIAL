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
import opmergemap from "./Routes/Operators/MergeMap";
import switchmap from "./Routes/Operators/SwitchMap";
import throwerror from "./Routes/Operators/ThrowError";
import opretry_delay from "./Routes/Operators/RetryWhen-delayWhen";
import opfilter from "./Routes/Operators/Filter";

const PORT = process.env.PORT || 4003;

const app = express();
app.use(cors());

app.use(
  "/",
  opfrom,
  opmap,
  opscan,
  opinterval,
  optap,
  optimer,
  opof,
  opconcatmap,
  opmergemap,
  switchmap,
  throwerror,
  opretry_delay,
  opfilter
);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
