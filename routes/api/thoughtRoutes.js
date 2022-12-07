const router = require('express').Router();
const {
  getApplications,
  getSingleApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  addTag,
  removeTag,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags
router.route('/:ThoughtId/tags').post(addTag);

// /api/Thought/:applicationId/tags/:tagId
router.route('/:ThoughtId/tags/:tagId').delete(removeTag);

module.exports = router;
