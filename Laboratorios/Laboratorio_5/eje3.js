function instance(number, arr) {
  let count = 0;
  arr.forEach(element => {
    if (element == number) count++;
  });
  return count;
}
