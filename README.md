# Woowahan-Library
![Alt text](https://raw.githubusercontent.com/MrKwon/woowahan-library/master/dark_logo.png)

이 디렉터리는 우아한테크코스의 도서 관리 시스템(테코브러리 (techcourse library))의 레포지토리 입니다.

## 기본 정보
* 작성자 : Luffy

## 설치

 설치 및 실행 방법은 각 디렉터리의 README.md 에서 확인하실 수 있습니다.

## Directory Structure
### manage (ONLY PC-WEB)
이 디렉터리는 우아한테크도서관의 관리자 페이지를 위한 디렉터리 입니다.

#### 개발 및 의존성
* Vue.js Framework

### user (ONLY MOBILE-WEB)
이 디렉터리는 우아한테크도서관의 유저용 페이지를 위한 디렉터리 입니다. 

#### 개발 및 의존성
* Vue.js Framework using PWA

### server
This directory is for woowahan-library server. Using Node framework.

#### 개발 및 의존성
* Node.js Server Side Framework
* MariaDB

## TODO LIST 7 / 5
- [x] ~~github oauth 를 가져와서 **첫 로그인 시에** Users Table 에 저장~~
- [x] ~~Users Table 의 authorization 을 Vuex 의 상태에 저장할 수 있도록 함, 이에 따라 Drawer 의 아이템을 보여줄지 안보여줄 지 결정하도록 함~~

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