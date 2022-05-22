/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routers from './router';
import AppError from '@shared/errors/AppError';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload';

// Conexão com o banco de dados
import '@shared/typeorm';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

/**
 * Rota estatica, para o frontend ter acesos a imagens avatar
 */
app.use('/files', express.static(uploadConfig.diretory));

app.use(routers);

/**
 * Erros de validação de erros de rota
 */
app.use(errors());

/**
 * Middleware responsavel pela resposta de erro no sistema
 */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        code: error.statusCode,
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    });
  },
);

app.listen(port, () => {
  console.log('Server start port [' + port + '] ');
});
