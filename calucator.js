function add()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)+parseInt(y)

    document.getElementById("output").value=z
    
    
}
function sub()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)-parseInt(y)

    document.getElementById("output").value=z
}
function muli()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)*parseInt(y)

    document.getElementById("output").value=z
}
function div()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)/parseInt(y)

    document.getElementById("output").value=z
}
function clr()
{
    document.getElementById("input1").value=""
    document.getElementById("input2").value=""
    document.getElementById("output").value=""
}
