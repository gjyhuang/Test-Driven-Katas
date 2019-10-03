const wrap = (line, maxLen) => {
  let str = '';
  for (let i = 1; i <= line.length; i++) {
    str += line[i-1];
    if (!(i % maxLen) && i !== line.length) {
      str += '\n';
    }
  }
  return str;
}
module.exports = wrap;
