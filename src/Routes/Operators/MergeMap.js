import express from "express";
import { of } from "rxjs";
import { delay, mergeMap } from "rxjs/operators";

const opmergemap = express.Router();

opmergemap.route("/opmergemap").get(async (req, res, next) => {
  // mergeMap handles the data without order unlike concatMap, in this case mergeMap result inner subscription without to wait previous datas ends And does it so fast
  const source = of(3000, 2000, 1000)
    .pipe(mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val))))
    .subscribe((val) => console.log(`With mergeMap: ${val}`));
});

module.exports = opmergemap;
