import express from "express";
import axios from "axios";
import { from } from "rxjs";

const opfrom = express.Router();

opfrom.route("/opfrom").get(async (req, res, next) => {
  await axios.get("https://swapi.dev/api/people").then((result) => {
    const array = from(result.data.results);
    array.subscribe(console.log);
  });
});

module.exports = opfrom;
