const axios = require('axios')

module.exports.checker = async function(url) {
    try {
        await axios.get(url)
        return true
    } catch (error) {
        return false
    }
}
