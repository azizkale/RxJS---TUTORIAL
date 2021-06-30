import express from "express";
import { timer, of } from "rxjs";
import { concatMapTo } from "rxjs/operators";

const optimer = express.Router();

optimer.route("/optimer").get(async (req, res, next) => {
  //example - 1;
  const source = timer(1000);
  //output: 0
  const subscribe = source.subscribe((val) => console.log("example-1: " + val));

  //example-2
  const source2 = timer(1000, 2000);
  //output: 0,1,2,3,4,5......
  const subscribe2 = source2.subscribe((val) =>
    console.log("example-2: " + val)
  );

  // example-3
  // This could be any observable
  const source3 = of(1, 2, 3);

  const result = timer(3000)
    .pipe(concatMapTo(source3))
    .subscribe((x) => console.log("example-3:" + x));
});

module.exports = optimer;
