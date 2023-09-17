const endDate = 'October 01, 2023 12:00 AM';
const date1 = new Date('2023-10-01');
const inputs = document.querySelectorAll('input');
document.getElementById('title').innerHTML = endDate;

const clock = () => {
  const end = new Date(endDate);
  const dateNow = new Date();
  const diff = (date1 - dateNow) / 1000;
  if(diff<0) return;
  // convert into days
  inputs[0].value  = Math.floor(diff / 3600 / 24);
  //convert into hrs
  inputs[1].value=(Math.floor(diff / 3600 / 24));
  // convert into min
  inputs[2].value=(Math.floor(diff/60)%60);
  // convert into seconds
  inputs[3].value=(Math.floor(diff%60));
  console.log((Math.floor(diff/60)%60));
  console.log(Math.floor(diff/3600)%24);

};

clock();

setInterval(()=>{
    clock()},
    1000
)
