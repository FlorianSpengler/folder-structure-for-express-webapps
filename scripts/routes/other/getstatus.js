const path = require('path');
const router = require('express').Router();

router.get('/status', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/check-status.html'));
});

module.exports = router;