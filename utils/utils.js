const fetch = require("node-fetch")

/**
 *
 * @param {String} username username of user
 * @returns {String} minecraft UUID
 */
async function getUUID(username) {
    const uuidURL = "https://api.mojang.com/users/profiles/minecraft/" + username

    let res

    try {
        res = await fetch(uuidURL).then((uuid) => uuid.json())
    } catch {
        return undefined
    }

    if (!res.id) {
        return undefined
    } else {
        return res.id
    }
}

exports.getUUID = getUUID
