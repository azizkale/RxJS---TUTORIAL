import express from "express";
import axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";

const opMap = express.Router();

opMap.route("/").get(async (req, res, next) => {
  await axios.get("https://swapi.dev/api/people").then((result) => {
    const array = from(result.data.results);

    array
      .pipe(map((val) => parseInt(val["height"]) + 50))
      .subscribe((val) => console.log(val));
  });
});

module.exports = opMap;
