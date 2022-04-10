const express = require('express');
const router = express.Router();

router.get('/machines', function(req,res,next){
    res.send({
        "Machines": {
            "Machine 1": {
                "Machine Type": "Test",
                "Power Constraint": "Test",
                "Fixed Constraint": "Test"
            },
            "Machine 2": {
                "Machine Type": "Test",
                "Power Constraint": "Test",
                "Fixed Constraint": "Test"
            },
            "Machine 3": {
                "Machine Type": "Test",
                "Power Constraint": "Test",
                "Fixed Constraint": "Test"
            },
            "Machine 4": {
                "Machine Type": "Test",
                "Power Constraint": "Test",
                "Fixed Constraint": "Test"
            },
            "Machine 5": {
                "Machine Type": "Test",
                "Power Constraint": "Test",
                "Fixed Constraint": "Test"
            }
        }
    });
    console.log("get")
});



module.exports = router;