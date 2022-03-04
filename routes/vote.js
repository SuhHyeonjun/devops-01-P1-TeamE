const express = require(`express`);
const router = express.Router();

router.route(`/`)
  
    .put((request, response) => {
        const {Voted_candidate : candidate_id} = request.body;
        const inpData = {Voted_candidate : candidate_id};
        const outData = {
            "user_name" : "서현준", 
            "voted_candidate" : "윤석열"
        };
        if (inpData) {
            return response
            .status(201)
            .header('Content-Type','application/json')
            .send(outData)
        } else {
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Vote Failed"})
        }
    })
 
    
module.exports = router;