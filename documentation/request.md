# request

해당 라우팅 경로의 기본 경로는 ``{HOST_URL}/request`` 입니다.

1. ``POST /``
    책을 요청할 때 Requests table 에 데이터를 등록합니다.

    * request
    ```
    {
      "book" : {
        "image" : "",
        "title" : "",
        "author" : "",
        "publisher" : "",
        "isbn" : "",
        "description : ""
      }
    }
    ```

    * response
    응답은 3가지 경우가 있습니다.
      1. 이미 Books 테이블에 있는 경우
      2. 이미 Requests 테이블에 있는 경우
      3. 정상 등록
<br>
2. ``POST /list``
    manage 클라이언트에서 희망도서 확인을 위해 Request 테이블에 있는 모든 데이터를 반환합니다.

    응답은 배열 형태로 반환됩니다.

3. ``POST /register``
    manage 클라이언트, 희망도서(Requests 테이블)에서 보유장서(Books)로 이동 시킬 때 보내는 요청입니다.
    
    응답은 메시지로 반환됩니다.

    * request
    ```
    {
      "id" : /* requests의 id */
    }
    ```

