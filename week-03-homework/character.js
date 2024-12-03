function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class GameCharacter {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.str = 1;
    this.health = 100;
  }

  attack() {
    const random = randomNumber(1, 10);
    const damage = random * this.str;
    console.log(`${this.name}가 ${damage}를 입힙니다!`);
  }

  heal() {
    const random = randomNumber(50, 100);
    this.health += random;
    console.log(`${random}만큼 회복되어서 ${this.health}가 되었습니다.`);
  }

  levelUp() {
    const randomStr = randomNumber(1, 3);
    const randomHealth = randomNumber(50, 100);
    this.level += 1;
    this.str += randomStr;
    this.health += randomHealth;
    console.log(`레벨업 했습니다!`);
  }
}

const newCharacter = new GameCharacter("새로운 용사");
console.log(newCharacter);
newCharacter.attack();
newCharacter.heal();
console.log(newCharacter);
newCharacter.levelUp();
console.log(newCharacter);

const findTreasure = new Promise((resolve, reject) => {
  const random = randomNumber(1,100);
  setTimeout(() => {
    if (random <= 10) resolve("축하합니다! 황금 보물을 발견했습니다!");
    else reject("보물을 찾는 데 실패했습니다. 다시 시도하세요.");
  }, 3000);
});

findTreasure
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(findTreasure);

async function findingTreasure() {
  try {
    const result = await findTreasure;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

findingTreasure()
