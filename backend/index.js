const express = require("express");
const app = express();

const PORT = 3005;

app.get("/", (req,res) => {
    res.send("Done By shreekanth");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});
