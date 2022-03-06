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
                const username = userdata.username; // 토큰이 유효하면 username과 password
                const userpwd = userdata.password;
                const findData = {username, userpwd};
                const user = await users.findOne(findData); // username과 userpassword로 users 데이터베이스에서 uid를 찾는다.
                const userid = user.uid;
                const reqWid = request.body.wid;
                const candidateFindResult = await words.findOne({"word_id" : reqWid});
                if(candidateFindResult){
                    const cid = candidateFindResult.cid;
                    const inpData = {userid, cid}; 
                    /*
                    inpData = {
                        "userid" : userid,
                        "cid" : cid
                    }
                    */
                    const popResult = new choices(inpData); // 데이터 새로 만들어서
                    await popResult.save(); // 저장. 위의 코드와 항상 같이 다녀야함.
                    return response
                        .status(201)
                        .header('Content-Type','application/json')
                        .send(inpData);
                }
                else {
                    return response
                           .status(404)
                           .header('Content-Type','application/json')
                            .send({
                                "error" : "Choice Failed"
                            });
                }
                
            } catch(error) { // 여긴 토큰이 만료되었을때의 코드
                return response
                    .status(403)
                    .header('Content-Type','application/json')
                    .send({ "error" : `${error}` });
            }
        } 
        else // 여긴 토큰이 없을때의 코드
            return response
                .status(403)
                .header('Content-Type','application/json')
                .send({ "error" : "No Token" });
    })
 
    

// 여기까지
module.exports = router;