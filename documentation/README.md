# API 문서

> 해당 문서는 테코브러리(Tecobrary) Node Express 웹 서버 api 문서입니다.
> Spring 프레임워크로 리팩토링하기 위한 목적으로 기술되었습니다.

## 목차

* [``{HOST_URL}/naverApi``]() : **네이버 검색(책) api** 를 이용하기 위한 기본 경로
* [``{HOST_URL}/user``]() : **유저 클라이언트** 기능과 관련된 기본 경로 경로
* [``{HOST_URL}/manage``]() : **관리자 클라이언트** 기능과 관련된 기본 경로 경로
* [``{HOST_URL}/github``]() : **Github oauth**를 이용하기 위한 기본 경로
* [``{HOST_URL}/request``]() : **희망도서 요청** 관련 기능에 대한 기본 경로
* [``{HOST_URL}/users``]() : **유저 관리** 관련 기능에 대한 기본 경로

## Schema
모든 api call 은 https 를 통하며, 모든 데이터는 JSON 형식으로 주고 받습니다.
