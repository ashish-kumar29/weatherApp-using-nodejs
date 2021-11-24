const submitBtn= document.getElementById("submitBtn");
const cityName= document.getElementById("cityName");
const city_name=document.getElementById("city_name");
// const temp=document.getElementById("temp");
const temp_val=document.getElementById("temp_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d= new Date();
let date=d.getDate();
let month=months[d.getMonth()];
let day=days[d.getDay()];
document.getElementById('day').innerText=day;
document.getElementById('today_date').innerText=`${date} ${month}`
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="Please write the name before search";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e836d6f64bae7940ab7cf57e63c1010a`
            const response = await fetch(url);
            const data= await response.json();
            const arrData= [data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            // temp.innerText=arrData[0].main.temp;
            temp_val.innerText=arrData[0].main.temp;
            console.log(arrData)
            let val=arrData[0].weather[0].main-273;
            temp_status.innerText=val;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' fa-lg style='color: yellow;'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' fa-lg style='color: bue;'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' fa-lg style='color: white;'></i>";
            }else{
                temp_status.innerHTML="<i class='fas fa-sun' fa-lg style='color: yellow;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText="please enter the city name properly";
            datahide.classList.add('data_hide');
        }
        
    }
   }
submitBtn.addEventListener('click',getInfo);









