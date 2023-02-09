import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// Creating a transport and configurations

function createTransporter(config:any){
return nodemailer.createTransport(config)
}

let config ={
    host:'smtp.gmail.com',
    service:'gmail',
    port:587,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}

const sendMail = async(messageOptions:any)=>{
    let transporter =createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOptions, (err, info)=>{
        console.log(info);
        
    })
}

export default sendMail