const fetch = require("node-fetch")
const { Skin } = require("./classes/Skin")
const { getUUID } = require("../index")

/**
 * @returns {Promise<Skin>}
 * @param {String} username
 */
async function getSkin(username) {
    const uuid = await getUUID(username)

    if (!uuid) {
        return undefined
    }

    const head = `https://mc-heads.net/avatar/${uuid}`
    const full = `https://mc-heads.net/player/${uuid}`
    const download = `https://mc-heads.net/skin/${uuid}`
    const render = `https://visage.surgeplay.com/full/${uuid}`
    const headRender = `https://visage.surgeplay.com/head/${uuid}`
    let optifineCape = `http://s.optifine.net/capes/${username}.png`
    let mojangCape = `https://crafatar.com/capes/${uuid}`

    let res = await fetch(optifineCape)

    if (res.status == 404) {
        optifineCape = undefined
    }

    res = await fetch(mojangCape)

    if (res.status == 404) {
        mojangCape = undefined
    }

    return new Skin(head, full, download, render, headRender, optifineCape, mojangCape)
}

module.exports = getSkin
