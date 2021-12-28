# sigtime

돌연변이 시그니처와 유전자 발현량의 시계열 연관 분석 도구

```
돌연변이 시그니처와 유전자 발현량의 시계열 연관 분석 프레임워크
유지원, 윤정환, 조겨리 ｜한국정보과학회
```

## sigtime-server

분석도구는 웹 형태로 구현되었으며, 서버(백엔드) 파트 입니다.

### Dependencies

- Node.js >= 14

```
    "axios": "^0.21.1",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "express-async-handler": "^1.1.4",
    "helmet": "^4.6.0",
    "moment-timezone": "^0.5.33",
    "mongoose": "^5.12.10",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "uuid": "^8.3.2",
    "winston": "^3.3.3",
    "winston-daily-rotate-file": "^4.5.5"
```

### How to Use

```
.env-helper 파일 참고하여 .env 파일 작성

npm i
or
yarn

npm run dev
```
