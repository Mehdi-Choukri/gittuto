alert('hello world');


function calculer()
{
    let nb1 =Number(document.getElementById("nb1").value);
    let nb2 =Number(document.getElementById("nb2").value);
   document.getElementById("res").value = nb1+nb2
}
function multiplier()
{
    let nb1 =Number(document.getElementById("nbr1").value);
    let nb2 =Number(document.getElementById("nbr2").value);
   document.getElementById("res1").value = nb1*nb2 ;
}

function ecrire (N)
{
    document.getElementById("res_screen").value += N ;
}