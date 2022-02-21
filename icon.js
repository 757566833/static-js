const fs = require("fs");
const path = require("path");

const remove = async () => {
    const dir = path.join(__dirname, "static", "icon");
    const list = fs.readdirSync(dir);
    for (const iterator of list) {
        console.log(iterator)
        fs.unlinkSync(path.join(__dirname, "static", "icon", iterator))
    }

}

const createIndex = async () => {
    remove();
    // console.log(list)
    const dir = path.join(__dirname, "src", "icon");
    const list = fs.readdirSync(dir);
    const json = {}
    for (const iterator of list) {
        if (iterator.endsWith("svg")) {
            json[iterator.split('.')[0]] = `/icon/${iterator}`
            fs.copyFileSync(path.join(__dirname, "src", "icon", iterator), path.join(__dirname, "static", "icon", iterator))
        }
    }
    console.log(json)
    fs.writeFileSync(path.join(__dirname, "static", "icon", `index.json`), JSON.stringify(json))

}
createIndex()