if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
const connectDB = require("./config/dbConnect");

connectDB();

app.use(cors());

app.use(express.json());

const contactRoutes = require("./router/contact.routes");
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
