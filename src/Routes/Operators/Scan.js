import express from "express";
import axios from "axios";
import { from, Subject } from "rxjs";
import { scan, map } from "rxjs/operators";

const opScan = express.Router();

opScan.route("/opscan").get(async (req, res, next) => {
  const array = from([10, 20, 30, 40, 50, 60]);

  // example-1
  array
    .pipe(
      map((val) => {
        return val;
      }),
      scan((total, n) => {
        return total + n;
      }),
      map((sum, index) => sum)
    )
    .subscribe(console.log);

  // example-2
  array
    .pipe(
      map((val) => {
        return val.toString();
      }),
      scan((acc, curr) => {
        return acc + " - " + curr;
      })
    )
    .subscribe(console.log);
});

module.exports = opScan;
