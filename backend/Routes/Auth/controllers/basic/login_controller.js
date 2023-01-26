import {  generateAuthToken } from '../../../../token/generateToken.js';
import bcrypt from 'bcrypt'
// import User from '../../../../models/userModel.js';
// import Token from '../../../../models/tokenModel.js';
import asyncHandler from 'express-async-handler';
import validator from 'email-validator';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const login_controller=asyncHandler(async(req,res)=>{
    const {email,password}=req.body; 
    if(!email||!password ) throw new Error('Email/Password required');
    //! code to replace 
    let user= await prisma.officier.findUnique({
        where:{
            email:email
        },
        include:{
            commune:{
                include:{
                    ville:true
                }
            }
        }
    })
    if(!user || ! bcrypt.compareSync(password,user.password)) throw new Error('Email / Password Invalid');
    user={...user,id:user.matricule}
    delete user.matricule;

    const {refreshToken,accessToken,expiresIn}=generateAuthToken(user.id);
    const ipAddress = req.socket.remoteAddress;
    const tokens=await prisma.token.createMany({
        data:[
            //! save accessToken
            {
                token:accessToken,
                expiresIn:new Date(expiresIn),
                matricule:user?.id,
                ipAddress,
                type:"ACCESS"
            },
            //! save refresh Token 
            {
                token:refreshToken,
                matricule:user?.id,
                ipAddress,
                type:"REFRESH"
                
            }
        ]
    })
    res.json({
        user:{
            id:user.id,
            isValid:user.isValid,
            nom:user.nom,
            prenom:user.prenom,
            email:user.email,
            date_entree:user.date_entree,
            photo:user.photo,
            num_commune:user.num_commune,
            role:user.role,
            commune:user.commune
        },
        accessToken,
        refreshToken,
        expiresIn

    })
})

export default login_controller