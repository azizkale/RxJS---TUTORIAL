import express from "express";
import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";

const opconcatmap = express.Router();

opconcatmap.route("/opconcatmap").get(async (req, res, next) => {
  // If order is important at getting data from source then concatMap is usefull
  const source = of(3000, 2000, 1000)
    .pipe(concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val))))
    .subscribe((val) => console.log(`With concatMap: ${val}`));
});

module.exports = opconcatmap;
