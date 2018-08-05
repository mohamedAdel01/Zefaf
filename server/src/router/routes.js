const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')

// TEST ===============================================================
const mongoose = require('mongoose')
const path = require('path')
const Grid = require('gridfs-stream')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const crypto = require('crypto')

// Mongo URI
const mongoURI = 'mongodb://localhost/zefaf'

// Create mongo connection
mongoose.connect(mongoURI) 
const conn = mongoose.createConnection(mongoURI)
mongoose.Promise = global.Promise

let gfs

conn.once('open', (err) => {
    if (err) {
      console.log('error found', err)
    } else {
      console.log('we are connected to database.')
    }
  
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
  
  })

  // Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  })

  const upload =  multer({ storage })

  // ====================================================================================

module.exports = (app) => {
    app.post('/register', authPolices.register, authcontrolles.register)
    app.post('/login', authcontrolles.login)

    app.get('/details/:sort', dataControlls.show)

    // this is for tests only ==============================================================
    app.post('/additem', upload.single('file'), (req,res) => {
        // console.log(gfs)
        res.send(req.file)
        
        // gfs.files.find().toArray( (err, files) => {
        //     console.log(files)
        //     res.send(files)
        //   })
        
        // res.send(req.body);
        // res.end()
    })

    app.get('/additem', (req, res) => {
      // console.log(gfs)
        gfs.files.find().toArray( (err, files) => {
 
          // console.log(files)
          res.send(files)
        })
    })

    app.get('/image/:filename', (req, res) => {

      // console.log(req.params.filename)
      gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
          return res.status(404).json({
            err: 'No file exists'
          });
        }
    
        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
          // Read output to browser
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe(res);
        } else {
          res.status(404).json({
            err: 'Not an image'
          });
        }
      });
    });
    app.get('/imageId/:id', (req, res) => {
      var ObjectId = require('mongodb').ObjectId
      var id = req.params.id;       
      var o_id = new ObjectId(id)
      gfs.files.findOne({ _id: o_id}, (err, file) => {
        const readstream = gfs.createReadStream(file.filename)
        readstream.pipe(res)
      })
    })
    // ==========================================================================
}