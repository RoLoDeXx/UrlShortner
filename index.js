const express = require("express");
const app = express();
app.use(express.json({ extended: false }));
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
