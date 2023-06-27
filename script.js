let count=0;
const value=document.getElementById('value');
const btns=document.querySelectorAll('.btns');

btns.forEach(function (btn){
  btn.addEventListener('click',function(e){
    const styles=e.currentTarget.classList
    if(styles.contains('decrease')){
      count--;
    }if(styles.contains('increase')){
      count++;
    }else{
      count=0;
    }
    if(count>0){
      value.style.color='green';
    }if(count<0){
      value.style.color=`red`
    }else{
      value.style.color='black'
    }
  })
})