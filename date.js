const today = document.querySelector(".clock-date");



function getDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const week = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat');


    const nowdate = new Date();
    const year = nowdate.getFullYear();
    const month = nowdate.getMonth();
    const date = nowdate.getDay();
    const todaydate = `${week[date]}day, ${monthNames[month]} ${date}th, ${year}`;
    today.innerText = todaydate;
}



function init(){
    getDate();
    
}
init();