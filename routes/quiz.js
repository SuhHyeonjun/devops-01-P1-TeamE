const quiz = require('../model/quiz')
const words = require('../model/words')
const express = require(`express`);
const router = express.Router();

router.route(`/`)
<<<<<<< HEAD
    .get((request, response) => {
        let outData = {
            "question" : "주제",
            "words" : []
        };

        if (outData) {
=======
    .get( async (request, response) => {
     const quiz_id = request.params.qid;
     const questionFindResult = await quiz.find({"quiz_id" : quiz_id})
     const quizFindResult = await words.find({"quiz_id" : quiz_id})
        if (questionFindResult&quizFindResult)
        {
>>>>>>> 4272a7920289b9f066762b51c9f3306df2ec6845
            return response
            .status(200)
            .header('Content-Type','application/json')
            .send(questionFindResult&quizFindResult);
        
        }
        else
        {
            return response
            .status(404)
            .header('Content-Type','application/json')
            .send({"error" : "Quetion Not Found"})
        }
    })

module.exports = router;