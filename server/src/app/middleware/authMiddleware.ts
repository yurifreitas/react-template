import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
export default function authMiddleare(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if(!authorization){
      return res.sendStatus(401);
  }
  const token = authorization.replace('Bearer','').trim();
  try{
    const data = jwt.verify(token,'secret');
  }catch{
    return res.sendStatus(401);
  }
}
