const jwt = require(`jsonwebtoken`);
const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.

router.route(`/`)
    .get( async (request,response) => {
        const token = request.cookies.access_token;
        if(token) {
            try {
                const data = jwt.verify(token, process.env.SECRET_JWT);
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
            catch(error) {
                return response
                    .status(400)
                    .header('Content-Type','application/json')
                    .send({ "error" : error });
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