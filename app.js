const { fruits, money } = require("./fruits");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Say whaaaats?",
    e: "^^",
    T: "U",
  })
);

fruits.forEach((item) => {
  console.count(item);
});

console.log(money);
