import mongoose from 'mongoose';
import User from './user.mjs';
import RegisterOtpLog from './register_otp_logs.mjs';

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/instahelp';

const connectDb = () => mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
   
const models = { User, RegisterOtpLog };

export { connectDb };

export default models;