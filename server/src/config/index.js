module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_DB:{
        URI: process.env.DB || 'mongodb://localhost/',
        DB: 'zefaf'
    } 
}