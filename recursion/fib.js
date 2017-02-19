// 递归求解, 时间复杂度: Ｏ(2^n)
function recursionFib(n) {
  return 2 > n ? n : recursionFib(n - 1) + recursionFib(n - 2);
}

// 动态规划, 时间复杂度: Ｏ(n), 空间复杂度: O(1)
function dynamicProgrammingFib(n) {
  var f = 0,
      g = 1;

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    while(1 < n) {
      g = g + f;
      f = g - f;
      n--;
    }
    return g;
  }
}

var len = 10,
    i;

for (i = 0; i < len; i++) {
  console.log(`recursionFib(${i}): ${recursionFib(i)}`);
}

for (i = 0; i < len; i++) {
  console.log(`dynamicProgrammingFib(${i}): ${dynamicProgrammingFib(i)}`);
}
