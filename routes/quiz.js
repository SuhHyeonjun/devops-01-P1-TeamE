const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .get((request, response) => {
        let outData = {
            "question" : "주제",
            "words" : []
        };

        if (outData) {
            return response
            .status(200)
            .header('Content-Type','application/json')
            .send(outData)
        } else {
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Quiz Not Found"})
        }
    })

module.exports = router;