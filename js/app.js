document.querySelector('#generate-names').addEventListener('submit',loadNames);
function loadNames(e) {
    e.preventDefault();
    //read the variables from the form
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url ='https://uinames.com/api/?';
   if (origin !=="");
   {
       //we appemd the value selected to the url;

       url +=`region=${origin}&` 
   }
   console.log(url);
   if(genre !==''){
       url +=`gender=${genre}&`
   }
   console.log(url);

    if (amount !== '') {
        url +=`amount=${amount}&`
    }
    console.log(url); 
//create ajax call 
 const xhr = new XMLHttpRequest();
 //we open the connection 
 xhr.open('GET',url,true);
 //execute the function
 xhr.onload=function () {
     if(this.status === 200){
         const names = JSON.parse(this.responseText);
        //  console.log(names);
let html = '<h2> generated Names </h2>'
html +='<ul class = "list">';
names.forEach(function(name){
    html+=`
<li> ${ name.name}<li/>`
})




document.querySelector('#result').innerHTML = html;
     }  

     
 }
 //send the request
 xhr.send();
}