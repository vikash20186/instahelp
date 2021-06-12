import {BASE_URL} from '../shared/constant';
import { getDeviceUUID } from '../utils/device.util';

export async function sendGenerateOtpRequest(phone){
    const url = `${BASE_URL}/users/generateCode`;
    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify({phone}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 200){
        return response.json();
    } else {
        throw new Error(response);
    }
}

export async function verifyPhoneRequest(otp, phone) {
    const url = `${BASE_URL}/users/verifyPhone`;
    const deviceId = getDeviceUUID();
    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify({otp, deviceId, phone}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 200){
        return response.json();
    } else if (response.status === 404) {
        return response;
    } else {
        throw new Error(response);
    }
}