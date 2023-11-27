// Liste 5 objetos nativos

// Object - String - Array - Function - Boolean

// Liste 5 objetos do browser

//DOMList - HTMLCollection - NodeList - Element - Document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("existe");
} else {
  console.log("nao existe");
}

if (typeof document.webkitHidden !== "undefined") {
  console.log("existe");
} else {
  console.log("nao existe");
}
