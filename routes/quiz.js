const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .get((request, response) => {
        let outData = {
            "questuon" : "대한민국 수도를 김해로",
            "words" : []
        };
        if (outData) {
            return response
            .status(200)
            .header('Content-Type','application/json')
            .send("성공")
        } else {
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Quiz Not Found"})
        }
    }
    )