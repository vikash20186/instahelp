import {Device} from '@nativescript/core';
import {BASE_URL} from '../shared/constant';

export async function getUserInfo(){
    const deviceId = Device.uuid;
    const url = `${BASE_URL}/api/users/byDevice/${deviceId}`;

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