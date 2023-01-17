const User = require('../models/user');
const bodyParser = require('body-parser');

exports.getUserDetails = async (req, res, next) => {
  const users = await User.findAll();
  res.status(201).json({allUsers: users});
};

exports.postUserDetails = async (req, res, next) => {
  try{
      // if(!req.body.number){
      //   throw new Error('phoneNumber is mandatory');
      // }

  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  console.log(req.body);

  const data = await User.create({name:name, email:email, number:number });
  res.status(201).json({newUserDetail: data});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:err});
  }
};

exports.deleteUserDetails = async (req, res, next) => {
  const uId = req.params.id;
  await User.destroy({where: {id: uId}});
  res.sendStatus(200);
};

/*
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //   req.user.createProduct({
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }) 
  .then(result => {
    console.log('Product Added');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; // The extracted value always is a string , so "true" instead of true.
  if(!editMode){
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then(product => {
      if(!product){
        return res.render('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct =(req, res, next) =>{
   const prodId = req.body.productId;
   const updatedTitle = req.body.title;
   const updatedPrice = req.body.price;
   const updatedImageUrl = req.body.imageUrl;
   const updatedDes = req.body.description;
   Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDes;
      product.imageUrl = updatedImageUrl;
      return product.save();
      })
    .then(result => {console.log('UPDATED PRODUCT!');
                     //res.redirect('/admin/products');
     })
    .catch(err => console.log(err));
    res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => {console.log(err)});

  // Product.fetchAll()
  // .then(([rows, fieldData]) => {
  //     res.render('admin/products', {
  //     prods: rows,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // })
  // .catch(err => {console.log(err)});
};

exports.postDeleteProducts =  (req, res, next) => {
const prodId=req.body.productId;
Product.findByPk(prodId)
.then(product => {
 return product.destroy();
})
.then(result =>{
  console.log('DESTROYED PRODUCT');
  res.redirect('/admin/products');
})
.catch(err => console.log(err));
}
*/