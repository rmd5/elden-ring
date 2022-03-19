const sl = require("./soul-levels.json")
const reviews = require("./reviews.json")

// Get all soul level information
function allLevels() {
    return sl
}

function nextLevel(lvl) {
    if (lvl < 1 || lvl > 713) {
        return "Please choose a number between 1 and 713"
    } else {
        return sl[lvl + 1]
    }
}

function runesTo(lvl) {
    if (lvl < 1 || lvl > 713) {
        return "Please choose a number between 1 and 713"
    } else {
        let totalFrom = sl[1].total
        let totalTo = sl[lvl].total

        return totalTo - totalFrom
    }
}

function runesFromTo(lvlFrom, lvlTo) {
    if (lvlFrom < 1 || lvlFrom > 713 || lvlTo < 1 || lvlTo > 713) {
        return "Please choose a number between 1 and 713 for both inputs"
    } else {
        if (lvlTo <= lvlFrom) {
            return "Please ensure the value of the second input is larger than that of the first"
        } else {
            let totalFrom = sl[lvlFrom].total
            let totalTo = sl[lvlTo].total

            return totalTo - totalFrom
        }
    }
}

function ratings() {
    return reviews
}

function info() {
    return {
        title: "Elden Ring",
        genre: "Action Role-Playing",
        release: "February 25, 2022",
        developer: "FromSoftware Inc",
        platforms: ["PlayStation 4", "Xbox Series X and Series S", "Xbox One", "PlayStation 5", "Microsoft Windows"],
        awards: ["The Game Award for Most Anticipated Game"],
        directors: ["Hidetaka Miyazaki", "Yui Tanimura"],
        writers: ["George R. R. Martin", "Hidetaka Miyazaki"],
        composers: ["Yuka Kitamura", "Tsukasa Saitoh", "Yoshimi Kudō", "Tai Tomisawa", "Shoi Miyazawa"],
        publishers: ["FromSoftware Inc", "BANDAI NAMCO", "Namco Bandai Games America Inc"]
    }
}

let eldenring = {
    allLevels,
    nextLevel,
    runesTo,
    runesFromTo,
    ratings,
    info
}

module.exports = eldenring