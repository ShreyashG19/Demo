const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
    console.log("new request");
    res.json({ status: "working" });
});

app.listen(port, () => {
    console.log("listening on port 8000");
});
