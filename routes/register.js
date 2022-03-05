const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcrypt`);
const express = require(`express`);
const users = require("../model/users");
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`) // app.use(`/register`)
    .post(async (request, response) => {
        let {username, password} = request.body;
        const voted_candidate = "";
        password = bcrypt.hashSync(password, 10);
        const token = jwt.sign({
            username : username,
            password : password
        }, process.env.SECRET_JWT, {
            expiresIn: '2h',
            issuer : `TEAM_E`
        });
        // console.log(usertoken);
        const countUsers = await users.find({});
        const uid = countUsers.length + 1;
        const inpData = {uid, username, password, voted_candidate};
        const registerResult = new users(inpData);
        // console.log(registerResult);
        if (registerResult) {
            await registerResult.save();
            return response
                .cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                  })
                .status(201)
                .header('Content-Type','application/json')
                .json({
                    "uid" : registerResult.uid,
                    "token" : "Token Published"
                })
        } else {
            return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Register Failed"})
        }
    })   
// 여기까지
module.exports = router;