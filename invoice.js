const date=new Date()
document.getElementById('datetime').innerText=date.toLocaleDateString()
document.getElementById('buyerbtn').addEventListener('click',function()
{
    const buyerField=document.getElementById('buyerfield')
    const buyerfieldvalue=buyerField.value
    document.getElementById('buyerinfo').innerText=buyerfieldvalue
    buyerField.value=''
})
function inputfield(idpass)
{
    const inputname=document.getElementById(idpass)  
    const inputnamevalue=inputname.value
    inputname.value=''
    return inputnamevalue;
     

}
document.getElementById('addbtn').addEventListener('click',function()
{
     const itemName=inputfield('itname');
      
     const itemPrice=inputfield('itprice');
     const itemQuantity=inputfield('itquantity');
     if(itemName=='' || itemPrice=='' ||itemQuantity =='')
     {
         alert('sory bro please fill up the form')
     }
     else{

     
     const total=itemPrice*itemQuantity
     const tr=document.createElement('tr')

     tr.innerHTML=` <tr>
     <th scope="row">${itemName}</th>
     <td>${itemPrice}</td>
     <td>${itemQuantity}</td>
     <td class="alltotal">${total}</td>
   </tr>`

   const tbody=document.getElementById('addinfo')
    tbody.appendChild(tr)
    let subtotal=0
    const alt=document.getElementsByClassName('alltotal')
    for(const at of alt)
    {
         subtotal+=parseFloat(at.innerText)
    }
    document.getElementById('sub-total').innerText=subtotal
  const tx=  document.getElementById('tax').innerText=(parseFloat(subtotal)*.2).toFixed(2)
  const altotal=document.getElementById('grand-total').innerText=parseInt((tx+subtotal))
  document.getElementById('taxalltotal').innerText=parseInt(altotal )

}
    
})