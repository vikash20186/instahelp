import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    
    phone: {type: String, required: true},
    
    code: {type: String, required: true},

    creationDate: { type: Date, default: Date.now },

},  { collection: 'register-otp-logs' });

const RegisterOtpLog = mongoose.model('RegisterOtpLogs', schema);

export default RegisterOtpLog;