# Git Subtree를 이용한 Heroku 배포 방법

## 1단계: 서버 전용 브랜치 생성

```bash
# 프로젝트 루트에서 실행
git subtree push --prefix=server origin heroku-server
```

만약 `heroku-server` 브랜치가 없다면 먼저 생성:

```bash
# server 폴더만을 포함한 새 브랜치 생성
git subtree push --prefix=server origin heroku-server
```

## 2단계: Heroku에서 브랜치 변경

1. Heroku Dashboard → Deploy 탭
2. Manual deploy 섹션에서 브랜치를 `heroku-server`로 변경
3. Deploy Branch 클릭

## 3단계: 향후 업데이트 시

서버 코드를 수정한 후:

```bash
# 메인 브랜치에 커밋
git add .
git commit -m "Update server code"
git push origin main

# 서버 브랜치 업데이트
git subtree push --prefix=server origin heroku-server
```

그 다음 Heroku에서 다시 배포하면 됩니다.
