import { Request, Response, NextFunction } from 'express'

type CustomError = Error & {
    status: number;
    details: {} | null;
};

const ErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            message: message,
            details: err.details || null,
        },
    });

}

export default ErrorHandler;