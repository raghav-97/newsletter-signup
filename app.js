import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const email = req.body.email;
    console.log(email);

    res.render("success", {email});
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})