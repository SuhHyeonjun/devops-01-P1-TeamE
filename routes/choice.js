const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.
router.route(`/`)
    .post((request, response) => {
    const {wid} = request.body;
    const outData = {"uid" : 1 ,"wid" : 1};
    if (wid) {
        return response
            .status(201)
            .header('Content-Type','application/json')
            .send("성공")
    } else {
        return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Choice Failed"})
    }
})

// 여기까지
module.exports = router;