function showImage(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

  console.log("Hello, Jose")

  function openCodeWindow(exerciseNumber) {
    var code = "";
  
    switch (exerciseNumber) {
      case 1:
        code = "console.log('Código del ejercicio 1');";
        break;
      case 2:
        code = "console.log('Código del ejercicio 2');";
        break;
      case 3:
        code = "console.log('Código del ejercicio 3');";
        break;
      case 4:
        code = "console.log('Código del ejercicio 4');";
        break;
      case 5:
        code = "console.log('Código del ejercicio 5');";
        break;
      default:
        code = "No se encontró el ejercicio.";
    }
  
    var estimateWindow = window.open("", "", "width=725,height=680");
    estimateWindow.document.write("<pre>" + code + "</pre>");
    estimateWindow.document.close();
  }
  
  