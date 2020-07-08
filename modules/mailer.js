const nodemailer = require('nodemailer')

module.exports = async function mailer(checkResult, url) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 2525,
    secure: true,
    auth: {
      user: 'testzverov@ukr.net',
      pass: 'J4ut5FeehaxkXLEl'
    }
  })

  let info = await transporter.sendMail({
    from: '<testzverov@ukr.net>',
    to: 'zverov@gmail.com',
    subject: "siteCheckApp",
    text: `site ${url} is ${checkResult.statusAfter[url] ? ' up ':' down '}`
  })
  
  console.log('message sent ', info.messageId)
}