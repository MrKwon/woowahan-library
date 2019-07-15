# manage 클라이언트 기본 기능

해당 라우팅 경로의 기본 경로는 ``{HOST_URL}/manage`` 입니다.

1. ``POST /book/search``
    * [naverApi 문서](https://github.com/MrKwon/woowahan-library/blob/master/documentation/naverApi.md)의 /search 참조
<br>
2. ``GET /book/total``
    * manage 클라이언트의 pagination 을 위해 Books 테이블의 전체 데이터 수를 응답으로 받아옵니다.
    * [user 문서](https://github.com/MrKwon/woowahan-library/blob/master/documentation/user.md)의 /total 참조

3. ``POST /book/index``
    * manage 클라이언트에서 pagination 의 페이지에 맞는 책들 정보를 받아옵니다.
    책 정보는 배열형태로 10개씩 받아옵니다.
    * [user 문서](https://github.com/MrKwon/woowahan-library/blob/master/documentation/user.md)의 /books 참조

4. ``POST /book/register``
    * manage 클라이언트에서 Books 에 새로운 데이터를 추가할 때 보내는 요청입니다.
    
    * request
    ```
      {
        "img_url": "표지 이미지 url",
        "title": "제목",
        "author": "저자",
        "publisher": "출판사",
        "isbn": "isbn",
        "desc": "짧은 설명"
      }
    ```

    * response
    ```
      {
        "message" : "등록 성공" // 등록이 성공할 경우
      }
    ```

    ```
      {
        "error" : "등록 실패" // error 발생시
      }
    ```