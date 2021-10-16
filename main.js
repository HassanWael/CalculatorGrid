
        var num1;
        var num2;
        var operat;
        var res;
    function myFunction(number) {
        document.getElementById("inputNumber").value+=number;

    }
  
    function Calculator(){
        num2= document.getElementById("inputNumber").value;
        res=eval(num1+operat+num2);
        document.getElementById("inputNumber").value=res;
    }
    
    function operator(op){
        num1= document.getElementById("inputNumber").value;
        document.getElementById("inputNumber").value=" "
        operat=op;
        
    }
    
