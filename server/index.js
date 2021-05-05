const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server run on ${PORT}`);
    });
  } catch (e) {}
};



start();
