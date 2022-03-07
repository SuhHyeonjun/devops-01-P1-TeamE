const quiz = require('../model/quiz')
const words = require('../model/words')
const express = require(`express`);
const router = express.Router();

router.route(`/:qid`)
    .get( async (request, response) => {
        const quiz_id = request.params.qid;
        const questionFindResult = await quiz.findOne({"quiz_id" : quiz_id});
        const quizFindResult = await words.find({"quiz_id" : quiz_id});
        if (questionFindResult && quizFindResult){
            const question = questionFindResult.question;
            const words = []; // Array
            if(Array.isArray(quizFindResult) && quizFindResult !== []){
                for (let i = 0; i < quizFindResult.length; i++) {
                    let word = quizFindResult[i].word;
                    words.push(word);
                }
                const inpData = {question, words};
                return response
                    .status(200)
                    .header('Content-Type','application/json')
                    .send(inpData);
            }
            else {
                return response
                .status(404)
                .header('Content-Type','application/json')
                .send({"error" : "Cannot Make Quiz"});
            }
        }
        else{
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Cannot Make Quiz"});
        }
    })

module.exports = router;