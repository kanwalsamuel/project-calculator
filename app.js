let inputB0x = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(event) => {

        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inputB0x.value = string;}
            
         else if(event.target.innerHTML == 'AC'){
            string = '';
           inputB0x.value = string;}

           else if(event.target.innerHTML == '='){
            string = eval(string);
            inputB0x.value = string;}

            else if(event.target.innerHTML == '%'){
                string = eval(string);
                inputB0x.value = string;}
    


           


         
        
        
        else{
            
            string += event.target.innerHTML;
            inputB0x.value = string;}

            
            

        
        
 
    }
        


    )});

;



    

       
        


     

    


