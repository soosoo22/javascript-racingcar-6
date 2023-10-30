import Input from '../view/input';
import { GAME } from '../constants.js';
import RacingCarName from '../racingcargame/RacingCarName.js';

describe('게임 시작 문구', () => {
  test('경주할 자동차 이름을 입력하세요 메시지가 출력되는지 확인', async () => {
    // 모의(mock)를 사용하여 Input.text가 호출될 때 기대되는 값 반환
    const expectedMessage = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
    jest.spyOn(Input, 'text').mockResolvedValue(expectedMessage);

    const result = await RacingCarName.input();
    expect(result).toBe(expectedMessage);
  });

  test('시도할 횟수는 몇 회인가요 메시지가 출력되는지 확인', async () => {
    // 모의(mock)를 사용하여 Input.text가 호출될 때 기대되는 값 반환
    const expectedMessage = '시도할 횟수는 몇 회인가요?';
    jest.spyOn(Input, 'text').mockResolvedValue(expectedMessage);

    const result = await RacingCarName.input();
    expect(result).toBe(expectedMessage);
  });
});