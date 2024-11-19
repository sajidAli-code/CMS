type CustomError = Error & {
    status: number;
    details: {} | null;
};

const createErrorObj = (message: string, status: number = 500, details: {} | null = null): CustomError => {
    return Object.assign(new Error(message), { status, details });
};

export default createErrorObj;