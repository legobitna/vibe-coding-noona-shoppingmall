# 쇼핑몰 데모 서버

이 프로젝트는 Node.js, Express, MongoDB(Mongoose)를 사용한 쇼핑몰 데모 서버입니다.

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 아래와 같이 작성하세요:

```
MONGO_URI=mongodb://localhost:27017/shoping-mall-demo
PORT=5000
```

### 3. 서버 실행

```bash
node index.js
```

## 폴더 구조

- `index.js`: 서버 진입점 파일

## 주요 기술 스택

- Node.js
- Express
- MongoDB (Mongoose)
