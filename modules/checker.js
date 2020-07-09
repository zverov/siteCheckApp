const axios = require('axios')

module.exports = async function checker(url) {
    try {
        await axios.get(url)
        return true
    } catch (error) {
        return false
    }
}
