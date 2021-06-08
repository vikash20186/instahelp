import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
user_id:  String, // String is shorthand for {type: String}
device_id: String,
date: { type: Date, default: Date.now },
},  { collection: 'user_device_info' });

const UserDeviceInfo = mongoose.model('UserDeviceInfo', schema);

export default UserDeviceInfo;