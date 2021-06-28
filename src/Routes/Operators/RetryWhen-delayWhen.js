import express from "express";
import { timer, interval } from "rxjs";
import { map, tap, retryWhen, delayWhen } from "rxjs/operators";

const opretry_delay = express.Router();

opretry_delay.route("/opretry_delay").get(async (req, res, next) => {
  //emit value every 1s
  const source = interval(1000)
    .pipe(
      map((val) => {
        if (val > 5) {
          //error will be picked up by retryWhen
          throw val;
        }
        return val;
      }),
      retryWhen((errors) =>
        errors.pipe(
          //log error message
          tap((val) => console.log(`Value ${val} was too high!`)),
          //restart in 6 seconds
          delayWhen((val) => timer(val * 1000))
        )
      )
    )
    .subscribe((val) => console.log(val));
});

module.exports = opretry_delay;
