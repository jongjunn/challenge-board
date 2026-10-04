// 대시보드 데이터 — 이 파일 하나가 원본. Codex·Claude 둘 다 여기만 고친다.
// 규칙: `window.BOARD = ` 뒤는 순수 JSON (따옴표 필수, 마지막 쉼표 금지).
// 고치면 updated 날짜를 바꾸고 log 맨 위에 한 줄 추가.
window.BOARD = {
  "meta": {
    "channel": "박종준",
    "tagline": "되고 싶던 삶, 회사 가기 전에 한 번은 제대로 해본다.",
    "start": "100만원",
    "goal": "순자산 10억",
    "phase": "preseason",
    "day1": "",
    "updated": "2026-10-05"
  },
  "ledger": {
    "net_worth": null,
    "adsense_pledge": 0,
    "note": "프리시즌 — Day 1부터 집계"
  },
  "preseason": [
    { "item": "채널·SNS 계정 개설", "done": false },
    { "item": "프로필·채널 아트·소개문구 통일", "done": false },
    { "item": "1화 대본·촬영 계획 확정", "done": false },
    { "item": "촬영·녹음·편집 워크플로 1회 테스트", "done": false },
    { "item": "장부·카운터·시작/종료 카드 템플릿", "done": false },
    { "item": "Day 1 공개 자산 목록 작성", "done": false },
    { "item": "이사·졸업·알바 종료 일정 확정", "done": false },
    { "item": "공식 Day 1 확정", "done": false }
  ],
  "projects": [
    {
      "id": "pitchlens",
      "no": "사업 #2",
      "name": "PitchLens",
      "what": "유소년 풋살 아카데미 경기 영상 → 분석 리포트 (폰 1대 코너 촬영)",
      "status": "waiting",
      "stages": ["엔진·웹 MVP", "원장님 테스트 영상", "폴더 자동 처리", "첫 리포트 발송", "유료 전환·판정"],
      "current": 1,
      "next": "프리시즌 중 추가 진행 없음 · Day 1 이후 테스트 영상부터 재개",
      "due": "",
      "card": { "question": "아카데미가 경기 분석 리포트에 돈을 낼까?", "deadline": "Day 1 후 확정", "kill": "Day 1 후 확정" },
      "result": null
    },
    {
      "id": "coinbot",
      "no": "파이프라인",
      "name": "코인 자동매매 봇",
      "what": "바이낸스 현물 BTC 추세 봇 + 데모 선물 봇 (내 돈 실험)",
      "status": "active",
      "stages": ["전략 검증", "데모 운용", "맥미니 배포", "실전 전환"],
      "current": 1,
      "next": "매일 09:07 기록 누적 · 손절폭 넓은 코인은 진입금 줄여 손실 1%로 맞출지 결정",
      "due": "",
      "card": null,
      "result": null,
      "metric": { "label": "데모 선물 지갑", "value": "4,973 USDT", "sub": "시작 4,985 · 10/1~10/4" },
      "series": [
        { "date": "2026-10-01", "value": 4985.13 },
        { "date": "2026-10-02", "value": 4958.36 },
        { "date": "2026-10-03", "value": 4954.30 },
        { "date": "2026-10-04", "value": 4973.47 }
      ]
    },
    {
      "id": "shorts",
      "no": "사업 후보",
      "name": "숏폼 → 쿠팡 제휴",
      "what": "직접 찍은 상품 사진으로 쇼츠 자동 생성 + 제휴 링크",
      "status": "waiting",
      "stages": ["조사", "파이프라인 구현", "실상품 5개 등록", "2주 실측", "판정"],
      "current": 2,
      "next": "Day 1 이후 2주 실측 시즌으로 진행",
      "due": "",
      "card": { "question": "쇼츠 제휴로 시간당 최저시급 이상 나올까?", "deadline": "실측 시작 +14일", "kill": "2주 순이익이 시간당 최저시급 미만" },
      "result": null
    },
    {
      "id": "tokenusage",
      "no": "사망 선고 #1",
      "name": "Token Usage",
      "what": "메뉴바 AI 사용량 앱 — 완성했지만 판매 포기",
      "status": "dead",
      "stages": ["스펙", "구현", "내 맥 실행", "판매 판단"],
      "current": 3,
      "next": "〈사망 선고 #1〉 영상 소재로 정리",
      "due": "",
      "card": null,
      "result": { "spent": "0원", "hours": "미집계", "revenue": "0원", "verdict": "사망", "reason": "무료 경쟁작이 이미 있고, 나라도 돈 안 냄" }
    },
    {
      "id": "brand",
      "no": "채널",
      "name": "채널 기획 — 사업 실록",
      "what": "포지셔닝·BM 확정, 1화 대본 정리",
      "status": "active",
      "stages": ["포지셔닝·BM", "프리시즌 실행계획", "1화 실제 대본", "채널·계정 세팅", "제작 테스트"],
      "current": 1,
      "next": "사용할 SNS·프로필 사진 방향·1화 촬영 톤·보유 장비 확정",
      "due": "",
      "card": null,
      "result": null
    }
  ],
  "docs": [
    { "folder": "기획 문서", "files": [
      { "title": "프리시즌 운영 기준", "path": "00_프리시즌_운영기준.md" },
      { "title": "기획 확정본 · 1화", "path": "01_기획_확정본_1화.md" },
      { "title": "숏폼 제휴 조사", "path": "02_숏폼_제휴_파이프라인_조사.md" },
      { "title": "포지셔닝 · BM", "path": "03_포지셔닝_BM_확정안.md" },
      { "title": "프리시즌 실행계획", "path": "04_프리시즌_실행계획.md" }
    ]},
    { "folder": "리서치", "files": [
      { "title": "국내 벤치마크 계정", "path": "research/codex_kr_accounts.md" }
    ]},
    { "folder": "운영", "files": [
      { "title": "프로젝트 지도", "path": "claude_project/00_프로젝트_지도.md" },
      { "title": "작업 규칙 (AGENTS)", "path": "AGENTS.md" }
    ]}
  ],
  "log": [
    { "date": "2026-10-05", "who": "Codex", "text": "프리시즌 실행계획 구체화 · PitchLens는 Day 1까지 대기 · 구독자 투표 삭제" },
    { "date": "2026-10-05", "who": "Claude", "text": "대시보드를 폴더 파일(dashboard/data.js) 하나로 통합" },
    { "date": "2026-10-04", "who": "Codex", "text": "프리시즌 운영 기준 작성 · 12/31 마감 삭제 → Day 1부터 365일" },
    { "date": "2026-10-04", "who": "Claude", "text": "포지셔닝 v3 — 사업 실록, 강의 1년 금지" },
    { "date": "2026-10-01", "who": "박종준", "text": "Token Usage 판매 포기 결정" }
  ]
}
