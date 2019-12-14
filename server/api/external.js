const express = require('express');
const router = express.Router();
const verifyToken = require('../security');
const User = require('../model/User');
const Article = require('../model/Article');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Page = require('../model/page');

router.post('/register', (req, res) => {
    const {name, email, password, role} = req.body;
    if(!name || !email || !password) {
        return res.status(500).send('Name, email and password are required');
    }
    User.findOne({email: email}, (err, user) => {
        if(err) {
            console.error(err);
            res.status(500).send({error: err});
        } else if(user) {
            res.status(500).send({error: 'The user has already been registered'});
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = new User({
                name: name,
                email: email,
                password: hash,
                role: role || 'user'
            });
            newUser.save().then(user => {
                const payload = {
                    subject: user._id
                };
                const token = jwt.sign(payload, config.jwt.secretKey);
                res.send({token: token, username: user.name});
            }).catch(err => {
                console.error(err);
                res.status(500).send({error: err});
            });
        }
    });
});

router.get('/articles/count', verifyToken, (req, res) => {
    const draft = req.query.draft; 
    let count = 0;
    const cond = {};
    if(draft) {
        cond.draft = draft === 'true' ? true : false
    }
    Article.where(cond).countDocuments((err, c) => {
        if(err) {
            res.status(500).send({error: err});
        } else {
            res.send({count: c});
        }
    });
});

router.get('/articles', verifyToken, (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const draft = req.query.draft; 
    let count = 0;
    const cond = {};
    if(draft) {
        cond.draft = draft === 'true' ? true : false
    }
    Article.where(cond).countDocuments((err, c) => {
        if(err) {
            res.status(500).send({error: err});
        } else {
            count = c;
            const query = Article.find(cond)
                .populate('author')
                .skip(page * limit)
                .limit(limit)
                .sort({'createdAt': 'desc'});
            query.exec().then(articles => {
                const result = new Page(page, count, limit, articles, {}, []);
                res.send(result);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        }
    }); 
});

router.post('/articles', verifyToken, (req, res) => {
    const {_id, title, content, tags} = req.body;
    let tagList = [];
    if(tags) {
        tagList = tags.split(',').map(s => s.trim());
    }
    if(_id) {
        Article.findByIdAndUpdate(_id, {
            title:title, 
            content: content, 
            author: req.userId, 
            tags: tagList, 
            draft: false, 
            publishedAt: new Date()
        }).exec().then(resp => {
            res.send(resp);
        }).catch(err => {
            console.error(err);
            res.status(500).send({error: err});
        });
    } else {
        const article = new Article({
            title: title,
            content: content,
            author: req.userId,
            tags: tagList,
            draft: false,
            publishedAt: new Date()
        });
        article.save().then(saved => {
            res.send(saved);
        }).catch(err => {
            console.error(err);
            res.status(500).send({error: err});
        });
    }
});

router.get('/article/:id', verifyToken, (req, res) => {
    const id = req.params.id;
    Article.findById(id).populate('author').exec().then(resp => {
        res.send(resp);
    }).catch(err => {
        console.error(err);
        res.status(500).send({error: err});
    });
});

router.post('/articles/save', verifyToken, (req, res) => {
    let tagList = [];
    if(req.body.tags) {
        tagList = req.body.tags.split(',').map(s => s.trim());
    }
    if(req.body._id) {
        Article.findByIdAndUpdate(req.body._id, {
            title: req.body.title, 
            content: req.body.content, 
            author: req.userId, 
            tags: tagList, 
            draft: true, 
            publishedAt: null
        }).exec().then(resp => {
            res.send(resp);
        }).catch(err => {
            console.error(err);
            res.status(500).send({error: err});
        });
    } else {
        const article = new Article({
            title: req.body.title,
            content: req.body.content,
            author: req.userId,
            tags: tagList,
            draft: true,
            publishedAt: null
        });
        article.save().then(saved => {
            res.send(saved);
        }).catch(err => {
            console.error(err);
            res.status(500).send({error: err});
        });    
    }
});

router.delete('/articles/:id', verifyToken, (req, res) => {
    Article.deleteOne({_id: req.params.id}).exec().then(resp => {
        res.send(resp);
    }).catch(err => {
        console.error(err);
        res.status(500).send({error: err});
    });
});

module.exports = router;
