const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const allowedFileTypes = ['image/png','image/jpeg','image/jpg']

        if(!allowedFileTypes.includes(file.mimetype)){
            cb(new Error("This filetype is not supported")) // cb(error)
            return;
        }

        cb(null,'./storage') // --> cb(error,success)
    },
    filename : function(req,file,cb){
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const limits = {
    fileSize: 1024 *1024, //1MP limit
};

const upload = multer({
    storage: storage,
    limits: limits,
});

module.exports = {
    storage,
    upload,
    multer
}