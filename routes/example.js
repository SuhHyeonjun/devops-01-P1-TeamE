const express = require(`express`);
const router = express.Router();
const candidate = require(`../model/candidate`)
// 코드 연습장입니다.

 // http://[IP주소]:[Port번호]/example <- 이 주소를 입력하면 여기 코드가 실행됩니다.
router.route(`/`)
    .get(async (request, response) => { // 위에서 말한 주소에 GET 메소드로 요청이 들어오면 처리하는 코드입니다.
        const cands = await candidate.find({});
        console.log(cands);
        return response.status(200).send(cands);
    })
    .post((request, response) => { // POST 메소드로 요청이 들어오면 처리하는 코드입니다.
        
    })
    .patch((request, response) => { // PATCH 메소드로 요청이 들어오면 처리하는 코드입니다.
        
    })
    .put((request, response) => { // PUT 메소드로 요청이 들어오면 처리하는 코드입니다.
        
    })
    .delete((request, response) => { // DELETE 메소드로 요청이 들어오면 처리하는 코드입니다.
        
    })

router.route(`/deep`) // http://[ip주소]:[port번호]/example/deep
    .get((request, response) => { 
        return response.status(200).send(`/deep get request here`)
    })
// 여기까지
module.exports = router;