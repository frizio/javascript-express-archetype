const { Router } = require("express");
const router = Router();

const os = require("os");

router.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`
    <h1>Demo Express API from ${hostname}</h1>
  `);
});

module.exports = router;