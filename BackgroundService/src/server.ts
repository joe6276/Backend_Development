import express from 'express'
import cron from 'node-cron'
import sendWelcomeEmail from './EmailService';

const app= express()

cron.schedule('*/10 * * * * *', async() => {
  console.log('running a task every 10 Second');
  await sendWelcomeEmail()
});


app.listen(4002, ()=>{
    console.log('App is Running');
    
})