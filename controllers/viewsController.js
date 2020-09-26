const Tour = require('./../models/tourModel');
const catchAsync = require('./../utilis/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'all tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({
    slug: req.params.slug
  }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  res.status(200).render('tour', {
    title: 'the forest hiker',
    tour
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log Into Your Account'
  });
};
