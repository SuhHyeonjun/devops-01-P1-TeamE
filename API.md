| 카테고리 | 기능 | 메소드 | 엔드포인트 | 요청 바디 |
|:--------:|:----:|:------:|:----------:|:---------:|
| 조회 | 전체 후보자 투표수 조회 | GET | /voted_result | None |
```
// 성공 
* 상태코드 - 200
* 응답 body
[ 
    {
        “cid” : Number,
        “name” : String,
        “votes” : Number
    }, … 
]

// 실패
* 상태코드 - 404
* 응답 body
{
	"error" : "No Candidates"
}

```
| 등록 | 사용자 등록 | POST | /register | None |
|:--------:|:----:|:------:|:----------:|:---------:|

```
* 요청 body
    {
        “username” : String,
        “password” : String
    },

// 성공 
* 응답
* 상태코드 - 201
	{
		"uid" : Number,
		"token" : "Token Published"
	}

// 실패
* 상태코드 - 404...
* Response body
{
	"error" : "Register Failed"
}

```
| 수정 | 직접 투표 | PUT | /vote | 하단에 명기 |
|:--------:|:----:|:------:|:----------:|:---------:|

```
* 요청 body
{
	“voted_candidate” : “candidate_id”
}

// 성공
* 상태코드 - 201
* 응답 body
{
	“username” : String,
	“voted_candidate” : Number,
}

// 실패 
* 상태코드 - 404
* 응답 body
{
	"error" : "Vote Failed"
}
```

| 생성 | 성향 테스트 문항 선택 | POST | /choice | 하단에 명기 |
|:--------:|:----:|:------:|:----------:|:---------:|
```
* 요청 body 
{
	“wid” : Number,
}

// 성공
* 상태코드 - 201
* 응답 body
{
	“uid” : Number,
	“cid” : Number,
}

// 실패
* 상태코드 - 404
* 응답 body
{
	"error" : "Choice Failed"
}
```

| 조회 | 퀴즈 조회 | GET | /quiz/:qid | None |
|:--------:|:----:|:------:|:----------:|:---------:|
```
// 성공
* 상태코드 - 200
* 응답 body
{
	“question” : String,
	“Words” : [
		word,
		word,
		word
	…]
}

// 실패
* 상태코드 - 404
* 응답 body
{
	"error" : "Quiz Not Found"
}
```