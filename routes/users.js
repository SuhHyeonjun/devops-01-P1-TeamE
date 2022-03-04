const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        console.log(`From upper`);
        if (typeof req.body !== `string`){
            return alert(`텍스트 이외에 다른 값은 넣을 수 없습니다.`);
        }
        else {
            let inputString = req.body;
            if (/^[a-zA-Z ]+$/.test(inputString)){
                outString = inputString.toUpperCase();
                return res.json(outString);
            }
            else {
                return res.json(`알파벳이 없습니다.`);
            }
        }
    })    
    .get((req, res) => {
        console.error('Bad Request -> GET method');
        return res.status(404).send(`<h1>Bad Request!</h1>`);
    })
    .put((req, res) => {
        console.error('Bad Request -> PUT method');
        return res.status(404).send(`<h1>Bad Request!</h1>`);
    })
    .patch((req, res) => {
        console.error('Bad Request -> PATCH method');
        return res.status(404).send(`<h1>Bad Request!</h1>`);
    })
    .delete((req, res) => {
        console.error('Bad Request -> DELETE method');
        return res.status(404).send(`<h1>Bad Request!</h1>`);
    });

    
module.exports = router;