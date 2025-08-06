# 쇼핑몰 데모 배포 가이드

이 가이드는 GitHub을 통해 Vercel (클라이언트)과 Heroku (서버)에 배포하는 방법을 설명합니다.

## 🚀 배포 준비

### 1. 프로젝트 구조

```
shoping-mall-demo/
├── client/          # 프론트엔드 (React + Vite)
└── server/          # 백엔드 (Node.js + Express)
```

### 2. 필요한 서비스 계정

- [GitHub](https://github.com) 계정
- [Vercel](https://vercel.com) 계정 (GitHub으로 로그인 권장)
- [Heroku](https://heroku.com) 계정 (GitHub으로 로그인 권장)
- [MongoDB Atlas](https://cloud.mongodb.com) 계정 (데이터베이스)

---

## 📱 단계 1: GitHub 저장소 준비

### 1.1 GitHub 저장소 생성

1. GitHub에서 새 저장소 생성
2. 저장소명: `shoping-mall-demo` (또는 원하는 이름)
3. Public 또는 Private 선택

### 1.2 코드 푸시

```bash
# 프로젝트 루트에서 실행
git init
git add .
git commit -m "Initial commit: Shopping mall demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shoping-mall-demo.git
git push -u origin main
```

---

## 🗄️ 단계 2: MongoDB Atlas 설정

### 2.1 클러스터 생성

1. [MongoDB Atlas](https://cloud.mongodb.com)에 로그인
2. "Create a New Cluster" 선택
3. 무료 티어 (M0) 선택
4. 클러스터 이름 설정

### 2.2 데이터베이스 사용자 생성

1. Database Access → Add New Database User
2. 사용자명과 비밀번호 설정 (기록해두세요!)
3. Built-in Role: "Read and write to any database" 선택

### 2.3 네트워크 접근 허용

1. Network Access → Add IP Address
2. "Allow Access from Anywhere" (0.0.0.0/0) 선택
3. 또는 특정 IP만 허용

### 2.4 연결 문자열 복사

1. Clusters → Connect → Connect your application
2. Node.js 드라이버 선택
3. 연결 문자열 복사 (나중에 사용)

---

## 🌐 단계 3: 서버 (Heroku) 배포

### 3.1 Heroku 앱 생성

1. [Heroku Dashboard](https://dashboard.heroku.com)에 로그인
2. "New" → "Create new app" 클릭
3. 앱 이름 입력 (예: `your-shopping-mall-server`)
4. 지역 선택 (United States 권장)

### 3.2 GitHub 연결

1. Deploy 탭으로 이동
2. Deployment method에서 "GitHub" 선택
3. GitHub 계정 연결 (처음이면 인증 필요)
4. 저장소 검색 후 연결

### 3.3 환경 변수 설정

1. Settings 탭 → Config Vars 클릭
2. 다음 환경 변수 추가:

```
NODE_ENV=production
MONGODB_ATLAS_URL=mongodb+srv://username:password@cluster.xxx.mongodb.net/shoping-mall-demo
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=https://your-vercel-app.vercel.app
```

**중요**:

- `MONGODB_ATLAS_URL`에는 위에서 복사한 MongoDB 연결 문자열 사용
- `<password>`를 실제 데이터베이스 사용자 비밀번호로 변경
- `JWT_SECRET`은 복잡한 랜덤 문자열로 설정
- `FRONTEND_URL`은 나중에 Vercel 배포 후 업데이트

### 3.4 배포 실행

1. Deploy 탭으로 돌아가기
2. Manual deploy에서 `main` 브랜치 선택
3. "Deploy Branch" 클릭
4. 빌드 로그 확인
5. "View" 버튼으로 배포된 서버 확인

---

## 💻 단계 4: 클라이언트 (Vercel) 배포

### 4.1 Vercel 프로젝트 생성

1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 Import

### 4.2 프로젝트 설정

1. 저장소 선택: `your-username/shoping-mall-demo`
2. Framework Preset: "Vite" 자동 감지
3. Root Directory: `client` 입력 (**중요!**)
4. Build and Output Settings:
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)

### 4.3 환경 변수 설정

1. Environment Variables 섹션에서 추가:

```
VITE_API_URL=https://your-shopping-mall-server.herokuapp.com
```

**중요**: Heroku에서 배포된 서버 URL로 변경

### 4.4 배포 실행

1. "Deploy" 버튼 클릭
2. 빌드 로그 확인
3. 성공 시 자동으로 도메인 할당

---

## 🔧 단계 5: 배포 후 설정

### 5.1 Heroku 환경 변수 업데이트

1. Heroku Dashboard → Settings → Config Vars
2. `FRONTEND_URL`을 Vercel에서 할당받은 도메인으로 업데이트:

```
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### 5.2 도메인 확인

- **프론트엔드**: `https://your-vercel-app.vercel.app`
- **백엔드**: `https://your-shopping-mall-server.herokuapp.com`

### 5.3 기능 테스트

1. 프론트엔드 사이트 접속
2. 회원가입/로그인 테스트
3. 상품 조회 테스트
4. 장바구니 기능 테스트

---

## 🔄 단계 6: 자동 배포 설정

### 6.1 Vercel 자동 배포

1. Vercel Dashboard → 프로젝트 설정
2. Git Integration에서 "Auto-deploy" 활성화
3. `main` 브랜치 푸시 시 자동 배포

### 6.2 Heroku 자동 배포

1. Heroku Dashboard → Deploy 탭
2. "Enable Automatic Deploys" 활성화
3. `main` 브랜치 선택

---

## 🛠️ 트러블슈팅

### 일반적인 문제들

#### 1. CORS 에러

- Heroku Config Vars에서 `FRONTEND_URL` 확인
- 정확한 Vercel 도메인으로 설정되었는지 확인

#### 2. 데이터베이스 연결 실패

- MongoDB Atlas 연결 문자열 확인
- 네트워크 접근 설정 (0.0.0.0/0) 확인
- 사용자 권한 확인

#### 3. 빌드 실패

- Node.js 버전 확인 (18.0.0 이상)
- package.json의 engines 필드 확인

#### 4. 환경 변수 문제

- 클라이언트: `VITE_` 접두사 사용
- 서버: Heroku Config Vars 정확히 설정

### 로그 확인 방법

#### Heroku 로그

```bash
# Heroku CLI 설치 후
heroku logs --tail -a your-app-name
```

#### Vercel 로그

1. Vercel Dashboard → 프로젝트 → Functions 탭
2. 빌드 로그는 Deployments 탭에서 확인

---

## 📚 추가 리소스

- [Vercel 문서](https://vercel.com/docs)
- [Heroku 문서](https://devcenter.heroku.com/)
- [MongoDB Atlas 문서](https://docs.atlas.mongodb.com/)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)

---

## 💡 팁

1. **환경 분리**: 개발용과 프로덕션용 MongoDB 데이터베이스를 분리하세요
2. **보안**: JWT_SECRET은 복잡한 랜덤 문자열로 설정하세요
3. **모니터링**: Heroku와 Vercel의 Analytics를 활용하세요
4. **백업**: MongoDB Atlas의 자동 백업 기능을 활용하세요

배포 과정에서 문제가 발생하면 각 플랫폼의 로그를 확인하고, 환경 변수 설정을 다시 검토해보세요!
