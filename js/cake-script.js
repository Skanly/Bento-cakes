let BtnCalc = document.querySelector('.btnCalc');
BtnCalc.onclick = myFunction;
function myFunction(){
    let x = document.getElementById("myNumber").value,
    select = document.getElementById('select_'),
    value = select.options[select.selectedIndex].value;
    document.querySelector(".result").innerHTML = x * value;
}