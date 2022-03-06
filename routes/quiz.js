const quiz = require(`../model/quiz`); // quiz 데이터베이스 불러오기
const words = require(`../model/words`); // words 데이터베이스 불러오기
const express = require(`express`);
const router = express.Router();

router.route(`/:qid`) // request endpoint : http://{ip}:{port}/quiz/1 2 3 4 5..
    .get( async (request, response) => {
        const quiz_id = request.params.qid;
        const questionFindResult = await quiz.find({"quiz_id" : quiz_id});
        // 질문 찾음
        if (questionFindResult) {
            const quizFindResult = await words.find({"quiz_id" : quiz_id}).populate(`quiz_id`);
            console.log(questionFindResult)
            // 문항 찾음
            if (quizFindResult){
                return response
                    .status(200)
                    .header('Content-Type','application/json')
                    .send(quizFindResult); // { "quiz_id" : 1 }
            }
            else {
                return response
                .status(404)
                .header('Content-Type','application/json')
                .send({"error" : "Quiz Not Found"})    
            }
        } else {
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Quiz Not Found"})
        }
    })

module.exports = router;