import express from "express";
import { throwError, of } from "rxjs";
import { concatMap } from "rxjs/operators";

const opthrowerror = express.Router();

opthrowerror.route("/opthrowerror").get(async (req, res, next) => {
  const delays$ = of(1000, 2000, 3000, 4000, "5000");

  delays$
    .pipe(
      concatMap((val) => {
        if (typeof val === "number") {
          return of(val);
        } else {
          // This is probably overkill.
          return throwError(() => new Error(`Invalid number ${val}`));
        }
      })
    )
    .subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("Complete!"),
      error: (val) => console.log(`Error: ${val}`),
    });
});

module.exports = opthrowerror;
