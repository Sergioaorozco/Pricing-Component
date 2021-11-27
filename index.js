  let change = document.getElementById('switch');
  let toggle = document.getElementById('toggletext');
  let discount = document.querySelector ('.discount');

  function myrange (newVal){
    
    if(change.checked){
      toggle.innerHTML=`$ ${newVal * ((100 - 25)/100)}`;
      discount.style.display = "inline-block";
    }else{
      toggle.innerHTML= `$ ${newVal}`;
      discount.style.display = "none";
    }
  }