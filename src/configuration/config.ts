import { config } from 'dotenv';

config();
const envVars = process.env;

export const configuration = {
    port: envVars.PORT,
};
