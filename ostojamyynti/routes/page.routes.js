import express from 'express';
import { isLoggedIn } from '../controllers/auth.controller.js';

const routes = express.Router();

routes.get('/', isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
    });
});

routes.get('/login', (req, res) => {
    res.render('login')
});
routes.get('/register', (req, res) => {
    res.render('register');
});

export default routes;