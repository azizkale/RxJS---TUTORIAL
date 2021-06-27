import express from "express";
import axios from "axios";
import { of } from "rxjs";

const opof = express.Router();

opof.route("/opof").get(async (req, res, next) => {
  //with opretor of You can create a sequence which consist of some variables which you choosed
  const source = of(1, "mike", true, 4, { country: "German" });
  const subscribe = source.subscribe((val) => console.log(val));
});

module.exports = opof;
