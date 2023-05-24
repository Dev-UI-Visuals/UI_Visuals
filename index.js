import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", async function (req, res) {
    var allData = { leaders: [], members: [],heads:[] };
    try{
        allData.leaders = JSON.parse( await fs.promises.readFile(("data/Leader.json"),'utf-8'));
        allData.members = JSON.parse( await fs.promises.readFile(("data/Member.json"),'utf-8'));
        allData.heads = JSON.parse( await fs.promises.readFile(("data/Head.json"),'utf-8'));
        res.render("index", { data: allData });
    }catch(e){
        return res.render("error");
    }

});

app.get("/event/:name", function (req, res) {
    var name = req.params.name;

    fs.readFile("data/MajorEvents.json", 'utf-8', (error, data) => {
        if (error) {
            return res.render("error");
        } else {
            const parsedData = JSON.parse(data);
            var eventData = parsedData.filter((curr) => {
                if (curr.id == name.toString()) {
                    return curr
                }
            });
            if (eventData.length == 0) {
                return res.render("error");

            } else {
                return res.render('SingleEvent', { data: eventData[0] })
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