function lcs(string1, string2) {
  var lcsLengthArray = [],
      lcsDirectionArray = [],
      i,
      j,
      strLen1 = string1.length + 1,
      strLen2 = string2.length + 1;
  
  // 初始化
  for (i = 0; i < strLen1; i++) {
    lcsLengthArray[i] = [];
    lcsDirectionArray[i] = [];
    for (j = 0; j < strLen2; j++) {
      lcsLengthArray[i][j] = 0;
      lcsDirectionArray[i][j] = 'init';
    }
  }

  for (i = 1; i < strLen1; i++) {
    for (j = 1; j < strLen2; j++) {
      if (string1[i - 1] === string2[j - 1]) {  // 如果相等,　取左上角的值加1
        lcsLengthArray[i][j] = lcsLengthArray[i - 1][j - 1] + 1;
        lcsDirectionArray[i][j] = 'leftTop';
      } else {  // 否则,　取左边和上边的最大值, 若相等,　取上边值
        if (lcsLengthArray[i - 1][j] >= lcsLengthArray[i][j - 1]) {  
          lcsLengthArray[i][j] = lcsLengthArray[i - 1][j];
          lcsDirectionArray[i][j] = 'top';
        } else {
          lcsLengthArray[i][j] = lcsLengthArray[i][j - 1];
          lcsDirectionArray[i][j] = 'left';
        }
      }
    }
  }

  return {
    length: lcsLengthArray[strLen1 - 1][strLen2 - 1],
    subString: function() {
      return lcsSubString(lcsDirectionArray, string1, strLen1 - 1, strLen2 - 1);
    }
  };
}

function lcsSubString(derection, string1, strLen1, strLen2) {
  if (strLen1 === 0 || strLen2 === 0) {
    return;
  }
  if (derection[strLen1][strLen2] === 'leftTop') {
    lcsSubString(derection, string1, strLen1 - 1, strLen2 - 1);
    console.log(string1[strLen1-1]);
  } else if (derection[strLen1][strLen2] === 'top') {
    lcsSubString(derection, string1, strLen1 - 1, strLen2);
  } else if (derection[strLen1][strLen2] === 'left') {
    lcsSubString(derection, string1, strLen1, strLen2 - 1);
  }
}



console.log(lcs('ABPRA', 'APR').length);
lcs('ABPRA', 'APR').subString();
