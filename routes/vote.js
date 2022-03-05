const jwt = require(`jsonwebtoken`);
const users = require(`../model/users`);
const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .put(async (request, response) => {
        const token = request.cookies.access_token;
        if(token) {
            try {
                const data = jwt.verify(token, process.env.SECRET_JWT);
                const username = data.username;
                const updateVoted = request.body.voted_candidate;
                if(updateVoted > 3){
                    return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "No Candidate on this Vote"})
                }
                const updateResult = await users.findOneAndUpdate(
                    { "username" : username }, 
                    {"voted_candidate" : updateVoted },
                    { returnDocument : `after` }
                );
                if (updateResult) {
                    return response
                    .status(201)
                    .header('Content-Type','application/json')
                    .send({
                        "username" : updateResult.username,
                        "voted_candidate" : updateResult.voted_candidate
                    })
                } else {
                    return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Vote Failed"})
                }
            } catch {
                return response
                    .status(403)
                    .header('Content-Type','application/json')
                    .send({ "error" : "Token Expired" });
            }
        }
        else
            return response
                .status(403)
                .header('Content-Type','application/json')
                .send({ "error" : "No Token" });
    })
 
    
module.exports = router;