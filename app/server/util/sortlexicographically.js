const sortlexicographically = (string) => {
  return string.split('').sort((a, b) => a - b).join('');
}