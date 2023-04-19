const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path");

const adminController = require("../controllers/admin.controller");


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

exports.filename = ""
// var photoimg;
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        console.log("Destination");
        callBack(null, path.join(__dirname, '../../public/images/'));     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        console.log("file");
        console.log("fileName " + file.fieldname);
        console.log(file);
        // photoimg=file.originalname;
        this.filename = file.originalname
        callBack(null, file.originalname)
    }
})

var upload = multer({
    storage: storage
});



//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------
//-------------For the Category------------------------------------------------------------------------------------------------------------------///


// Get All Category
router.get('/category/', adminController.getCategoryList);

// Create New Category
router.post('/category/', upload.single('Image'), adminController.createNewCategory);

// Update Category
router.put('/category/:categoryid', upload.single('Image'), adminController.updateCategory);

// Delete Category
router.delete('/category/:categoryid', adminController.deleteCategory);


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------
//-------------For the 	MyCategory------------------------------------------------------------------------------------------------------------------///


// Get All 	MyCategory
router.get('/mycategory/', adminController.getMyCategoryList);

// Create New 	MyCategory
router.post('/mycategory/', adminController.createMyCategory);

// Update 	MyCategory
router.put('/mycategory/:mycategoryid', adminController.updateMyCategory);

// Delete 	MyCategory
router.delete('/mycategory/:mycategoryid', adminController.deleteMyCategory);


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------
//-------------For the MyCategoryImage------------------------------------------------------------------------------------------------------------------///


// Get All MyCategoryImage
router.get('/mycategoryimage/', adminController.getAllMyCategoryImageList);

// Create New MyCategoryImage
router.post('/mycategoryimage/', upload.array('Images',10), adminController.createMyCategoryImage);

// Update MyCategoryImage
router.put('/mycategoryimage/:mycategoryimageid', upload.array('Images',10), adminController.updateMyCategoryImage);

// Delete MyCategoryImage
router.delete('/mycategoryimage/:mycategoryimageid', adminController.deleteMyCategoryImage);



module.exports = router;
