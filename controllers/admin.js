const bodyParser = require('body-parser');

/*
const User = require('../models/user');
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

*/

const Expense = require('../models/expenses');

exports.getExpenseDetails = async (req, res, next) => {
  const exp = await Expense.findAll();
  res.status(201).json({allExpense: exp});
};

exports.postExpenseDetails = async (req, res, next) => {
  try{
      // if(!req.body.Item){
      //   throw new Error('Item is mandatory');
      // }

  const amount = req.body.Amount;
  const items = req.body.Item;
  const catg = req.body.Catg;
  console.log(req.body);

  const data = await Expense.create({Amount:amount, Item:items, Catg:catg });
  res.status(201).json({newExpenseDetail: data});

  } catch(err){
    console.log(err);
    res.status(500).json({error:err});
  }
};

exports.deleteExpenseDetails = async (req, res, next) => {
  const uId = req.params.id;
  await Expense.destroy({where: {id: uId}});
  res.sendStatus(200);
};
