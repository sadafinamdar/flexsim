const express = require('express');
const router = express.Router();

router.get('/machines', function(req,res,next){
    res.send({
        "Machines": {
            "Machine 1": {
                "Machine Type": "Lathe",
                "Machine Model": "dc1880",
                "Power Constraint": "5.5KW",
                "Fixed Constraint": "2900KG"
            },
            "Machine 2": {
                "Machine Type": "Lathe",
                "Machine Model": "ghb",
                "Power Constraint": "2.4KW",
                "Fixed Constraint": "750KG"
            },
            "Machine 3": {
                "Machine Type": "Lathe",
                "Machine Model": "ck6432_cnc_lathe_machine_with bar_feeder",
                "Power Constraint": "4.0KW",
                "Fixed Constraint": "1450KG"
            },
            "Machine 4": {
                "Machine Type": "Lathe",
                "Machine Model": "lcm410"
                "Power Constraint": "1500KW",
                "Fixed Constraint": "1450KG"
            },
            "Machine 5": {
                "Machine Type": "Lathe",
                "Machine Model": "das_36c"
                "Power Constraint": "7KW",
                "Fixed Constraint": "2600KG"
            }
        }
    });
    console.log("get")
});



module.exports = router;
