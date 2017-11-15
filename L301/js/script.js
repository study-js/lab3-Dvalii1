var sheyvana= prompt("შეიყვანე რიცხვი");
var arasworia = sheyvana.indexOf("რეკლამა") == -1 && sheyvana.indexOf("მარკეტინგი") == -1 && sheyvana.indexOf("ვირუსი") == -1;

if(arasworia){
    alert ("სწორია");


}
else {
    alert("არასწორია!!!");
}