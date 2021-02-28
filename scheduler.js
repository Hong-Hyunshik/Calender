const table=document.querySelector('table');

function winopen(){
  const ret=window.open('schedule.html',"scheduler","left=50,top=50,width=800,height=600");
  return ret;
}

function forTitle(text,id){
  console.log(text);
  console.log(text.document);
  const title=text.document.querySelector('.js-title');
  title.innerText=id;
}

function clickhandler(event){
  event.preventDefault();
  const win=winopen();
  const id=event.target.id;
  forTitle(win,id);
}

function click(){
  table.addEventListener("click",clickhandler);
}

function init(){
  click();
}

init();
