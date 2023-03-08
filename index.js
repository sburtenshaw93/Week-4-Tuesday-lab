const express = require("express");
const cors = require("cors");
 const app = express();

 app.use(express.json());
 app.use(cors());

const {getHouses, deleteHouse, updateHouse, addHouse} = require("./controller");

 app.get("api/houses", getHouses);
 app.delete("api/houses/:id", deleteHouse);
 app.put("/api/houses/:id", updateHouse);
 app.post("/api/houses", addHouse);

 app.listen(4004, () => {
    console.log("Server 4004 is up and running")
 })