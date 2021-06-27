import express from "express";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

const opswitchmap = express.Router();

opswitchmap.route("/opswitchmap").get(async (res, req, next) => {
  let obs = of(1, 2, 3, 4);

  //Using MAP
  obs
    .pipe(
      map((val) => {
        return val * 2; //Returning Value
      })
    )
    .subscribe((ret) => {
      console.log("Recd from map : " + ret);
    });

  // Using SWITCHMAP
  obs
    .pipe(
      switchMap((val) => {
        return of(val * 2); //Returning Value
      })
    )
    .subscribe((ret) => {
      console.log("Recd from map : " + ret);
    });
});

module.exports = opswitchmap;
