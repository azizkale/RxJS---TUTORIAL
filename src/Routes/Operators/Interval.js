import express from "express";
import { interval } from "rxjs";

const opinterval = express.Router();

opinterval.route("/opinterval").get(async (req, res, next) => {
  //emit value in sequence every 1 second
  const source = interval(1000).subscribe((val) => console.log(val));
});

module.exports = opinterval;
