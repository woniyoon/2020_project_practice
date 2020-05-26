window.onload = function(){

    var btn = document.getElementById("add");
    console.log("!!!!!");


    


    btn.addEventListener("click", function(event){
        btn.classList.toggle('active');
        btn.style.opacity = "20%";

        setInterval(function(){
            btn.classList.toggle('active');
            btn.style.opacity = 1;
        }, 100);
        

    });


    
};
