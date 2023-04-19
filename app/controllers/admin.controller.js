const  {
    Category,
    MyCategory,
    MyCategory_Images
} = require("../models/admin.model");
const mysql = require("mysql");

const adminRoutes = require("../routes/admin.route");

//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the Category------------------------------------------------------------------------------------------------------------------///

// Get All Category List
exports.getCategoryList = (req, res) => {
    Category.getAllCategory((err, category) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Category', category);
        res.send(category)
    })
}

// Create New Category
exports.createNewCategory = (req, res) => {
    const categoryReqData = new Category(req.body);
    console.log("..............Image........" + adminRoutes.filename);
    categoryReqData.Image = adminRoutes.filename;
    console.log('categoryReqData', categoryReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Category.createCategory(categoryReqData, (err, category) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Category Created Successfully', data: category.insertId })
        })
    }
}

// Update Category
exports.updateCategory = (req, res) => {
    const categoryReqData = new Category(req.body);;
    console.log("..............Image........" + adminRoutes.filename);
    categoryReqData.Image = adminRoutes.filename;
    console.log('categoryReqData update', categoryReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Category.updateCategory(req.params.categoryid, categoryReqData, (err, category) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Category updated Successfully' })
        })
    }
}

// Delete Category
exports.deleteCategory = (req, res) => {
    Category.deleteCategory(req.params.categoryid, (err, category) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Category deleted successully!' });
    })
}


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the MyCategory------------------------------------------------------------------------------------------------------------------///

// Get All MyCategory List
exports.getMyCategoryList = (req, res) => {
    MyCategory.getAllMyCategory((err, mycategory) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('MyCategory', mycategory);
        res.send(mycategory)
    })
}

// Create New MyCategory
exports.createMyCategory = (req, res) => {
    const mycategoryReqData = new MyCategory(req.body);
    console.log('mycategoryReqData', mycategoryReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        MyCategory.createMyCategory(mycategoryReqData, (err, mycategory) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'MyCategory Created Successfully', data: mycategory.insertId })
        })
    }
}

// Update MyCategory
exports.updateMyCategory = (req, res) => {
    const mycategoryReqData = new MyCategory(req.body);
    console.log('mycategoryReqData update', mycategoryReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        MyCategory.updateMyCategory(req.params.mycategoryid, mycategoryReqData, (err, mycategory) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'MyCategory updated Successfully' })
        })
    }
}

// Delete MyCategory
exports.deleteMyCategory = (req, res) => {
    MyCategory.deleteMyCategory(req.params.mycategoryid, (err, category) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'MyCategory deleted successully!' });
    })
}


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the MyCategory_Images------------------------------------------------------------------------------------------------------------------///

// Get All MyCategory_Images List
exports.getAllMyCategoryImageList = (req, res) => {
    MyCategory_Images.getAllMyCategoryImage((err, category) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('MyCategory_Images', category);
        res.send(category)
    })
}

// Create New MyCategory_Images
exports.createMyCategoryImage = (req, res) => {
    const mycategoryimageReqData = new MyCategory_Images(req.body);
    var files = [];
    for (let i = 0; i < req.files.length; i++) {
        files.push(req.files[i].filename);
    }
    var newfiles = files.join(",");
    console.log("..............Images........" + newfiles);
    mycategoryimageReqData.Images = newfiles;
    console.log('mycategoryimageReqData', mycategoryimageReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        MyCategory_Images.createMyCategoryImage(mycategoryimageReqData, (err, mycategoryimage) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'MyCategory_Images Created Successfully', data: mycategoryimage.insertId })
        })
    }
}

// Update MyCategory_Images
exports.updateMyCategoryImage = (req, res) => {
    const mycategoryimageReqData = new MyCategory_Images(req.body);
    var files = [];
    for (let i = 0; i < req.files.length; i++) {
        files.push(req.files[i].filename);
    }
    var newfiles = files.join(",");
    console.log("..............Images........" + newfiles);
    mycategoryimageReqData.Images = newfiles;
    console.log('mycategoryimageReqData update', mycategoryimageReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        MyCategory_Images.updateMyCategoryImage(req.params.mycategoryimageid, mycategoryimageReqData, (err, mycategoryimage) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'MyCategory_Images updated Successfully' })
        })
    }
}

// Delete MyCategory_Images
exports.deleteMyCategoryImage = (req, res) => {
    MyCategory_Images.deleteMyCategoryImage(req.params.mycategoryimageid, (err, category) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'MyCategory_Images deleted successully!' });
    })
}


// Create New Occasion
// exports.createNewOccasion = (req, res) => {
//     const occasionReqData = new Occasion(req.body);
//     var files = [];
//     for (let i = 0; i < req.files.length; i++) {
//         files.push(req.files[i].filename);
//     }
//     var newfiles = files.join(",");
//     console.log("..............Photo........" + newfiles);
//     occasionReqData.Photo = newfiles;
//     console.log('occasionReqData', occasionReqData);
//     // check null
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         res.send(400).send({ success: false, message: 'Please fill all fields' });
//     } else {
//         Occasion.createOccasion(occasionReqData, (err, occasion) => {
//             if (err)
//                 res.send(err);
//             res.json({ status: true, message: 'Occasion Created Successfully', data: occasion.insertId })
//         })
//     }
// }

