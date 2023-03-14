import { RequestHandler,Request,Response,NextFunction } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import { DecodedData } from '../Models'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request{
info?:DecodedData
}

export function VerifyToken (req:ExtendedRequest, res:Response,next:NextFunction){
const token = req.headers['token'] as  string
try {
    
    if(!token){
        return res.status(401).json({error:'Forbidden'})
    }
    const Payloadata= jwt.verify(token, process.env.SECRETKEY as string) as DecodedData
    req.info= Payloadata
    } 
catch (error:any) {
   res.status(403).json(error.message) 
}
next()
}