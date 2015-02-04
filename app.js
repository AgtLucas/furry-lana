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
