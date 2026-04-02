require('dotenv').config()

const config={
    port:process.env.PORT || 3000,
    nodeENV:process.env.NODE_ENV || 'development',
    allowedFolder: process.env.ALLOWED_FOLDER || 'C:/Users/Hp/Downloads'
}

module.exports=config