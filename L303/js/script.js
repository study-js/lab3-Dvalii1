var sheyvana = prompt("შეიყვანეთ ფასი: ");
var lari = sheyvana.indexOf("l") == -1;
var dolari = sheyvana.indexOf("$") == -1;


if (sheyvana == lari) {
    alert(sheyvana * 2.6);
}
else if (dolari) {
    alert(sheyvana / 2.6);
}
else {
    alert("არასწორია!");
}