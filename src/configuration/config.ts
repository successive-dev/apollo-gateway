import { config } from 'dotenv';

config();
const envVars = process.env;

export const configuration = {
    mongo_url: envVars.MONGO_URL,
    port: envVars.PORT,
};
