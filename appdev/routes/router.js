const express = require('express');
const router = express.Router();
const hp = require('../Controller/hpcontrollers')

router.get('/', hp.nom)
router.get('/about', hp.about)
router.get('/services', hp.services)
router.get('/contact', hp.contact)
router.get('/location', hp.location)
module.exports = router;