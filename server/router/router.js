const router = require('express').Router();

const { redditController } = require('../controller/redditController');

router.route('/reddit').get(redditController.get);
