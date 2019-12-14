const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

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
    }
});


ArticleSchema.plugin(timestamp);

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;