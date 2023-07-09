function redirect() {
    var select = document.getElementById("moduleSelect");
    var option = select.options[select.selectedIndex].value;
    if (option === "1") {
        window.location.href = "configuracion.html";
    } else if (option === "2") {
        window.location.href = "menuprofesores.html";
    }
}

const row = document.getElementById('row');

for (let i = 0; i < 20; i++) {
  const espacioNegro = document.createElement('div');
  espacioNegro.className = 'col-md-1 espacios-negros';
  const nombreUsuario = document.createElement('div');
  nombreUsuario.innerText = 'Usu' + (i + 1);
  nombreUsuario.style.fontWeight = 'bold';
  nombreUsuario.style.color = 'white';
  espacioNegro.appendChild(nombreUsuario);
  row.appendChild(espacioNegro);
}
