import express from 'express';
import MoviesController from '../controllers/movies.controller.js';

const moviesRouter = express.Router();

moviesRouter.get('/', MoviesController.findAll);
moviesRouter.post('/', MoviesController.create);

export default moviesRouter;