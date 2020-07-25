function show()
{
let table=parseInt(document.querySelector('#table').value);
let end=parseInt(document.querySelector('#end').value);
document.querySelector("#table1").innerHTML="TABLE OF "+table+"<br>";
for(let i=1;i<=end;i++)
{
    var a=document.querySelector('#here');
    //2 x 1 = 2

    //yaass
    a.innerHTML += table+ " x "+ i+ " = " + (i*table) +"<br/>";
}
}
