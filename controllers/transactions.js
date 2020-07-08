const Transaction = require('../models/Transaction');

// Get all transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// Add transaction

exports.addTransaction = async (req, res) => { 
  console.log(req.body)
  try { 
    const { text, amount } = req.body;
    console.log(req.body)
    const transaction =  await Transaction.create(req.body);
    console.log(transaction)
  
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (err) {
    console.log(err)
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: err
      });
    }
  }
}

//  Delete transaction

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }
    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}