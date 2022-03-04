const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`)
    .get((request,response) => {
        let outData = {
            "cid" : 1,
            "name" : "이재명",
            "votes" : 0
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
            .send({"ERROR" : "Not Found"})
        }
    }
    )




// 여기까지
module.exports = router;