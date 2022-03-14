const sl = require("./soul-levels.json")

// Get all soul level information
function allLevels() {
    return sl
}

function nextLevel(lvl) {
    if (lvl < 1 || lvl > 712) {
        return "Please choose a number between 1 and 712"
    } else {
        return sl[lvl + 1]
    }
}

function runesTo(lvl) {
    if (lvl < 1 || lvl > 712) {
        return "Please choose a number between 1 and 712"
    } else {
        let totalFrom = sl[1].total
        let totalTo = sl[lvl].total

        return totalTo - totalFrom
    }
}

function runesFromTo(lvlFrom, lvlTo) {
    if (lvlFrom < 1 || lvlFrom > 712 || lvlTo < 1 || lvlTo > 712) {
        return "Please choose a number between 1 and 712 for both inputs"
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
    return {
        "PCGamesN": "10/10",
        "The Guardian": "5/5",
        "IGN": "10/10",
        "GameSpot": "10/10",
        "Game Informer": "10/10",
        "PC Gamer": "90/100",
        "Games Radar": "5/5",
        "VG24/7": "5/5",
        "Destructoid": "10/10"
    }
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