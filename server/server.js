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

const server = app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`)
);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("event_from_client", (data) => {
    socket.broadcast.emit("send_data_to_all_other_clients", data);
  });
});
