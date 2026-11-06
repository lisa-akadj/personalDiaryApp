const { Router } = require('express');
const diaryController = require('../controllers/diaryController');

const diaryRouter = Router();

// See a list of my diary entries and sort them by recency
diaryRouter.get('/', diaryController.index)

// See the details of a specific diary entry
// diaryRouter.get('/:id', diaryController.getById)

// Create a diary entry with a specific date and time, text and category
diaryRouter.post('/', diaryController.create)

// Update the text of a diary entry
// diaryRouter.patch('/:id', diaryController.update)

// Delete a diary entry
// diaryRouter.delete(':id', diaryController.destroy)

// Search for a specific diary entry by date/month/year or category
// diaryRouter.get('/:query', diaryController.search)

module.exports = diaryRouter;