# user 클라이언트 기본 기능

해당 라우팅 경로의 기본 경로는 ``{HOST_URL}/user`` 입니다.

1. ``GET /total``
    user 클라이언트에서 pagination 의 길이를 설정하기 위해 데이터베이스의 Books table 에 저장된 모든 데이터의 개수를 받아옵니다.<br>
    예시

    * response (key 이름 변경 필요)
    ```
    {
      "lastId": 37
    }
    ```


2. ``POST /books``
    user 클라이언트에서 pagination 의 페이지에 맞는 책들 정보를 받아옵니다.
    책 정보는 배열형태로 12개씩 받아옵니다.

    * request
    ```
    {
      "page": "1"
    }
    ```

    * response
    ```
    [
      {
        "id": 1,
        "img_url": "https://bookthumb-phinf.pstatic.net/cover/091/459/09145968.jpg?type=m1&udate=20171011",
        "title": "객체지향의 사실과 오해 (역할, 책임, 협력 관점에서 본 객체지향)",
        "author": "조영호",
        "publisher": "위키북스"
      },
      // 이하 생략...
    ]
    ```

3. ``POST /search``
    user 클라이언트의 장서 검색 기능에서 사용되는 기능.
    keyword 를 입력하면 제목에 해당 keyword 를 포함하고 있는 Books 테이블의 title 컬럼에서 찾아 id 와 title 을 받아옵니다.

    * request
    ```
    {
      "keyword": "객"
    }
    ```

    * response
    ```
    [
      {
        "id": 1,
        "title": "객체지향의 사실과 오해 (역할, 책임, 협력 관점에서 본 객체지향)"
      },
      {
        "id": 37,
        "title": "객체지향 프로그래밍 (한 번 읽으면 두 번 깨닫는)"
      },
      {
        "id": 38,
        "title": "객체 지향과 디자인 패턴 (개발자가 반드시 정복해야 할)"
      },
      {
        "id": 39,
        "title": "객체지향 소프트웨어 공학 (객체지향 소프트웨어 개발의 모든 것)"
      },
      {
        "id": 66,
        "title": "자바 객체지향 디자인 패턴 (UML과 GoF 디자인 패턴 핵심 10가지로 배우는)"
      },
      {
        "id": 67,
        "title": "LabVIEW 객체지향 프로그래밍 기초 (OOP 소프트웨어 아키텍처 Actor Framework)"
      },
      {
        "id": 68,
        "title": "스프링 입문을 위한 자바 객체 지향의 원리와 이해"
      }
    ]
    ```

4. ``POST /bookinfo``
    user 클라이언트의 책 상세정보 페이지에서 사용되는 기능
    id 로 Books 테이블에 있는 해당 책 정보를 받아옵니다.

    * request
    ```
    {
      "id": "1"
    }
    ```

    * response
    ```
    {
      "id": 1,
      "img_url": "https://bookthumb-phinf.pstatic.net/cover/091/459/09145968.jpg?type=m1&udate=20171011",
      "title": "객체지향의 사실과 오해 (역할, 책임, 협력 관점에서 본 객체지향)",
      "author": "조영호",
      "publisher": "위키북스",
      "isbn": "8998139766 9788998139766",
      "desc": "객체지향에 대한 선입견을 버려라!『객체지향의 사실과 오해』는 객체지향이란 무엇인가라는 원론적면서도 다소 위험한 질문에 답하기 위해 쓰여진 책이다. 안타깝게도 많은 사람들이 객체지향의 본질을 오해하고 있다. 가장 널리 퍼져있는 오해는 클래스가 객체지향 프로그래밍의 중심이라는 것이다.... ",
      "createdAt": "2019-06-06T02:09:51.000Z",
      "updatedAt": "2019-06-06T02:09:51.000Z",
      "deletedAt": null
    }
    ```

5. ``PATCH /editname``
    user 클라이언트에서 사용자가 이름 변경을 요청할 때 사용하는 기능
    클라이언트에서 user 정보와 newName 을 body에 담아서 요청을 하면 Users 테이블에서 해당하는 user row 를 찾아 name 필드를 newName으로 변경한다.

    * request
    ```
    {
      "user": {
        // 클라이언트의 user 객체
      },
      "newName" : "변경할 name"
    }
    ```

    * response
    변경 후의 User table 에서 user row 의 데이터
    