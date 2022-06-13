const express = require('express');
const router = express.Router();
const {
    getQrCodes,
    setQrCode,
    updateQrCode,
    deleteQrCode
} = require('../controllers/qrcodeController');
const protect = require('../middleware/verifyJWT');

router.route('/').get(protect, getQrCodes).post(protect, setQrCode);
router.route('/:id').put(protect, updateQrCode).delete(protect, deleteQrCode);

module.exports = router