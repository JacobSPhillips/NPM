const franc = require('franc')
const langs = require('langs')
const colors = require('colors')
const input = process.argv[2];

const language = franc(input)
if (language === "und") {
    console.log("COULD NOT FIGURE IT OUT. TRY WITH MORE SAMPLE TEXT")
} else {
    console.log(`Our best guess is ${langs.where('3', language).name}`.green)
}