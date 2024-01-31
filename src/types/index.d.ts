export type Log = {
    log: string;
    date: Date;
};

export type DraftWeight = {
    weight: number;
    draft: boolean;
};

export type Trashed = {
    id: string;
    trash: boolean;
};

export type VerificationOtpType = {
    userId: string;
    token: string;
    createdAt: Date;
    expire: Date;
};

export type ErrorMessage = {
    message: string;
    path: string;
};

export type ErrorResponse = {
    errormessage: ErrorMessage[];
    statusCode: number;
    message: string;
};

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
    namespace Express {
        export interface Error {
            statsCode?: number;
        }
    }
}
