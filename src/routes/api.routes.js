const { Router } = require("express");

const os = require("os");

const router = Router();

router.get('/', (req, res) => {
  res.json({'version': '1.1.0'});
});

router.get('/ciao', (req, res) => {
  res.json({'nome': 'ciao'});
});

router.get('/hostname', (req, res) => {
  const hostname = os.hostname();
  res.json({ hostname });
});


router.get('/machine', (req, res) => {
  const userInfo = os.userInfo();
  const hostname = os.hostname();
  const type = os.type();
  const platform = os.platform();
  const arch = os.arch();
  const cpus = os.cpus();
  const ncpus = cpus.length;
  const totalmem = os.totalmem() / Math.pow(10, 9);
  const tmp = {
    userInfo,
    hostname,
    type,
    platform,
    arch,
    ncpus,
    totalmem,
  };
  res.json(tmp);
  // {'nome': 'ciao'}
});


module.exports = router;