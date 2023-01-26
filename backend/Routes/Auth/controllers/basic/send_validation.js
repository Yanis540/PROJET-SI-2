import asyncHandler from 'express-async-handler'
import sendEmail from '../../../../email/sendEmail.js';
const send_validation=asyncHandler(async(req,res)=>{
    const user=req.user ; 
    if(user.isValid) throw new Error('User Is Valid ');
    //! code to send email 
    const ipAddress=req.socket.remoteAddress
    await sendEmail(user,ipAddress)
    res.json({message:'Confirmation Email Sent ! '})
})

export default send_validation