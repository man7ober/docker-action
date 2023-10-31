const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
	res.send("<h1 style='color: #80ed99;'>Hello, Nodejs 💚</h1>");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
