# 우테코 프리코스 2주차 - 자동차 경주

## 기능 목록 초안

### [게임 로직 기능]

1. [O] 0에서 9 사이에 랜덤 값 추출 기능 - makeRandomNumber()
2. [ ] 각 자동차에게 랜덤 값을 부여하는 기능(각 리스트에 추가)
3. [O] 추출한 랜덤 값이 4이상일 경우만 전진 - advanceIfOverFour()
4. [O] 자동차 이름과 '-'.repeat(전진 횟수)로 출력 메시지 리턴 기능 - printAdvanceResult()
5. [O] 각각 전진한 횟수 누적값 저장 기능 - advanceIfOverFour()
6. [O] 게임 완료 시 누적값을 비교하며 최종 우승자 체크 기능 - GameWinner 클래스
7. [O] 전진 횟수 리셋 기능 - resetAdvance()

### [입력 기능] - Input.js

1. [O] 경주할 자동차 이름 입력 - Input.text(GAME.CAR_NAME_INPUT)
2. [O] 시도할 횟수 입력 - Input.text(GAME.TRY_COUNT_INPUT)

### [출력 기능] - Output.js

1. [O] 게임 시작 문구 출력 - '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)' - GAME.CAR_NAME_INPUT
2. [O] 시도할 횟수 질문 출력 - '시도할 횟수는 몇 회인가요?' - GAME.TRY_COUNT_INPUT
3. [O] 시도할 횟수 입력받고 경주 시작 문구 출력 - '실행 결과' - GAME.RESULT
4. [O] 각 차수별 경주 실행 결과 출력 - 차수별 결과와 자동차 이름 함께 출력 - printAdvanceResult()
5. [O] 게임 완료 후 우승자 안내 문구 출력 - 여러 명일 경우 쉼표(,) 사용 - GAME.WINNER + printWinners()
6. [O] 잘못된 값을 입력하면 에러 문구 출력 - '[ERROR] 에러 원인 메시지' - PREFIX

### [검증 기능]

- 플레이어 입력에 대한 예외

1. [O] 자동차 이름을 입력하지 않은 경우 - checkIfEmpty()
2. [O] 콤마 사이에 공백 또는 빈 문자열일 경우(형식에 어긋날 경우) - checkIfInvalid()
3. [O] 중복되는 자동차 이름이 존재할 경우 - checkIfDuplicate()
4. [ ] 자동차 이름을 쉼표(,)로 구분하지 않았을 경우
5. [O] 자동차 이름이 6자 이상일 경우(공백 포함) - checkIfOverLength()
6. [O] 시도 횟수를 입력하지 않은 경우 - checkIfInvalid()
7. [O] 시도 횟수가 0보다 큰 값이 아닌 경우 - checkIfZeroOrLess()

## 1주차 공동 피드백(커밋할 때마다 지켰는지 확인하기!)

- [ ] 요구사항을 정확히 준수한다.
- [ ] 커밋 메시지를 의미있게 작성한다.
- [ ] git을 통해 관리할 자원에 대해서도 고려한다.
- [ ] pull request를 보내기 전 브랜치를 확인한다.
- [ ] pr을 한 번 작성했다면 닫지 말고 추가 커밋을 한다.
- [ ] 변수명, 함수명, 클래스명 등 이름을 통해 의도를 드러낸다.(축약하지 않는다.)
- [ ] 공백도 코딩 컨벤션이다.(공백 라인을 의미있게 사용한다.)
- [ ] space와 tab을 혼용하지 않는다.
- [ ] 의미없는 주석을 달지 않는다.
- [ ] eslint와 prettier를 활용하자.
- [ ] 최종 제출하는 코드에서 End Of Line을 확인한다.
- [ ] 불필요한 console.log를 남기지 않는다.
- [ ] js에서 제공하는 api를 적극 활용한다.
