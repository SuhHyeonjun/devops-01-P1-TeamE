const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.
<<<<<<< HEAD
router.route(`/`) // http://localhost:4000/register
    .post((request, response) => {
        return;
=======
router.route(`/`) // app.use(`/register`)
    .post((request, response) => {
        console.log(request.body);
        const {username, email, password} = request.body;
<<<<<<< HEAD
        const inpData = {username, email, password};
        const outData = {"uid" : 1 };
        if (inpData) {
            return response
                .status(201)
                .header('Content-Type','application/json')
                .send(outData)
        } else {
            return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Not Found"})
        }
    }
    )    
=======
        const inpData = {uid:1};
        return response
        .statusCode(201)
        .send(inpData)
>>>>>>> b4a456f1f8f7fa5fc2c1b035b952c25da6f25432
    })
    .get((request, response) => {
        return;
    })
>>>>>>> cd4841adb5ebe2482164a7ccc43b1ce7f4d4c170
// 여기까지
module.exports = router;