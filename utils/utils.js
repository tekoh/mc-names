const { fetch } = require("node-fetch")

/**
 * 
 * @param {String} username username of user
 * @returns {String} minecraft UUID
 */
async function getUUID(username) {
    const uuidURL = "https://api.mojang.com/users/profiles/minecraft/" + username

    const uuid = await fetch(uuidURL).then((uuid) => uuid.json())

    if (!uuid.id) {
        return undefined
    } else {
        return uuid.id
    }
}

exports.getUUID = getUUID