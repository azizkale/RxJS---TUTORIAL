import express from "express";
import { of } from "rxjs";
import { tap, map } from "rxjs/operators";

const optap = express.Router();

optap.route("/optap").get(async (req, res, next) => {
  const source = of(1, 2, 3, 4, 5)
    .pipe(
      tap((val) => console.log(`map'ten önce: ${val}`)),
      map((val) => val + 10),
      tap((val) => console.log(`map'ten sonra: ${val}`))
    )
    .subscribe((val) => console.log(val));
});

module.exports = optap;
