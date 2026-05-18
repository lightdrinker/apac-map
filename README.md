# APAC 국가 지도

APAC 33개국을 권역별로 탐색할 수 있는 인터랙티브 지도. D3.js 기반 단일 페이지 정적 사이트.

## 기능

- 5개 권역 필터: 동아시아 · 동남아시아 · 남아시아 · 오세아니아 · 중앙아시아
- D3 줌/팬, 권역별 자동 확대
- 국가 클릭 시 바텀시트: 국기, 한/영 이름, **한국과의 실시간 시차**, 주요 도시
- 모바일 대응

## 로컬 실행

정적 파일이므로 어떤 정적 서버에서도 동작. 예:

```bash
python -m http.server 8000
# 또는
npx serve .
```

`file://` 로 바로 열면 `geo.json` fetch가 CORS로 막힐 수 있으니 서버 띄워서 보기.

## 파일 구조

- `index.html` — 마크업 + 스타일 + PWA 메타
- `app.js` — 데이터 + D3 렌더링 + 인터랙션
- `geo.json` — APAC 국가 폴리곤 (간소화된 GeoJSON)
- `manifest.json` — PWA 매니페스트
- `icon.svg` / `icons/*.png` — 앱 아이콘 (홈 화면 추가용)
- `scripts/generate-icons.mjs` — SVG → PNG 변환 (수정 시 `npm i sharp` 후 실행)

## PWA로 설치

iOS Safari: 공유 → "홈 화면에 추가"
Android Chrome: 메뉴 → "홈 화면에 추가" 또는 자동 프롬프트

## 배포

Vercel에 정적 사이트로 배포. 빌드 스텝 없음. `main` 브랜치 푸시 시 자동 재배포.
