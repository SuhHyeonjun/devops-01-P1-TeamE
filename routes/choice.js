const jwt = require(`jsonwebtoken`);
const users = require(`../model/users`);
const words = require(`../model/words`);
const choices = require(`../model/choice`);
const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`)
    .post(async (request, response) => {
        const token = request.cookies.access_token;
        if(token) {
            try {
                const userdata = jwt.verify(token, process.env.SECRET_JWT);
                const username = userdata.username; //위에서 토큰을 받았다면 username을 줌
                const userpwd = userdata.password; //위에서 토큰을 받았다면 password를 줌.
                const findData = {username, userpwd}; // username, password 불러옴.
                const user = await users.findOne(findData); // 위 findData로 users 데이터베이스에서 uid를 찾음
                const userid = user.uid;
                const reqWID = request.body.word_id; //WID 요청 바디
                const candidateFindresult = await words.findOne({"word_id" : reqWID}) // 데이터베이스에서 WID값을 찾음
                if(candidateFindresult) {
                    const cid = candidateFindresult.cid;
                    const inpData = {userid, cid}; // uid = userID, cid = foundCID
                    const popResult = new choices(inpData); // choices 데이터를 새로 만듬
                    await popResult.save(); // 새로 만든 choices 데이터를 저장. 위와 커플함수
                    return response  // 선택했을때  userID와 foundCID를 출력
                    .status(201)
                    .header('Content-Type','application/json')
                    .json(inpData);
                } else { // 선택하지않았을때 에러코드 
                    return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Choice Failed"});
                }
                
            } catch(error) { // General Error handling
                return response
                    .status(400)
                    .header('Content-Type','application/json')
                    .send({ "error" : `${error}` });
            }
        } 
        else // 여긴 토큰이 없을때의 코드
            return response
                .status(404)
                .header('Content-Type','application/json')
                .send({ "error" : "No Token" })
    })

// 여기까지
module.exports = router;