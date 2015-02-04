'use strict';

function fb(n) {
  var first = 0,
    second = 1,
    next,
    count = 2,
    result = [first, second];

  if (n < 2)
    return "No way, Jose!";

  while (count++ < n) {
    next = first + second;
    first = second;
    second = next;
    result.push(next);
  }

  return result;
}

/*
# 6
2 < 6
next = 1
first = 1;
second = 1
[0, 1, 1]

3 < 6
next = 2
first = 1
second = 2
[0, 1, 1, 2]

4 < 6
next = 3
first = 2
second = 3
[0, 1, 1, 2, 3]

5 < 6
next = 5
first = 3
second = 5
[0, 1, 1, 2, 3, 5]
*/
