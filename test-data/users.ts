export type TestEnv = 'qa' | 'prod';

const testEnv = (process.env.TEST_ENV as TestEnv) || 'qa';

const usersByEnv: Record<TestEnv, {
    standardUser: { username: string; password: string };
    lockedOutUser: { username: string; password: string };
    invalidUser: { username: string; password: string };
}> = {
    qa: {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: 'locked_out_user',
            password: 'secret_sauce'
        },
        invalidUser: {
            username: 'invalid_user',
            password: 'wrong_password',
        },

    },
    prod: {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: 'locked_out_user',
            password: 'secret_sauce'
        },
        invalidUser: {
            username: 'invalid_user',
            password: 'wrong_password',
        },
    }

};

export const users = usersByEnv[testEnv];
