
import {BASE_URL} from '../shared/constant';
import { getDeviceUUID } from '../utils/device.util';
export async function getUserInfo(){
    const deviceId = getDeviceUUID();
    const url = `${BASE_URL}/users/byDevice/${deviceId}`;

    try {
        const userInfoResponse = await fetch(url);
        if (userInfoResponse.status === 200) {
            return userInfoResponse.json()
        } else { 
            return userInfoResponse;
        }
    } catch (err) {
        throw new Error(err);
    }
}