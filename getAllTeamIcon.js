const Axios = require('axios');
const Fs = require('fs')
const team = require("./src/jsons/team-logo.json")

async function downloadImage(url, path) {
    const writer = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}

(async function download() {
    const allfileist = Object.keys(team).map(async name => {
        console.log(`./src/images/team_icon/${name.toLowerCase()}.png`);
        return await downloadImage(team[name], `./src/images/team_icon/${name.toLowerCase()}.png`)
    })

    return Promise.all(allfileist)
})()