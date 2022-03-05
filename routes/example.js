const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.

 // http://[IP주소]:[Port번호]/example <- 이 주소를 입력하면 여기 코드가 실행됩니다.
router.route(`/`)
    .get((request, response) => { // 위에서 말한 주소에 GET 메소드로 요청이 들어오면 처리하는 코드입니다.
        
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
        
    })
// 여기까지
module.exports = router;