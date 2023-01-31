const nodemailer =require('nodemailer')

async function sendMail({from,to,subject,text,html}){
    let transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:false,
        auth:{
            user: process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        },
        debug: true, // show debug output
        logger: true // log information in console
    })
    let info = await transport.sendMail({
        from :`inShare <${from}>`,
        to,
        subject,
        text,
        html
    })
}

module.exports = sendMail