import mongoose from 'mongoose';
import UserDeviceInfo from './user_device_info.mjs';

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/instahelp';

const connectDb = () => mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
   
const models = { UserDeviceInfo };

export { connectDb };

export default models;