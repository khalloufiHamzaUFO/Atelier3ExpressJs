var express = require('express');
var os = require('os');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        hostname:os.hostname(),
        type: os.type(),
        plateform: os.platform()
    });
});

router.get('/cpus/', function(req, res, next) {
    res.json({
        test : os.cpus()	
    });
});


router.get('/cpus/:id', function(req, res, next) {
    const cpuInfo = os.cpus();
    const index = parseInt(req.params.id);

    if (index >= 0 && index < cpuInfo.length) {
        res.json({ CPU: cpuInfo[index] });  // Return specific CPU info
    } else {
        res.status(404).json({ error: 'CPU not found' }); // Handle invalid ID
    }
});

router.get('/cpus/:id', function(req, res, next) {
    res.json({
        CPU : os.cpus(id)	
    });
});


   
module.exports = router;

