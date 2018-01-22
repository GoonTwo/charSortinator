const strings = {
  unsorted: [],
  sorted: [],
}

const sortlexicographically = (req, res, next) => {
  strings.unsorted.push(req.body.string);
  const sorted = req.body.string.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  strings.sorted.push(sorted);
  req.strings = strings;
  next();
}

module.exports = sortlexicographically;