const express = require('express');
const router = express.Router();
const tourControllers = require('../controllers/tourControllers');
const authController = require('../controllers/authController');

// router.param('id', tourControllers.checkId);

router
  .route('/top-5-cheap')
  .get(tourControllers.aliasTopTours, tourControllers.getAllTours);

router
  .route('/')
  .post(tourControllers.createTour)
  .get(authController.protect, tourControllers.getAllTours);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourControllers.deleteTour
  );

module.exports = router;
