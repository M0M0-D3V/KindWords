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

const currentAirPlane = {
  airPlane: [],
};

io.on("connection", (socket) => {
  // socket.on is when receiving new airplane
  console.log("new connection.");
  // socket.emit is to send just to that connection. this will change the user input field to [object object]
  socket.emit("updated Airplane", currentAirPlane);

  socket.on("disconnect", () => {
    console.log("disconnected.");
  });

  socket.on("new airplane", (message) => {
    console.log(message);
    // console.log("nice to meet you.(shake hand)");
    currentAirPlane.airPlane.push({
      message,
      date: new Date(),
    });
    console.log(currentAirPlane);
    socket.emit("updated Airplane", currentAirPlane);

    // io.emit is message to all connections
    // io.emit("send_data_to_all_connected_clients", currentAirPlane);

    socket.broadcast.emit("updated Airplane", currentAirPlane);
  });
});
