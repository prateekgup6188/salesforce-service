const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getAccounts } = require('../controllers/salesforceController');

const router = express.Router();

router.get('/accounts', authMiddleware, getAccounts);

module.exports = router;