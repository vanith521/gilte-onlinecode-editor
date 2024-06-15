const express = require('express');
const { executeCode } = require('../services/codeExecutionService');
const router = express.Router();

router.post('/', async (req, res) => {
    const { code, language } = req.body;
    try {
        const output = await executeCode(code, language);
        res.json({ output });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
