// 흐름제어
// 특정한 조건 -> 분기. 반복.

// 삼항 연산자. -> 값만. 분기. -> console.log(...)

// 반반의 확률로

console.log(Math.random() > 0.5 ? "당첨" : "당첨 아님"); // 값만.

// 조건에 따른 분기
// if (조건 boolean) { 블록 } // let, const.
if (Math.random() > 0.5) {
  console.log("우와 당첨이네요 진짜 부럽다");
  console.log("이 돈을 드리겠습니다");
  console.log("정말 정말 부럽네요");
}
// if (조건) { 블록 } else { 블록 }
if (Math.random() > 0.5) {
  console.log("우와 당첨이네요 진짜 부럽다");
  console.log("이 돈을 드리겠습니다");
  console.log("정말 정말 부럽네요");
} else {
  console.log("우와 탈락이시네요 진짜 안됐다");
  console.log("이 돈을 안 드리겠습니다");
  console.log("정말 정말 안됐네요");
}

// Math.random() // 0 이상 1 미만의 숫자.
// Math.random() * 6 // 0 이상 6 미만의 숫자.
// Math.random() * 6 + 1 // 1 이상 7 미만의 숫자.
const dice = Math.floor(Math.random() * 6 + 1);
console.log("주사위의 눈", dice);
if (dice >= 5) {
  console.log("승리!");
} else if (dice >= 3) {
  // 앞의 if가 처리 되고 나서 그 나머지의 상황에서만 작동하는 로직
  console.log("무승부!");
} else {
  console.log("패배!");
}
