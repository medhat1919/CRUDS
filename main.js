 let  title=document.getElementById('title')
 let prices=document.getElementById('prices')
 let taxes=document.getElementById('taxes')
 let ads=document.getElementById('ads')
 let discount=document.getElementById('discount')
 let total=document.getElementById('total')
 let count=document.getElementById('count')
 let cat=document.getElementById('cat')
 let submit=document.getElementById('submit')
 let mood='create'
 let med;


 function gettotal(){
if(prices.value != ''){
let result=(+prices.value+ +taxes.value+ +ads.value)- +discount.value

total.innerHTML=result
total.style.background='#040'
}else{
    total.innerHTML=''
    total.style.background='#a00d02'
}


}

let dataproduct;

if(localStorage.product != null){
    dataproduct=JSON.parse(localStorage.product)
}else{ dataproduct=[]}



submit.onclick =function(){
 let newpro={
tite:title.value,
prices:prices.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
cat:cat.value
 }
 if(mood==='create'){
  if(newpro.count>1){
    for(let i=0;i<newpro.count;i++){
        dataproduct.push(newpro)
    }
  }else{dataproduct.push(newpro)}}
  else{
    dataproduct[  med  ]=newpro;
    mood='create';
    submit.innerHTML='create'
    count.style.display='block'
  }
 cleardata()

read()

 }



function cleardata(){
title.value='';
prices.value='';
taxes.value='';
ads.value='';
discount.value='';
total.innerHTML='';
count.value='';
cat.value=''



}

function read(){
    let table='';
for(let i=0;i<dataproduct.length;i++ ){
table +=`
<tr >
<td>${i} </td>
<td> ${dataproduct[i].tite} </td>
<td>${dataproduct[i].prices}</td>
<td>${dataproduct[i].taxes}</td>
<td>${dataproduct[i].ads}</td>
<td>${dataproduct[i].discount}</td>
<td>${dataproduct[i].total}</td>
<td>${dataproduct[i].cat}</td>
<td><button onclick="up(${i})" id="update">update</button>
 </td>
<td><button onclick="deletedata(${i})  " id="delete">delete</button>
 </td>

</tr>
`



}



    document.getElementById('tbody').innerHTML=table;
    let del=document.getElementById('deleteall');

    if(dataproduct.length>0){
del.innerHTML=`<button onclick="deleteall()"> delete all</button>`
    }else{

dataproduct.innerHTML=''

    }
}read()

function deletedata(i){

    dataproduct.splice(i,1);
    localStorage.product=JSON.stringify(dataproduct);

read()
}

function deleteall(){ 
    localStorage.clear();
    dataproduct.splice(0)
    read()
}

function up(i){
title.value=dataproduct[i].tite
prices.value=dataproduct[i].prices
ads.value=dataproduct[i].ads
discount.value=dataproduct[i].discount
cat.value=dataproduct[i].cat
taxes.value=dataproduct[i].taxes
count.style.display='none'
submit.innerHTML='update'
mood='update'
med=i
gettotal()
}


let searchmood='title'

function get(id){
    let search =document.getElementById('search')

if(id=='searchb'){
    searchmood='title'
    search.focus()
search.Placeholder='search by title'
}else{
    searchmood='category';
    search.focus();
    search.Placeholder='search by category'

}

}

function geet(value){
    table='';
if (searchmood=="title"){
for(let i=0;i< dataproduct.length;i++){
    if (dataproduct[i].title.includes(value)){
table +=`
<tr >
<td>${i} </td>
<td> ${dataproduct[i].tite} </td>
<td>${dataproduct[i].prices}</td>
<td>${dataproduct[i].taxes}</td>
<td>${dataproduct[i].ads}</td>
<td>${dataproduct[i].discount}</td>
<td>${dataproduct[i].total}</td>
<td>${dataproduct[i].cat}</td>
<td><button onclick="up(${i})" id="update">update</button>
 </td>
<td><button onclick="deletedata(${i})  " id="delete">delete</button>
 </td>

</tr>
`

    }  


}

}else{}



}