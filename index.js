const express = require("express");
const app = express();

const connectDB = require("./config/db");
// connect to db
connectDB();

app.use(express.json({ extended: false }));

//Routes

app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
