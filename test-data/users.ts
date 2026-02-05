export type TestEnv = 'qa' | 'prod';

const testEnv = (process.env.TEST_ENV as TestEnv) || 'qa';

const usersByEnv: Record<TestEnv, {
    standardUser: { username: string; password: string };
    lockedOutUser: { username: string; password: string };
}> = {
    qa: {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: 'locked_out_user',
            password: 'secret_sauce'
        }
    },
    prod: {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: 'locked_out_user',
            password: 'secret_sauce'
        }
    }
};

export const users = usersByEnv[testEnv];
