const app = require("./app");
const { databaseConnection } = require("./config/database");

require("dotenv").config();

databaseConnection();



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
