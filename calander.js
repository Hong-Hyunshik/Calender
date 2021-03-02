const table=document.querySelector('table');
const CalenderDate=document.querySelector(".js-date");
const nowCalender=document.querySelector('.nowCalender');

const today=new Date();
  const year=today.getFullYear();
  const month=today.getMonth();
  const date=today.getDate();

const leftbutton=document.getElementById('leftbutton'),
    rightbutton=document.getElementById('rightbutton');

const DAY="day";
const SUN="sun";
const SAT="sat";
const LD="lostday";
const TD="today";
const SW="showing";

var fakeYear=year;
var fakeMonth=month;

function createDate(thatyear,thatmonth){
  nowCalender.innerText=`${thatyear}년 ${thatmonth+1}월 달력`;
  const delCalender=document.querySelectorAll('.showing');
  if (delCalender!==null){
    for(let i=0;i<delCalender.length;i++){
      delCalender[i].remove();
    }
  }
  const firstDay=new Date(thatyear,thatmonth,1).getDate();
  let firstDate=new Date(thatyear,thatmonth,1).getDay();
  const lastDay=new Date(thatyear,thatmonth,0).getDate();
  const lastMonthDay=new Date(thatyear,thatmonth+1,0).getDate();
  var number=1;
  for (let weekcounter=0;weekcounter<6;weekcounter++){
    const tr=document.createElement('tr');
    tr.classList.add(SW)
    if (number===1){
      for (let datecounter=0;datecounter<firstDate;datecounter++){
        const forBalnk=document.createElement('td');
        forBalnk.innerText="";
        tr.appendChild(forBalnk);
      }
    }
    for (let daycounter=firstDate;daycounter<7;daycounter++){
      if (number<=lastMonthDay){
        const td=document.createElement('td');
        td.innerText=number;
        td.classList.add(DAY);
        if (daycounter===0){
          td.classList.add(SUN);
        }
        if (daycounter===6){
          td.classList.add(SAT);
        }
        if (thatyear<year){
          td.classList.add(LD);
        }
        else if (thatmonth<month){
          td.classList.add(LD);
        }
        else if (year===thatyear&&month===thatmonth&&number<date){
          td.classList.add(LD);
        }
        else if (year===thatyear&&month===thatmonth&&number===date){
          td.classList.add(TD);
          td.innerText=`${number}(오늘!)`
        }
        td.id=`${thatyear}.${thatmonth+1}.${number}`;
        tr.appendChild(td);
        number=number+1;
      }

    }
    firstDate=0;
    table.appendChild(tr);
  }
}



function todayDate(){
  var options = { weekday: 'long'};
  CalenderDate.innerText=`오늘의 날짜 : ${year}년 ${month+1}월 ${date}일 `;
}


function buttonClicker(){
  leftbutton.addEventListener("click",handleleftButton);
  rightbutton.addEventListener("click",handlerightButton);
}

function handleleftButton(event){
  if (1<=fakeMonth && fakeMonth<=11){
    fakeMonth-=1;
  }
  else{
    fakeYear-=1;
    fakeMonth=11;
  }
  createDate(fakeYear,fakeMonth);
}

function handlerightButton(event){
  if (0<=fakeMonth && fakeMonth<=10){
    fakeMonth+=1;
  }
  else{
    fakeYear+=1;
    fakeMonth=0;
  }
  createDate(fakeYear,fakeMonth);
}

function winopen(){
  const ret=window.open('schedule.html',"scheduler","left=50,top=50,width=800,height=600");
  console.log('1');
  return ret;
}

function forTitle(text,id){
  const title=text.document;
  console.log(title);
  console.log('3');
}


async function clickhandler(event){
  const win=await winopen();
  const id=event.target.id;
  console.log('2');
  forTitle(win,id);

}

function click(){
  table.addEventListener("click",clickhandler);
}

function init(){
  buttonClicker();
  todayDate();
  createDate(year,month);
  click();
}

init();
