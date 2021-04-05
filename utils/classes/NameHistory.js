class Account {
    /**
     * @returns {Account}
     * @param {String} uuid uuid of user
     * @param {String} current current username of user
     * @param {Array<PreviousName>} past previous names of the user
     */
    constructor(uuid, current, past) {
        this.uuid = uuid
        this.username = current
        this.history = past

        return this
    }
}

exports.Account = Account

class PreviousName {
    /**
     *
     * @param {String} username the username that the account was changed to
     * @param {String} date the date that the username was changed
     * @returns {PreviousName}
     */
    constructor(username, date) {
        this.username = username
        this.date = date

        return this
    }

    /**
     *
     * @returns {String} formatted version of the date
     */
    getFormattedDate() {
        return new Date(this.date).toUTCString()
    }

    /**
     *
     * @param {String} format format to use when converting to string default: "$username | $date"
     * @returns {String}
     */
    toString(format) {
        if (!format) {
            format = "$username | $date"
        }

        let response = format.replace("$username", this.username)
        if (this.date) {
            response = response.replace("$date", this.getFormattedDate())
        }

        return response
    }
}

exports.PreviousName = PreviousName
