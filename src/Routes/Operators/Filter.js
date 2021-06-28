import express from "express";
import axios from "axios";
import { from } from "rxjs";
import { filter } from "rxjs/operators";

const opfilter = express.Router();

opfilter.route("/opfilter").get(async (req, res, next) => {
  await axios.get("https://swapi.dev/api/people").then((result) => {
    const array = from(result.data.results);
    array
      .pipe(filter((val) => parseInt(val["height"]) > 100))
      .subscribe((val) => console.log("height: " + parseInt(val["height"])));
  });
});

module.exports = opfilter;
