
fetch('https://www.abibliadigital.com.br/api/verses/nvi/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById("versiculo-biblico").innerText =
      `"${data.text}" — ${data.book.name} ${data.chapter}:${data.number}`;
  })
  .catch(() => {
    document.getElementById("versiculo-biblico").innerText = "Versículo indisponível.";
  });

function changeTheme(color) {
  const root = document.documentElement;
  const themes = {
    red: ['#c40000', '#111'],
    blue: ['#0077ff', '#0a1a2f'],
    green: ['#00c46a', '#0f2d1d'],
    purple: ['#8e00c4', '#1e112f']
  };
  const theme = themes[color];
  if (theme) {
    root.style.setProperty('--main-color', theme[0]);
    root.style.setProperty('--bg-color', theme[1]);
  }
}
