let header = document.querySelector('.info_disclosure');
let arrow = document.querySelector('.fas.fa-angle-up');
console.log(arrow)
let botinfo = document.querySelector('.bot_info');
botinfo.style.visibility = 'hidden';
header.addEventListener('click', function(){
  if(botinfo.style.visibility == 'hidden'){
 
      botinfo.style.visibility = 'visible';
  } else{
    botinfo.style.visibility = 'hidden';
  }
})


console.log(botinfo)
