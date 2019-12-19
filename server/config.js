module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://kazz12211:kt621221@cluster0-3i9et.mongodb.net/blog?retryWrites=true&w=majority'
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY || 'secret123'
    }
};