# 임시 CORS 해결책 (테스트용만)

만약 위 방법들이 작동하지 않으면, 임시로 다음과 같이 수정:

```javascript
// server/index.js에서 CORS 설정을 임시로 변경
app.use(
  cors({
    origin: true, // 모든 도메인 허용 (개발/테스트용만!)
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

⚠️ **주의**: 이 설정은 보안상 위험하므로 테스트 후 반드시 되돌려야 합니다!
