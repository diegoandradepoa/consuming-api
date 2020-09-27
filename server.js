const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // response é a resposta do axios MAS eu tiro o data de dentro do response
    const { data } = await axios("https://api.deezer.com/user/1367329468");
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3000);
