const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CommentSchema = new mongoose.Schema({
    writer: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    postedAt: {
        type: Date
    },
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }
});

const ArticleSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    draft: {
        type: Boolean
    },
    publishedAt: {
        type: Date
    },
    viewCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    comments: {
        type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' } ]
    }
});


ArticleSchema.plugin(timestamp);

const Article = mongoose.model('Article', ArticleSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {Article, Comment};
