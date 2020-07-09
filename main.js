const checker = require( './modules/checker')

const mailer = require('./modules/mailer')

const urls = ['https://digitalho.com', 'https://digitalho.app', 'http://blog.digitalho.com', 'https://models.digitalho.com']

const checkResult = {
    statusAfter: {
    },
    statusBefore: {
    },
    date: {   
    }
}

async function main() {

    console.log('test run...')

    for (let url of urls) {
        checkResult.statusAfter[url] = await checker(url)
        
        if (checkResult.statusAfter[url] == false && checkResult.statusBefore[url] === (true && undefined)) {
            checkResult.date[url] = Date()
            checkResult.statusBefore[url] = false
            
            console.log('site down')
            
            mailer(checkResult, url).catch(console.error)
        }
        
        else if (checkResult.statusAfter[url] == true && checkResult.statusBefore[url] == false) {
            checkResult.date[url] = Date()
            checkResult.statusBefore[url] = true
            
            console.log('site up')
            
            mailer(checkResult, url).catch(console.error)
        }
    }
}

setInterval(main, 500000)
