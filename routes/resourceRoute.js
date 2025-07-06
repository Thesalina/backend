const express = require('express');
const router = express.Router();
const Resource = require('../Models/resource'); // ✅ Adjust path if needed

// GET all resources
router.get('/', async (req, res) => {
  console.log("🔄 GET /api/resources triggered");
  try {
    const resources = await Resource.find();
    console.log("✅ Resources fetched:", resources);
    res.json(resources);
  } catch (err) {
    console.error("❌ Error in GET /resources:", err);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});




// GET a single resource by ID
// GET a single resource by ID
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (err) {
    console.error("❌ Error fetching resource:", err);
    res.status(500).json({ error: 'Failed to fetch the resource' });
  }
});


module.exports = router;