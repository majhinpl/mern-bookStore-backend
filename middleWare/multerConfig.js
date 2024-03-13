const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        const allowedFileTypes = ['image/png','image/jpeg','image/jpg']
        const fileSize = parseInt(req.headers["content-length"])

        if(!allowedFileTypes.includes(file.mimetype) && fileSize <= 1024 * 1024){
            cb(new Error("This filetype is not supported")) // cb(error)
            return
        }
        cb(null,'./storage') // --> cb(error,success)
    },
    filename : function(req, file, cb){
        cb(null, Date.now() + "-"+ file.originalname)
    }
});



module.exports = {
    storage,
    multer
}