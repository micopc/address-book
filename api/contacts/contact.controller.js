const Contact = require('./contact.model');

exports.index = (req, res) => {
  Contact.find({ sandbox: req.headers['api-key'] }, (err, contacts) => {
    if (err) {
      return next(err);
    }

    return res.json({ status: 'success', data: contacts });
  });
}

exports.create = (req, res, next) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.phone) {
    const error = new Error('Missing Data');
    error.status = 400;
    return next(error);
  }

  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    sandbox: req.headers['api-key']
  });

  contact.save((err) => {
    if (err) {
      return next(err);
    }
    return res.json({ status: 'success', data: contact });
  })
}