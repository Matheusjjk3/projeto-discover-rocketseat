function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //trocar o alt da imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar essa legenda ao alt
    img.setAttribute("alt", "Foto de Matheus Gonzaga com light mode")
  } else {
    //se tiver sem light mode, manter a legenda do alt normal
    img.setAttribute("alt", "Foto de Matheus Gonzaga sem light mode")
  }
}
