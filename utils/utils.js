const { Account, PreviousName } = require("./classes/NameHistory")
const fetch = require("node-fetch")

const cache = new Map()

/**
 * @returns {Account}
 * @param {String} username username of the user to get previous names for
 */
async function getNameHistory(username) {
    if (username.length > 16) return undefined

    if (cache.has(username.toLowerCase())) {
        return cache.get(username.toLowerCase())
    }

    let res = await fetch("https://mc-heads.net/minecraft/profile/" + username).then((url) => {
        return url.json()
    })

    let pastNames = []
    let currentName
    let uuid

    if (res.error) {
        res = await fetch("https://api.mojang.com/users/profiles/minecraft/" + username).then(
            (url) => {
                return url.json()
            }
        )

        uuid = res.id
        currentName = res.name

        if (!uuid) {
            return undefined
        }

        res = await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`).then((url) => {
            return url.json()
        })

        pastNames = res
    } else {
        uuid = res.id
        currentName = res.name
        pastNames = res.name_history
    }

    const newPastNames = []

    for (const pastName of pastNames) {
        const a = new PreviousName(pastName.name, pastName.changedToAt)

        newPastNames.push(a)
    }

    newPastNames.reverse()

    const account = new Account(uuid, currentName, newPastNames)

    cache.set(username.toLowerCase(), account)

    setTimeout(() => {
        cache.delete(username)
    }, 20 * 60 * 1000)

    return account
}

exports.getNameHistory = getNameHistory
