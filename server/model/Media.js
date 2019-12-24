const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const MediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        required: true,
        trim: true
    },
    caption: {
        type: String
    },
    size: {
        type: Number
    },
    mediaType: {
        type: String
    },
    contentType: {
        type: String
    }
});

MediaSchema.plugin(timestamp);

const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;
