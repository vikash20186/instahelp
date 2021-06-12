import {Device} from '@nativescript/core';

export function getDeviceUUID() {
    return Device.uuid;
}