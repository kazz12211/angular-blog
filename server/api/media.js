const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const verifyToken = require('../security').verifyToken;
const getUserId = require('../security').getUserId;
const User = require('../model/User');
const Article = require('../model/Article').Article;
const Comment = require('../model/Article').Comment;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Page = require('../model/page');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const Media = require('../model/Media');

mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;

let gfs;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Media Database connected');
    gfs = new mongoose.mongo.GridFSBucket(db.db, {
        bucketName: 'media'
    });
});

const storage = new GridFsStorage({
    url: config.db.uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'media'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage
});

router.get('/files', (req, res) => { 
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let count = 0;
    Media.where({}).countDocuments((err, c) => {
        if(err) {
            res.status(500).send(err);
        } else {
            count = c;
            const query = Media.find({})
                .skip(page * limit)
                .limit(limit)
                .sort({'createdAt': 'desc'});
            query.exec().then(files => {
                const result = new Page(page, count, limit, files, {}, []);
                res.json(result);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }); 
});

router.get('/file/:filename', (req, res) => { 
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
});

router.post('/files', upload.single('file'), (req, res) => { 
    const file = req.file;
    console.log(req.body);
    const { name, caption } = req.body;
    const media = new Media({
        name: name,
        filename: file.filename,
        caption: caption,
        size: file.size,
        mediaType: file.mimetype,
        contentType: file.contentType
    });
    media.save().then(saved => {
        res.json(saved);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});


router.delete('/files/:filename', verifyToken, (req, res) => {
    db.collection('media.files').findOne({filename: req.params.filename}, (err, file) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.json(file);
        gfs.delete(file._id, (err, result) => {
            if(err) {
                return res.status(500).send(err);
            }
            Media.remove({filename: req.params.filename}).then(r => {
                res.json(r);
            }).catch(err => {
                res.status(500).send(err);
            });
        });

    });
    /*
    gfs.delete({filename: req.params.filename}, (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        console.log(result);
        Media.remove({filename: filename}).then(r => {
            res.json(r);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    });
    */
    
});

module.exports = router;