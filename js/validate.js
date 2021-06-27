const btn=document.getElementById("btn");
const btn_return=document.getElementById("btn_return");
const contain=document.getElementById("about");
const textResult=document.getElementById("text_result");
const result=  document.getElementById("result");
let nums=document.getElementsByClassName("num");
let red = document.querySelectorAll(".num");
var find = /^[0-9]*$/;
let cadena ="";
let arrayGuardar=[];
let array1=[];
let array2=[];
let array3=[];
let array4=[];
let array5=[];
let array6=[];
let array7=[];
let array8=[];
let i;
let total;
let numberCredit=[];


for(var j = 0; j < red.length; j++){
  red[j].addEventListener('click',function()
  {
    red[0].classList.remove("red");
    red[1].classList.remove("red");
    red[2].classList.remove("red");
    red[3].classList.remove("red");
  });
}





btn.addEventListener('click', () =>{

turnRed();

if(cadena.length>=16){
     if (cadena.match(find))
     {

       if (cadena !="")
       {


      get_values();
      even_odd();
      multiplier_2();
      add_digits();
      concatenate();
      add_all();
      editcredit();
      validater();
      }
   }
}


   });



   btn_return.addEventListener('click', () =>{
      return_validater();
          });



function turnRed()
{

  cadena = "";
  for (var i = 0; i < nums.length; i++)
  {
    cadena+=nums[i].value;
  }


  for (var i = 0; i < red.length; i++)
  {
    red[i].classList.add("red");
  }
}




    function get_values(){

    for (i = 0; i < nums.length; i++) {
        arrayGuardar[i] = nums[i].value;

        }
     array1= arrayGuardar.join('').split('').map((i) => Number(i));

    }

    function even_odd()
    {

      for (i = 0; i < array1.length; i++) {
         if(i % 2 === 0) {
             array2.push(array1[i]);
         }
         else{
            array3.push(array1[i]);
         }

    }


   }


   function multiplier_2()
   {
      for (i = 0; i < array2.length; i++) {
         array4.push(array2[i] * 2);
         if(array4[i]>=9)
         {
            array5.push(array4[i]);

         }
         else
         {
            array7.push(array4[i]);
         }
        }

   }



   function add_digits()
   {

      for (i = 0; i < array5.length; i++) {
       array6.push(array5[i].toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0)) ;

        }


   }

function concatenate()
{

   array8=array3.concat(array7,array6)

}
function add_all()
{

total = array8.reduce((a, b) => Number(a) + Number(b), 0);



}
function editcredit()
{


CreditNumber=arrayGuardar.join("-").replace(/.(?=.{4,}$)/g, '#');


}

function validater()
{

   const valid ="Credit card "+CreditNumber+" Number is Valid";
   const notvalid ="Credit card "+CreditNumber+" Number is  not Valid";
 result.classList.add('show');
 contain.classList.add('hide')

if((total%10)===0)
{

textResult.innerHTML=valid;



}
else{
   textResult.innerHTML=notvalid;

}

}

       function return_validater()
          {


            if (contain.classList.contains('hide') ){

             contain.classList.add('show');
             contain.classList.remove('hide')
             result.classList.remove('show')
             result.classList.add('hide')
             } else {
               result.classList.add('show');
               result.classList.remove('hide');
               contain.classList.remove('show');
               contain.classList.add('hide')
             }
             location.reload();



          }
