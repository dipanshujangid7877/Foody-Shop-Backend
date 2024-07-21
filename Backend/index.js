const cookiparser = require("cookie-parser");
const express = require("express");
let dotenv = require("dotenv");
let path = require("path");
const cors = require("cors");
dotenv.config();
const app = express();

// const http = require('http');
// const socketIo = require('socket.io');
// // const videoCallRoutes = require('./routes/videoCallRoutes');
// const server = http.createServer(app);
// const io = socketIo(server)

app.use(express.json());
app.use(cookiparser());
// app.use(cors());

const corsOptions = {
  origin: ["http://localhost:5173"], // Allow requests from example1.com and example2.com
  methods: 'GET,POST', // Allow only GET and POST requests
    credentials: true,
  allowedHeaders: 'Content-Type,Authorization', // Allow only specific headers
};


// Handle CORS preflight requests
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
let { connectDB } = require("./db/dbconnection.js");



app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/",require("./src/routs/user_validation.js"))

app.use("/public", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "src/views"));

app.set("view engine", "ejs");

// Start the Express server
connectDB();
app.listen(process.env.port, () => {
  console.log(`app listening on ${process.env.host}`);
}); 

