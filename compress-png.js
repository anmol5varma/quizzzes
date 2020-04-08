const tinify = require("tinify");
const team_json = require("./src/jsons/team-logo.json")

tinify.key = "XTRjw94ShH32CY3XjkBjZzThHFsjkVmn";

Object.keys(team_json).map(team => {
    const source = tinify.fromFile(`./src/images/team_icon/${team}.png`);
    source.toFile(`./src/images/compressed/${team}.png`);
})

// Object.keys(team_json).map(team => {
//     console.log(`"${team}": require("../images/team_icon/${team}.png"),`);
// })