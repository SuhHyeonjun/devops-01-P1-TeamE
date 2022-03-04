| 카테고리 | 기능 | 메소드 | 엔드포인트 | 요청 바디 |
|:--------:|:----:|:------:|:----------:|:---------:|
| 조회 | 전체 후보자 투표수 조회 | GET | /voted_result | None |
```
// 성공 
// * 상태코드 - 200
// * Response body
[ 
    {
        “cid” : Number,
        “name” : String,
        “votes” : Number
    }, … 
]

// 실패
// * 상태코드 - 404...
// * Response body
{
	"error" : "Choice Failed"
}

```
| 등록 | 사용자 등록 | POST | /register | None |
|:--------:|:----:|:------:|:----------:|:---------:|

```
// 성공 
// * 상태코드 - 200
// * Response body
[ 
    {
        “cid” : Number,
        “name” : String,
        “votes” : Number
    }, … 
]

// 실패
// * 상태코드 - 404...
// * Response body
{
	"error" : "Choice Failed"
}

```
| 수정 | 직접 투표 | PUT | /vote | 하단에 명기 |
|:--------:|:----:|:------:|:----------:|:---------:|

```
{
	“Voted_candidate” : “candidate_id”
}

// 성공 - 201
// 응답 바디 
{
	“usr_name” : String,
	“voted_candidate” : String,
}
// 실패 - 404 (Not Found)
{
	"error" : "Vote Failed"
}
```

| 생성 | 성향 테스트 문항 선택 | POST | /choice | 하단에 명기 |
|:--------:|:----:|:------:|:----------:|:---------:|
```
요청 바디 
{
	“wid” : Number,
}
// 성공 - 201 /
 
응답 바디
 
{
	“uid” : Number,
	“wid” : Number,
}
// 실패 - 404

{
	"error" : "Choice Failed"
}
```

| 조회 | 퀴즈 조회 | GET | /quiz/:qid | None |
|:--------:|:----:|:------:|:----------:|:---------:|
```
// 성공 - 200
응답 바디  
{
	“question” : String,
	“Words” : [
		word,
		word,
	…]
}

// 실패 - 404
{
	"error" : "Quiz Not Found"
}
```