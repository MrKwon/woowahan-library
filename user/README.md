# User - Vue Wep Application
## Requirements
1. 도서 현황
    - 해당 도서가 얼마나 남아있는지
    - 도서 간단 정보 확인
2. 대여하기
3. 반납하기
4. QR코드 리더
5. 로그인

## beta version Features
1. - [x] 도서 목록 뿌려주는 기능
2. - [x] 검색 기능
3. - [x] 도서 간략 정보 확인

## 30th June Update Plan TODOList
1. - [x] 희망 도서 신청 기능
2. - [x] 자잘한 버그 수정
3. - [ ] pwa 도입
4. - [ ] 버튼으로 대여, 반납

## July Update Plan TODOList
1. - [ ] QR code 대여, 반납

## 배포 메뉴얼
### check list
1. server .env github secret
    - GIT_OAUTH_USER_CLIENT_ID : tecobrary id
    - GIT_OAUTH_USER_CLIENT_SECRET : tecobrary secret
    - GIT_OAUTH_USER_REDIRECT_URI : user cloudfront uri

    - GIT_OAUTH_MANAGE_CLIENT_ID : tecobrary-manage id
    - GIT_OAUTH_MANAGE_CLIENT_SECRET : tecobrary-manage secret
    - GIT_OAUTH_MANAGE_REDIRECT_URI : manage cloudfront uri

2. user, manage .env HOST_URL to server url

3. github oauth setting
    - tecobrary redirect uri to user cloudfront uri
    - tecobrary-manage redirect uri to manage cloudfront uri
