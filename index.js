const { Account } = require("./utils/classes/NameHistory")
const { getNameHistory } = require("./utils/utils")

module.exports = {
    /**
     *
     * @param {String} username username of the user to get previous names for
     * @returns {Promise<Account>}
     */
    getNameHistory: async function (username) {
        return await getNameHistory(username)
    },
}
