// import {  generateAuthToken } from '../../../../token/generateToken.js';
import bcrypt from 'bcrypt'
// import User from '../../../../models/userModel.js';
import asyncHandler from 'express-async-handler';
import validator from 'email-validator'
import sendEmail from '../../../../email/sendEmail.js';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const register_controller=asyncHandler(async(req,res)=>{
    const {email,password,nom,prenom,photo,confirmPassword,numero_commune}=req.body;
    const array=[email,password,nom,prenom,confirmPassword]
    for(let  element of array ) if(!element || !element.trim()) throw new Error('Fields required');

    if(!validator.validate(email)) throw new Error('Invalid Email');
    if(password!==confirmPassword) throw new Error('Passwords does not match')
    //! GET USER 
    const userIsFound=await prisma.officier.findUnique({
        where:{
            email:email
        },
    })
    if(userIsFound) throw new Error('Email Already Used');

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const ipAddress=req.socket.remoteAddress
    if(isNaN(parseInt(numero_commune))) throw new Error("Numero commune should be an integer");

    let user=await prisma.officier.create({
        data:{
            nom,
            prenom,
            email,
            password:hashedPassword,
            num_commune: parseInt (numero_commune),
            photo:user.photo?Buffer.from(user?.photo):null,
            role:'OFFICIER',
        }

    })
    if(!user) throw new Error('Error')
    user={
        id:user.matricule,
        isValid:user.isValid,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email,
        date_entree:user.date_entree,
        photo:user.photo?Buffer.from(user?.photo):null,
        num_commune:user.num_commune,
        role:user.role,
    }
    await sendEmail(user,ipAddress)
    
    res.status(201).json({
        message:'Account Created ! '
    })
})
export default register_controller