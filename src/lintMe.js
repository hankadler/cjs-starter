/* file to test eslint rules on */

const { dirname, join, resolve } = require("path");

console.log(dirname(__filename));
console.log(resolve(__dirname, ".."));
console.log(join("foo", "bar"));

const obj = {
  one: 1,
  two: 2,
  three: 3
};

const arr = [
  1,
  2,
  3
];

const { one, two } = obj;

const [uno, dos] = arr;

const func = (arg1, arg2, arg3, arg4) => {
  console.log({
    arg1,
    arg2,
    arg3,
    arg4
  });
};

func(one, two, uno, dos);

func({
  one,
  two,
  uno,
  dos
});
