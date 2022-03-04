const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.
router.route(`/`)
    .post((request, response) => {
        const {username, email, password} = request.body;
        const inpData = {uid:1};
        return response
        .statusCode(201)
        .send(inpData)
    })
// 여기까지
module.exports = router;