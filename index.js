document.addEventListener('DOMContentLoaded',function(){
    var menu = document.querySelector(".menu");
    trangthai = 'tren';
    imgbanner = document.querySelector(".imgbanner");
    containt = document.querySelector(".containt")
    nenden = document.querySelector(".nenden");
    menumobi = document.querySelector(".menumobi");
    button = document.querySelector(".button");
    img = document.getElementById("sp");
    console.log(img);
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 200){
            if(trangthai == 'tren'){
                menu.classList.add("thunho");
                menu.classList.remove("phongto");
                trangthai == 'duoi';
                button.classList.add("fix")
            }
        }else{
            menu.classList.remove("thunho");
            button.classList.remove("fix")
            menu.classList.add("phongto");
            trangthai == 'tren';
        }
    });
    
    x = document.querySelector(".nenden .x");
    button.onclick = function(){
        nenden.classList.toggle("xuathien");
        menumobi.classList.toggle("dichphai");
        containt.classList.toggle("fix-back");
    }
    x.onclick = function(){
        nenden.classList.remove("xuathien");
        menumobi.classList.remove("dichphai");
        containt.classList.remove("fix-back");
    }
},false)