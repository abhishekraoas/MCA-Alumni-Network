const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, hash) => {
        if (err) cb(err, null);
        const fileName = hash.toString('hex') + path.extname(file.originalname);
        cb(null, fileName);
    });
  },
})

export const upload = multer({storage})
