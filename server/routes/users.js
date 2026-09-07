import express from 'express';
var router = express.Router();
import User from '../model/models.js';

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const users = await User.findAll()
    res.json(users)
});

export default router;
