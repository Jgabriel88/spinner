const spinnerCharacters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n']
function spinner() {
  let delay = 300
  for (const char of spinnerCharacters) {
    delay += 200
    setTimeout(function () {
      process.stdout.write(char)
    }, delay);
  }
}
spinner()