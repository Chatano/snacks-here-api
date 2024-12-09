import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { fromError } from 'zod-validation-error'
import { AppError } from './app-error'

export class ErrorHandler {
  static handle(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    // zod error
    if (err instanceof ZodError) {
      res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: fromError(err).toString(),
      })
      return
    }

    // app error
    if (err instanceof AppError) {
      res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
      return
    }

    // unexpected error
    console.error('Internal Server Error:', err)
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  }
}
