window.onload = function() {
    color();
    Zapalenie();    
    loadTxt();
    checkMediaQuery()
  
  };

function clickCounter()
{
    var anchor = document.querySelector('a');
    anchor.addEventListener('click',function(){
        fetch('link.php');
       
    })
}
clickCounter();

document.getElementById('btn1').addEventListener('click',loadTxt);

function loadTxt()
{
    fetch('count.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById('result').innerHTML = data ;
        function Zapalenie(res)
        {
            for(var i=0;i<res;i++)
                {
                    document.getElementsByClassName("logo1"+i)[0].style.opacity=1; 
                }
    
            if(res<40)
            {
                document.getElementsByClassName("logo1"+res)[0].style.opacity=1; 
            }else{
                alert("Chyba se postoisz :)");
            }
        }
        Zapalenie(data)
    })
}
//media remove Armchairs
function checkMediaQuery() {
   
    if (window.innerWidth < 500) {
  
      var thingToRemove = document.querySelectorAll(".mainArmchais2")[0];

      thingToRemove.parentNode.removeChild(thingToRemove);
    
    }
  }
  

  window.addEventListener('resize', checkMediaQuery)
  // end media remove Armchairs

function Zapalenie()
{
    fetch('count.txt')
    .then(function(response){ 
        return response.text();
    })
    .then(function(data)
    {
             if(res<40)
             {
                document.getElementsByClassName("logo1"+res)[0].style.opacity=1; 
          
            }else
            {
                alert("Chyba se postoisz :)");
            }
    })
}



function color()
{
    for(var i=0;i<40;i++)
    {
        let newImg= document.createElement("img");
        let logo = ("logo1"+i).toString();
   
        newImg.className=logo;
        newImg.setAttribute('src', 'Group25.svg')

        var insert = document.getElementById("armchairs21")
        insert.appendChild(newImg);
        document.getElementsByClassName(logo)[0].style.opacity=.3;
        
    }

}

  


///Dominik

function countdown(){

    var now = new Date();
    var eventDate = new Date(2022, 09, 01,11);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    
    var remTime = eventTime - currentTime;
    
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    d %= 30;
    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementsByClassName("window-cd-1-a")[0].textContent = d;
    document.getElementsByClassName("window-cd-2-b")[0].textContent = h;
    document.getElementsByClassName("window-cd-3-c")[0].textContent = m;
    if((m>=0 &m<=60) & s==0 )
    {
        document.getElementsByClassName("window-cd-3")[0].style.opacity=.1;
  
    }
    else
    {
        document.getElementsByClassName("window-cd-3")[0].style.opacity=1;
  
    }




    setTimeout(countdown, 1000);
}

countdown();