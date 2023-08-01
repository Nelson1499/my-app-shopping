import { config } from "dotenv";
config();

const PORT = process.env.port;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const URL_SUCCESS = process.env.URL_SUCCESS;
const URL_CANCEL = process.env.URL_CANCEL;

export { PORT, STRIPE_SECRET_KEY, URL_CANCEL, URL_SUCCESS };
