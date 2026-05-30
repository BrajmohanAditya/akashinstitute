import express from 'express';
import { createHeroItem, getHeroItems, deleteHeroItem } from '../controllers/hero.controller.js';
import upload from '../middlewares/multer.js'; // Use your existing multer setup
import { isLoggedIn } from '../middlewares/auth.middleware.js'; // Add your auth middleware if you have it

const router = express.Router();

router.get('/', getHeroItems);


router.post('/', upload.single('image'), createHeroItem);

router.delete('/:id', deleteHeroItem);

export default router;
