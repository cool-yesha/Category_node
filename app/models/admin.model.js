var dbConn = require("../../config/db.config");

var Category = function (ca) {
    this.CategoryID = ca.CategoryID;
    this.Name = ca.Name;
    this.Description = ca.Description;
    this.Image=ca.Image;
};
var MyCategory = function (mca) {
    this.MyCategoryID=mca.MyCategoryID;
    this.Name=mca.Name;
    this.Description=mca.Description;
};
var MyCategory_Images = function (mcai) {
    this.MyCategoryImageID=mcai.MyCategoryImageID;
    this.MyCategoryID=mcai.MyCategoryID;
    this.Images=mcai.Images;
};

//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the Category------------------------------------------------------------------------------------------------------------------///

// Get All Category
Category.getAllCategory = (result) => {
    dbConn.query('SELECT * FROM category', (err, res) => {
        if (err) {
            console.log('Error while fetching category', err);
            result(null, err);
        } else {
            console.log('Category fetched successfully');
            result(null, res);
        }
    })
}

// Create New Category
Category.createCategory = (categoryReqData, result) => {
    dbConn.query('INSERT INTO category SET ?', categoryReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Category created successfully');
            result(null, res)
        }
    })
}

// Update Category
Category.updateCategory = (categoryid, categoryReqData, result) => {
    dbConn.query("UPDATE category SET Name=?,Description=?,Image=? WHERE CategoryID=?", [categoryReqData.Name, categoryReqData.Description, categoryReqData.Image, categoryid], (err, res) => {
        if (err) {
            console.log('Error while updating the category');
            result(null, err);
        } else {
            console.log("Category updated successfully");
            result(null, res);
        }
    });
}

// Delete Category
Category.deleteCategory = (categoryid, result) => {
    dbConn.query('DELETE FROM category WHERE CategoryID=?', [categoryid], (err, res) => {
        if (err) {
            console.log('Error while deleting the category');
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the MyCategory------------------------------------------------------------------------------------------------------------------///

// Get All MyCategory
MyCategory.getAllMyCategory = (result) => {
    dbConn.query('SELECT * FROM mycategory', (err, res) => {
        if (err) {
            console.log('Error while fetching mycategory', err);
            result(null, err);
        } else {
            console.log('Mycategory fetched successfully');
            result(null, res);
        }
    })
}

// Create New MyCategory
MyCategory.createMyCategory = (mycategoryReqData, result) => {
    dbConn.query('INSERT INTO mycategory SET ?', mycategoryReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('MyCategory created successfully');
            result(null, res)
        }
    })
}

// Update MyCategory
MyCategory.updateMyCategory = (mycategoryid, mycategoryReqData, result) => {
    dbConn.query("UPDATE mycategory SET Name=?,Description=? WHERE MyCategoryID=?", [mycategoryReqData.Name, mycategoryReqData.Description, mycategoryid], (err, res) => {
        if (err) {
            console.log('Error while updating the mycategory');
            result(null, err);
        } else {
            console.log("MyCategory updated successfully");
            result(null, res);
        }
    });
}

// Delete MyCategory
MyCategory.deleteMyCategory = (mycategoryid, result) => {
    dbConn.query('DELETE FROM mycategory WHERE MyCategoryID=?', [mycategoryid], (err, res) => {
        if (err) {
            console.log('Error while deleting the mycategory');
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

//-------------😎😎😎✨✨✨✨✨✨✨✨✨✨✨✨✨💚💙💙🌈🔥🌈💙💙💚✨✨✨✨✨✨✨✨✨✨✨✨✨✨😎😎😎------------------------

//-------------For the MyCategory_Images------------------------------------------------------------------------------------------------------------------///

// Get All MyCategory_Images
MyCategory_Images.getAllMyCategoryImage = (result) => {
    dbConn.query('SELECT * FROM mycategory_image', (err, res) => {
        if (err) {
            console.log('Error while fetching mycategory_image', err);
            result(null, err);
        } else {
            console.log('MyCategory_Images fetched successfully');
            result(null, res);
        }
    })
}

// Create New MyCategory_Images
MyCategory_Images.createMyCategoryImage = (mycategoryimageReqData, result) => {
    dbConn.query('INSERT INTO mycategory_image SET ?', mycategoryimageReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('MyCategory_Images created successfully');
            result(null, res)
        }
    })
}

// Update MyCategory_Images
MyCategory_Images.updateMyCategoryImage = (mycategoryimageid, mycategoryimageReqData, result) => {
    dbConn.query("UPDATE mycategory_image SET MyCategoryID=?,Images=? WHERE MyCategoryImageID=?", [mycategoryimageReqData.MyCategoryID,mycategoryimageReqData.Images,mycategoryimageid], (err, res) => {
        if (err) {
            console.log('Error while updating the mycategory_image');
            result(null, err);
        } else {
            console.log("MyCategory_Images updated successfully");
            result(null, res);
        }
    });
}

// Delete MyCategory_Images
MyCategory_Images.deleteMyCategoryImage = (mycategoryimageid, result) => {
    dbConn.query('DELETE FROM mycategory_image WHERE MyCategoryImageID=?', [mycategoryimageid], (err, res) => {
        if (err) {
            console.log('Error while deleting the mycategory_image');
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = {
    Category,
    MyCategory,
    MyCategory_Images
};
