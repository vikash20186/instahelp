import express from 'express';
import models from '../models/index.mjs';
import logger from '../utils/logger.mjs';
import {errorResponse} from '../utils/response.mjs';

const router = express.Router();

/* GET users listing. */

router.get('/:phone', async function(req, res, next) {
  logger("log",req.params);
  const userRec = await models.User.findOne({phone: req.params.phone});
  res.send(userRec);
});

router.get('/byDevice/:deviceId', async function(req, res, next) {
  logger("log",req.params);
  const userRec = await models.User.findOne({devices: {$in: [req.params.deviceId]}});
  
  userRec ? res.send(userRec) : res.status(404).send();
});

router.post('/', async function(req, res, next) {
  try {
    const userRec = await (new models.User(req.body)).save();
    res.send(userRec);
  } catch (err){
    res.status(500).send(errorResponse("unable to save"));
  }
});

router.post('/generateCode', async function(req, res, next) {
  try {
    const phone = req.body.phone;
    const code = '00'; //hard coded but it will sent via sms...
    await models.RegisterOtpLog.deleteMany({phone});
    const otpRecord = await (new models.RegisterOtpLog({
      phone,
      code
    })).save();
    
    logger("log",otpRecord);

    res.send({message: 'SENT'});
  } catch (err){
    logger('log', err);
    res.status(500).send(errorResponse("unable to send TOP"));
  }
});

router.post('/verifyPhone', async function(req, res, next) {
  try {
    const code = req.body.otp;
    const deviceId = req.body.deviceId;
    const phone = req.body.phone;
    //1. Check OTP Sent to the phone
    const otpRecord = await models.RegisterOtpLog.findOne({code, phone});
    if (otpRecord){
      
      //2. See if user already registered before
      let userInfo = await models.User.findOne({phone});
      if (userInfo){
        //2.1 if Yes. Update the device list
        const devices = [...userInfo.devices, deviceId];
        const res = await models.User.update({phone}, {devices});
        if (res.n !== 1) {
          res.status(500).send(errorResponse("unable to register this device"));
        }
      } else {
        //2.2 if No. Create new user
        userInfo = await (new models.User({phone: otpRecord.phone, devices: [deviceId]})).save();
      }
      
      res.send(userInfo);
    } else {
      res.status(404).send();
    }
  } catch (err){
    logger('log', err);
    res.status(500).send(errorResponse("unable to send TOP"));
  }
});

export default router;
