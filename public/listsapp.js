function getrandom() {
  const x = Math.floor(Math.random() * 256);
  if (x < 100) return 150;
  return x;
}
for (let i = 0; i < document.querySelectorAll("li").length; i++) {
  const color = `rgb(
        ${getrandom()},${getrandom()},${getrandom()}
  )`;
  document.querySelectorAll("li")[i].style.background = color;
}
