# Naver 책 검색

해당 라우팅 경로의 기본 경로는 ``{HOST_URL}/naverApi`` 입니다.

1. ``POST /search``

    * NAVER 검색 API 로 요청을 보내고 키워드에 대한 검색 결과를 10개 배열로 응답합니다.
    * NAVER 검색 API 를 이용하기 때문에 제목, 저자, 출판사 어떤 키워드를 입력해도 정확도가 높은 10개의 결과를 순차적으로 응답합니다.
    <br>

    예시

    * request body (key 이름 변경 필요)

    ```
    {
      title: '박재성'
    }
    ```

    * response
    ```
    {
      "items": [
        {
            "title": "상하수도공학 (2019)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=14204419",
            "image": "https://bookthumb-phinf.pstatic.net/cover/142/044/14204419.jpg?type=m1&udate=20181122",
            "author": "박재성",
            "price": "19000",
            "discount": "17100",
            "publisher": "성안당",
            "pubdate": "20190107",
            "isbn": "8931569068 9788931569063",
            "description": "토목기사?산업기사 시험 완벽 대비 수험서!!\n[핵심시리즈 6] 상하수도공학 2019년 최신 개정판!!상하수도공학은 토목기사·산업기사 시험과목으로 출제되면서 많은 수험생들이 이 과목을 접하게 되었다. 이에 저자는 수험생들이 이 과목을 보다 정확하게, 보다 쉽게 이해할 수 있도록 본서를 출간하였다.\n본서는... "
        },
        {
            "title": "분신사마 1 (심장이 두근두근 온 몸이 오싹오싹 무시무시한 이야기)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=15076898",
            "image": "https://bookthumb-phinf.pstatic.net/cover/150/768/15076898.jpg?type=m1&udate=20190708",
            "author": "박재성",
            "price": "11000",
            "discount": "9900",
            "publisher": "은하수미디어",
            "pubdate": "20190620",
            "isbn": "8965793785 9788965793786",
            "description": "심장이 두근두근, 온 몸이 오싹오싹!\n으스스한 이야기들이 가득한 공포 이야기 제1탄!《분신사마 1》에는 더위를 한 번에 날려 버릴 만한 오싹한 공포 이야기가 담겨 있어요.\n귀신과 핸드폰 문자를 나눈 이야기, 순수한 아기의 눈에 보이는 귀신들, 왕따를 당하던 아이의 복수 이야기, 가수가 되고 싶었던 두... "
        },
        {
            "title": "분신사마 2 (심장이 두근두근 온 몸이 오싹오싹 무시무시한 이야기)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=15076900",
            "image": "https://bookthumb-phinf.pstatic.net/cover/150/769/15076900.jpg?type=m1&udate=20190708",
            "author": "박재성",
            "price": "11000",
            "discount": "9900",
            "publisher": "은하수미디어",
            "pubdate": "20190620",
            "isbn": "8965793793 9788965793793",
            "description": "심장이 두근두근, 온 몸이 오싹오싹!\n으스스한 이야기들이 가득한 공포 이야기 제2탄!《분신사마 2》에는 더위를 한 번에 날려 버릴 만한 오싹한 공포 이야기가 담겨 있어요.\n악플을 달던 소년 이야기, 사람들의 소원을 들어주는 인형, 귀신이 되어서도 아들을 구하려는 엄마 이야기, 죽은 친구에게 온 문제 등... "
        },
        {
            "title": "자바 웹 프로그래밍 Next Step (하나씩 벗겨가는 양파껍질 학습법)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=11037465",
            "image": "https://bookthumb-phinf.pstatic.net/cover/110/374/11037465.jpg?type=m1&udate=20190204",
            "author": "박재성",
            "price": "30000",
            "discount": "27000",
            "publisher": "로드북",
            "pubdate": "20160919",
            "isbn": "8997924249 9788997924240",
            "description": "이 책은 웹 개발 입문의 껍질(책에서는 ‘양파껍질’로 표현한다)을 막 벗겨낸 경력 1년 이상의 초보개발자들을 대상으로 하는 책이다. 웹 서버, 프레임워크 등을 직접 제작해보고 테스트와 리팩토링을 통해 점진적 개선을 해나가면서 실무에 필요한 개발 능력과 웹에 대한 폭넓은 이해력을 높여준다. 10년... "
        },
        {
            "title": "길잡이 토질 및 기초기술사 공종별 총괄요약집",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=13782329",
            "image": "https://bookthumb-phinf.pstatic.net/cover/137/823/13782329.jpg?type=m1&udate=20180712",
            "author": "박재성",
            "price": "19800",
            "discount": "17820",
            "publisher": "성안당",
            "pubdate": "20180720",
            "isbn": "8931568894 9788931568899",
            "description": "좀 더 효율적으로 공부하기 위해 기술사 준비의 핵심을 정리하여 기술사 취득에 도움이 되고자 이 책을 발간한다.\n시간의 제약 때문에 많은 시간을 할애하지 못한 분들과 장기간 공부를 하면서 핵심을 제대로 간파하지 못하여 자격증 취득이 늦어지고 있는 분들을 위하여 단기간에 기술사 준비를 완성할 수... "
        },
        {
            "title": "성공하는 프로그래밍 공부법 (프로그래머의 길을 생각한다)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=13993648",
            "image": "https://bookthumb-phinf.pstatic.net/cover/139/936/13993648.jpg?type=m1&udate=20180918",
            "author": "박재성|고종범|남재창|박지현",
            "price": "17000",
            "discount": "15300",
            "publisher": "로드북",
            "pubdate": "20180910",
            "isbn": "8997924419 9788997924417",
            "description": "프로그래밍을 배우려는 사람, 이미 배우고 있는 사람, 교양으로 배우려는 사람, 모두를 위한 책이다. 프로그래밍은 막상 공부하는 과정에서 수많은 실패와 좌절을 경험한다. 그 과정을 이겨내지 못하고 포기하는 사람도 많다.\n이 책은 왜 프로그래밍 공부가 자주 실패할 수밖에 없는지, 어떻게 하면 실패하는... "
        },
        {
            "title": "변액보험 펀드관리 (수익으로 전환되는)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=12129687",
            "image": "https://bookthumb-phinf.pstatic.net/cover/121/296/12129687.jpg?type=m1&udate=20170616",
            "author": "박재성",
            "price": "20000",
            "discount": "18000",
            "publisher": "스타리치북스",
            "pubdate": "20170615",
            "isbn": "1185982388 9791185982380",
            "description": "변액보험 가입자 수 850만 명 시대, 가입자와 권유자(FC) 모두 변액보험으로 답답해하고 있다!  변액보험의 고민과 불안에 대한 해법을 최대한 쉽게, 핵심만 모아 실전적으로 제시한다!  변액보험 가입자 수 850만 명 시대. 국민 6명 중 1명이 가입하고 있으며, 2016년 10월 기준 25개 생명보험사의 변액보험 자산운용... "
        },
        {
            "title": "길잡이 토질 및 기초기술사 핵심문제",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=7296092",
            "image": "https://bookthumb-phinf.pstatic.net/cover/072/960/07296092.jpg?type=m1&udate=20161223",
            "author": "박재성",
            "price": "45000",
            "discount": "40500",
            "publisher": "성안당",
            "pubdate": "20130823",
            "isbn": "8931567219 9788931567212",
            "description": "본서는 최근 출제 빈도가 높은 문제를 선별 수록하여 단원별로 정리하였다. 책이 아닌 노트 형식으로 구성하여 학습에 대한 부담감을 줄여 주었으며 깔끔하고 큰 글씨로 중요 사항을 한눈에 파악할 수 있도록 하였다. \n\n또한 그림과 표를 삽입하여 내용의 이해를 높여주었고 노하우가 담긴 해설로 문제 적용력 및... "
        },
        {
            "title": "상하수도공학 (2018,토목기사.산업기사 시험 완벽 대비)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=12723471",
            "image": "https://bookthumb-phinf.pstatic.net/cover/127/234/12723471.jpg?type=m1&udate=20171114",
            "author": "박재성",
            "price": "18000",
            "discount": "",
            "publisher": "성안당",
            "pubdate": "20180105",
            "isbn": "893156886X 9788931568868",
            "description": "토목기사ㆍ산업기사 시험 완벽 대비 수험서!!\n[핵심시리즈 6] 상하수도공학 2018년 최신 개정판!!상하수도공학은 토목기사·산업기사 시험과목으로 출제되면서 많은 수험생들이 이 과목을 접하게 되었다. 이에 저자는 수험생들이 이 과목을 보다 정확하게, 보다 쉽게 이해할 수 있도록 본서를 출간하였다.\n본서는... "
        },
        {
            "title": "마법천자문 영문법원정대 5 (의문사,모두의 힘을 모아 이블바이스를 막아라)",
            "link": "http://book.naver.com/bookdb/book_detail.php?bid=7374781",
            "image": "https://bookthumb-phinf.pstatic.net/cover/073/747/07374781.jpg?type=m1&udate=20131209",
            "author": "박재성",
            "price": "9800",
            "discount": "",
            "publisher": "아울북",
            "pubdate": "20131101",
            "isbn": "8950940256 9788950940256",
            "description": "《마법천자문 영문법원정대》는 주요 영문법 5가지를 뽑아, 한 권으로 하나의 영문법을 완벽히 이해할 수 있도록 총 5권으로 구성하였습니다. 본문 사이사이에는 20개 정도의 학습 박스를 넣어, 재미와 학습 어느 한 쪽도 놓치지 않도록 균형을 이루었습니다."
        }
      ]
    }
    ```