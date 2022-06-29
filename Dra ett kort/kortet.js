const btn=document.querySelector('#btn1');
const resultat=document.querySelector('#resultat')

const drakort= function()
{
fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
.then(res=> res.json())
.then(data =>{console.log(data);
    
   resultat.innerHTML= `${data.cards[0].value} of ${data.cards[0].suit}`
   let image = document. createElement('img')
    
image.src =`${data.cards[0].images.png}` 
   resultat.appendChild(image)
   //
    
  

}).catch(err=> console.log(err));
}





btn.addEventListener('click', drakort);

