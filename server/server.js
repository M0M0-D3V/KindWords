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

const server = app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`)
);

const io = require("socket.io")(server);

io.on("connect", (socket) => {
  socket.on("event_from_client", (data) => {
    io.emit("send_Data_to_all_other_clients", data);
  });
});
