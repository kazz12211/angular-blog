module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/blog'
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY || 'secret123'
    }
};