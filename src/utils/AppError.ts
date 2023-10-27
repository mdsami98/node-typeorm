class AppError extends Error {
    private status: boolean;
    private statusCode: number;
    private errorRaw: any;

    constructor(message: string, statusCode: number, errorRaw: any = null) {
        super(message);
        this.statusCode = statusCode;
        this.status = false;
        this.errorRaw = errorRaw;
        Error.captureStackTrace(this, this.constructor);
    }

    get HttpStatusCode() {
        return this.statusCode;
    }

    get JSON() {
        return {
            status: this.status,
            message: this.message,
            errorRaw: this.errorRaw
        };
    }
}

export default AppError;
