const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getGamesFromApi } = require("./src/utils/utils.js");
require("dotenv").config();
const { PORT } = process.env;

async function startServer() {
  await conn.sync({ force: true });
  await getGamesFromApi();
  server.listen(PORT, () => {
    console.log("%s listening at", PORT);
  });
}

startServer();
