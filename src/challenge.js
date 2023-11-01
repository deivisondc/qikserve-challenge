Write your custom filter implementation

  I want to reuse it like this:

    const result = [1, 2, 3].qikserveFilter((element) => {

      return element === 1;
    });

    console.log(result); // 1

// ----

Array.prototype.qikserveFilter = function (callback) {
  let newArray = [];

  this.forEach((element) => {
    if (callback(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

const result = [1, 2, 3].qikserveFilter((element) => {
  return element > 1;
});

console.log("result", result);
