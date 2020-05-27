require("dotenv").config();

const express = require("express"),
  cookieParser = require("cookie-parser"),
  cors = require("cors");

require("./config/mongoose.config")(process.env.DB_NAME);

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:1337" }));
app.use(express.json());

require("./routes/user.routes")(app);
require("./routes/airplane.routes")(app);
require("./routes/request.routes")(app);

app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`)
);
