alert('hello world');

/*
function calculer()
{
    let nb1 =Number(document.getElementById("nb1").value);
    let nb2 =Number(document.getElementById("nb2").value);
   document.getElementById("res").value = nb1+nb2
}
*/
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

function calculer()
{
    let valeur =document.getElementById("res_screen").value ;

    let N1 ="";
    let N2="";
    let operation ;
let i ;
i=0;
let j ;



    while (i<valeur.length)
    {
       if(valeur[i]!='+')
       {
        N1+=valeur[i];
       }
        if(valeur[i]==='+')
        {
            for(j=i+1;j<valeur.length;j++)
            {
                N2+=valeur[j];
            }
            break;
        }
        i++;
    }
 
    
    
    let resultat =Number(N1)+Number(N2);
    document.getElementById("res_screen").value = Number(resultat) ;


}