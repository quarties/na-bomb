function getCurentFileName(){
    var pagePathName = window.location.pathname; 
    str = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
    return parseInt(str.substr(0,1)); 
}

$( document ).ready(function(){ 
 
    console.log(getCurentFileName());
    
    var license = "123";
    var key = "";
    var bond = "DD-AT-MS-1502";
    var loc = "";
    var abort = "";
    var isOn = 0; 
    var isOrbit = 0;
    var isLoc = 0;
    var container = document.querySelector('textarea');
    var anchor = document.querySelector('a');
    var systemPath = "c://Users//Dominik//Desktop//NA_bomb//";
    var func = "CHOOSE";
    var author = "Kurtz Korinokabe Software Combinat";
    var version = "v. 1-QRT-3-PROD";

    /*anchor.onclick = function() {
        anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(container.value);
        anchor.download = 'export.txt';
    };*/
    
    $("#current span").html(func);
    
    $("#count").hide();
    $("#menu").hide();
    $("#orbit").hide();
    $(".back").hide();
    $("#abort").hide();
    $("#404").hide();
    $("#error").hide();    
    
    $("body").append("<div class=\"version\"><p>"+author+"</p><p>"+version+"</p>");
    
    centerContent(); 
    
    $(".function").click(function(){
        $("#error").hide();    
        $("#menu").hide();
        $("#function").show();
        isLoc = 0;     
        isOrbit = 0;   
        centerContent();
    });
    
    $(".back").click(function() {
        $("#function").hide();
        $("#menu").show();
        centerContent();
        
    });
    
    $("input[type=number]").on('input', function(){
        $("#result").html( timeFall( $(this).val() ) );
    });
    
    $(".logout").click(function(){
        window.location.href = systemPath+"0.html";
    });
    
    $("input[name=loc]").keyup(function(){
        this.value = this.value.toUpperCase();
    });
    
    $(document).keypress(function(e) { 
            
        if(e.which == 13) {
            switch (getCurentFileName()) {  
                case 0:
                    var myObject;
                    myObject = new ActiveXObject("Scripting.FileSystemObject");
                    if(myObject.FileExists("f://license.txt")) {
                        key = myObject.OpenTextFile("f://license.txt", 1, true).ReadLine();
                        if (key == "normal")
                            window.location.href = systemPath+"1.1.html";
                        else if (key == "bond")
                            window.location.href = systemPath+"1.2.html"; 
                    } else    
                        window.location.href = systemPath+"8.html";
                    break;
                case 1: 
                    var pass = $("input[name=pass]").val().toUpperCase();
                    if ( pass == license )  
                        window.location.href = systemPath+"2.1.html"; 
                    else if ( pass == bond )          
                        window.location.href = systemPath+"2.2.html"; 
                    else
                        window.location.href = systemPath+"9.html"; 
                    break; 
                case 2:   
                    
                    loc = $("input[name=loc]").val();
                    if (loc == "") {
                        loc = $("input[name=velocity]").val(); 
                        if (timeFall(loc) == "ERROR") {
                            $("#error").show();
                            loc = "";
                        } else {     
                            isOrbit = 1;
                        }  
                        $("input[name=loc]").val("");
                        $("input[name=velocity]").val("");
                        
                    }     
                    if (isOn == 0 && loc != "") { 
                        $("#error").hide();    
                        $("#menu").hide();
                        if ( isOrbit == 1 ) {
                            $("#target").html( timeFall(loc) );
                        } else {
                            $("#target span").html(loc);
                        }   
                        isOn = 1;  
                        $("#count").show();      
                        loc = "";  
                    } 
                    
                    abort = $("input[name=abort]").val();
                    if ( abort == license || abort == bond && isOn == 1 ) {  
                        $("input[name=loc]").val("");
                        $("#count").hide(); 
                        $("input[name=abort]").val(""); 
                        abort = "";
                        if ( func == "TV-RADIO" || func == "AUTODESTRUCTION" ){
                            $("#function").show();
                        } else {
                            $("#menu").show();
                            $("#target").show();
                        }    
                        if ( isOrbit == 1 ) {
                            $("#target").html( "target: <span></span>" );
                            isOrbi = 0;
                        } 
                        $("#abort").hide();   
                        $("input[name=loc]").val("");
                        $("input[name=velocity]").val("");
                        isOn = 0;
                    }
                    
                    centerContent();  
                    break;
                case 8:
                    window.location.href = systemPath+"0.html";
                    break; 
                case 9:
                    window.location.href = systemPath+"1.1.html";
                    break;
                default:
                    window.location.href = systemPath+"8.html";
            }
            
        }
        
        if (isLoc == 0 && isOn == 0) {
        
        if (e.which == 76) {
            $("#L input").click(); 
        }       
        
        if (e.which == 67) {
            $("#C input").click();  
        }       
        
        if (e.which == 65) {
            $("#A input").click();  
        }    
        
        if (e.which == 83) {
            $("#S input").click();  
        }    
        
        if (e.which == 84) {
            $("#T input").click();  
        }    
        
        if (e.which == 68) {
            $("#D input").click();  
        } 
        
        }    
        
        if (isLoc == 1) {
        
        if (e.which == 70) {
            $(".function").click();  
        } 
        
        }
        
        if (isOn == 1) { 
        
        if (e.which == 82) {
            $(".key").click();  
        }
        
        }
        
    });
    
    
    
    $("label").click(function() {
        func = $(this).children(("input[name=func]")).val();
        $("#current span").html(func);
        $(this).children(("input[name=func]")).filter("[value="+func+"]").prop('checked', true);
        if ( func == "TV-RADIO" || func == "AUTODESTRUCTION" ) {
            $("#count").show();  
            $("#target").hide();
            isOn = 1;
        } else if ( func == "ORBIT" ) {
            $("#menu").show();
            $("#loc").hide();
            $("#orbit").show();    
            isLoc = 1;
            $("input[name=velocity]").val("");
            $("input[name=velocity]").focus();
        } else {
            $("#menu").show();
            $("#loc").show();
            $("#orbit").hide();  
            isLoc = 1;         
            $("input[name=loc]").focus(); 
        }
        $("#function").hide();
        $(".back").show();
        centerContent();
        
    });
    
    function  timeFall(x) {
        var m = 124000;
        var s = 8000000;
        var f;
        var result;
        if ( x < 0 || x > 2) {
            result = "ERROR";
        } else if ( x == 1 ) {
            result = "STAY";
        } else if ( x < 1) {
            f = 310000*(1-(x*x));
            result = Math.sqrt((m*s)/f);
            result = result / 60;
            result = Math.round(result);
            result = "Colision with earth after "+result+" minutes";
        } else { 
            f = 310000*((x*x)-1);
            result = Math.sqrt((m*s)/f);
            result = result / 60;
            result = Math.round(result);
            switch (x) {
                case 1.1:
                    result = "Colision with moon after"+result+" minutes";
                    break; 
                case 1.3:
                    result = "Colision with Mars after"+result+" minutes";
                    break;
                case 1.6:
                    result = "Colision with Venus after"+result+" minutes";
                    break;
                case 1.9:
                    result = "Colision with moon after"+result+" minutes";
                    break;
                default:
                    result = "Send into space"
            }
        } 
        return result;
    } 

});
