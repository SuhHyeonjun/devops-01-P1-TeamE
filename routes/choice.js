const jwt = require(`jsonwebtoken`);
const users = require(`../model/users`);
const words = require(`../model/words`);
const express = require(`express`);
const router = express.Router();
const users = require(`../models/users`)
const words = require(`../models/words`)
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`)
    .post(async (request, response) => {
<<<<<<< HEAD
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
=======
        const token = request.cookies.access_token;
        if(token) {
            try {
                const data = jwt.verify(token, process.env.SECRET_JWT);
                const username = data.username; // 토큰이 인증되면 토큰에서 username 가져옵니다.
                // 여기서부터 wid받아서 어떻게 처리해야할지 코드 작성해주세요.
                
            } catch { // 여긴 토큰이 만료되었을때의 코드
                return response
                    .status(403)
                    .header('Content-Type','application/json')
                    .send({ "error" : "Token Expired" });
            }
        } 
        else // 여긴 토큰이 없을때의 코드
            return response
                .status(403)
                .header('Content-Type','application/json')
                .send({ "error" : "No Token" });
    })
 
    
>>>>>>> bf4786a5cd38c9df75bd51490bf1ce73e759c88a

// 여기까지
module.exports = router;