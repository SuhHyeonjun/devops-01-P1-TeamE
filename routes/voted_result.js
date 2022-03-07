const jwt = require(`jsonwebtoken`);
const express = require(`express`);
const router = express.Router();
const users = require(`../model/users`);
const cand = require(`../model/candidate`);
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`)
    .get( async (request,response) => {
        const token = request.cookies.access_token;
        if(token) {
            try {
                const data = jwt.verify(token, process.env.SECRET_JWT);
                let total_votes = 0;
                let voted_one = 0;
                let voted_two = 0;
                let voted_three = 0;
                const countUsers = await users.find({});
                if (countUsers) {
                    total_votes = countUsers.length;
                    for (let i = 0; i < total_votes; i++) {
                        voted_one += (countUsers[i].voted_candidate === `1`); 
                        voted_two += (countUsers[i].voted_candidate === `2`);
                        voted_three += (countUsers[i].voted_candidate === `3`);
                    }
                }
                else {
                    return response
                        .status(404)
                        .header('Content-Type','application/json')
                        .send({"error" : "Not Found"});
                }
                const cands = await cand.find({});
                if(cands){
                    for (let i = 0; i < cands.length; i++) {
                        if(i === 0){
                            cands[i].votes = voted_one;
                        }
                        else if(i === 1){
                            cands[i].votes = voted_two;
                        }
                        else {
                            cands[i].votes = voted_three;
                        }
                    }
                }
                else {
                    return response
                        .status(404)
                        .header('Content-Type','application/json')
                        .send({"error" : "Not Found"});
                }
                const candidates = cands;
                const resultData = {total_votes, candidates};
                if (resultData) {
                    return response
                    .status(200)
                    .header('Content-Type','application/json')
                    .send(resultData);
                } else {
                    return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Not Found"})
                }
            }
            catch(error) { // general error handling
                return response
                    .status(400)
                    .header('Content-Type','application/json')
                    .send({ "error" : `${error}` });
            }
        }
        else {
            return response
                .status(403)
                .header('Content-Type','application/json')
                .send({ "error" : "No Token" });
        }
    })




// 여기까지
module.exports = router;