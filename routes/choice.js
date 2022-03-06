const express = require(`express`);
const router = express.Router();
const users = require(`../models/users`)
const words = require(`../models/words`)
// API 명세를 보고 여기부터 코드 작성해주세요.
router.route(`/`)
    .post(async (request, response) => {
    const {username} = request.body;
    const outData = {"word_id" : 1};
    const uid = out
    if (word_id) {
        return response
            .status(201)
            .header('Content-Type','application/json')
            .send("outData")
    } else {
        return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Choice Failed"})
    }
})

// 여기까지
module.exports = router;