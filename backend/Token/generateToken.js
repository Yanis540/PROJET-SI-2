import jwt from "jsonwebtoken";

const generateAccessToken=(id)=>{
    return {
        accessToken:jwt.sign(
            {id},
            process.env.ACCESS_TOKEN_SECRET,{
             expiresIn:'1h'
            }
        ),
        expiresIn:Date.now() + 600*1000
    }
}

const generateRefreshToken=(id)=>{
    return jwt.sign({id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}

const generateAuthToken=(id)=>{
    let accessElement=generateAccessToken(id)
    let refreshToken=generateRefreshToken(id)
    return{
        accessToken:accessElement.accessToken,
        expiresIn:accessElement.expiresIn,
        refreshToken
    }
}
const generateValidationToken=(id)=>{
    return jwt.sign({id},process.env.VALIDATION_TOKEN_SECRET,{expiresIn:'2d'})
}
export {
    generateAuthToken,
    generateRefreshToken,
    generateAccessToken,
    generateValidationToken

}