/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routers from './router';
import AppError from '@shared/errors/AppError';

// Conexão com o banco de dados
import '@shared/typeorm';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.use(routers);

/**
 * Middleware responsavel pela resposta de erro no sistema
 */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(port, () => {
  console.log('Server start port [' + port + '] ');
});
