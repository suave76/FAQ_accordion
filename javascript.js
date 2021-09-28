
for(var i=0;i<5;i++){
    document.querySelectorAll(".queries")[i].addEventListener("click",function(){
        var x=document.querySelectorAll(".queries");
        for(var j=0;j<5;j++){
            if(document.querySelectorAll(".queries")[j] != this){
                document.querySelectorAll("p")[j].classList.remove("toggle");
                document.querySelectorAll("h2")[j].classList.remove("active");
                document.querySelectorAll(".arrow")[j].classList.remove("up_arrow");
            }
        }
        if(this.querySelector("p").classList.contains("toggle")){
            console.log("in if");
            this.querySelector("p").classList.remove("toggle");
            this.querySelector("h2").classList.remove("active");
            this.querySelector(".arrow").classList.remove("up_arrow");
        }
        else{
            console.log("in else");
            this.querySelector("p").classList.add("toggle");
            this.querySelector("h2").classList.add("active");
            this.querySelector(".arrow").classList.add("up_arrow");
        }
    
    });
}


