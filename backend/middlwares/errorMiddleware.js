const errorHandler=(err,req,res,next)=>{
    const status=res.statusCode?res.statusCode:500 
    res.status(status);
    res.json({
        error:{
            message:err.message,
            cause:err.cause,
            stack:err.stack
        }

    })
}

export default errorHandler;