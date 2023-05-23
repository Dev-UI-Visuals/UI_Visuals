import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/event/:name", function (req, res) {
    var name = req.params.name;

    fs.readFile("MajorEvents.json", 'utf-8', (error, data) => {
        if (error) {
            return res.render("error");
        } else {
            const parsedData = JSON.parse(data);
            var  eventData = parsedData.filter((curr) => {
                if (curr.id == name.toString()) {
                    return curr
                }
            });
            if (eventData.length == 0) {
                return res.render("error");

            } else {
                return res.render('SingleEvent',{ data: eventData[0] })
            }
        }
    });
});
app.get("/*", function (req, res) {
    res.render("error");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
})