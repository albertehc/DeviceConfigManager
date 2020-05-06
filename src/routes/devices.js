/*
"use strict"

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
});

router.get('/about', function (req, res) {
});

router.get('/devices', function(req, res) {
    res.render('devices', {});//defaultData);
});

router.get('/device/new', async function(req, res) {
    res.render('device-new', defaultData);
});

router.get('/device/logs/:uuid', async function(req, res) {
	const uuid = req.params.uuid;
	const data = defaultData;
	data.uuid = uuid;
	res.render('device-logs', data);
});

router.get('/device/delete/:uuid', async function(req, res) {
    defaultData.uuid = req.params.uuid;
    res.render('device-delete', defaultData);
});

module.exports = router
*/