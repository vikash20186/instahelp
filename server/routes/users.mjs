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
  res.send(userRec || {
    phone: 'dummy'
  });
});

router.post('/', async function(req, res, next) {
  try {
    const userRec = await (new models.User(req.body)).save();
    res.send(userRec);
  } catch (err){
    res.status(500).send(errorResponse("unable to save"));
  }
});

export default router;
