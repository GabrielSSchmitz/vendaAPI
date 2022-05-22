import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('JWT Token não enviado');

  // Bearer %TOKEN%
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    /**
     * Converte o decodedToken em um objeto ITokenPayload
     */
    const { sub } = decodedToken as ITokenPayload;

    request.user = { id: sub };

    return next();
  } catch {
    throw new AppError('JWT Token inválido');
  }
}
