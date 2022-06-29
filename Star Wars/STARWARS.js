let btn1 = document.querySelector('#btn1');
let outPut=document.querySelector('#outPut')




const getCharacter=function()
{
let inPut=document.getElementById('inPut').value;
let MyUri='https://www.swapi.tech/api/people/?name='+ inPut;
console.log(MyUri);
fetch(MyUri, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
   
.then(res => res.json())
    .then(data => {
        outPut.innerHTML = `${data.result[0].properties.height}`;
        console.log(data) ;

  
    outPut.innerHTML = `${data.result[0].properties.name}  height: ${data.result[0].properties.height},  weight: ${data.result[0].properties.mass},  gender: ${data.result[0].properties.gender},  hair color: ${data.result[0].properties.hair_color}` ;
    
    }).catch(err => console.log('Error ' + err));
 


}

btn1.addEventListener('click', getCharacter)



//.result[0].properties.heigh


