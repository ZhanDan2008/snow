//setTimeout Принимает callback и  время в милисекундах.
//После перезагрузки сайта, пройдет 2000 милисекунд прежде чем выполнится функция внутрb
// setTimeout(()=>{
//     console.log("Hello in timeout")
// }, 2000)
// console.log("hello,world!")





//Работае как timeOut , но много раз через заданный интервал
// setInterval(()=>{
//     console.log("Hello, Interval")
// },1500)






// new  это ключевое слово при создании объектов.  
// let xhr = new XMLHttpRequest()
// //пишем какой метод использовать.Их всего 5: "GET"(получение данных с сервера),
//"POST"(отправление данных на сервер),"DELETE"(удаление),"PUT"(полное обновление),"PUTCH"(частичное обновление)
//Ззесб мы используем "GET".И ссылку того что мы берем
// xhr.open("GET","https://pokeapi.co/api/v2/pokemon/")
// xhr.send()
// xhr.onload = function(){
//     console.log(JSON.parse(xhr.response))
// }






// FETCH
// let res = fetch("https://pokeapi.co/api/v2/pokemon/")
// console.log(res)





// const pr = new Promise((resolve,reject) => {
//     let a = 1 + 1
//     if (a === 2){
//         resolve('Success')
//     }
//     else{
//         reject("Fail...")
//     }
// })





// pr.then((message) => {
//     console.log("This is in the then - " + message)
// })





//Работает только при ошибке в Promise
// pr.catch((message)=>{
//     console.log("This is in the Catch - "+message)
// })


// pr.finally(() =>(
//     console.log("I'm gonna work anyway - ")
// ))






//  -----------         FETCH           -----------------------


// let res = fetch("https://pokeapi.co/api/v2/pokemon/").then(data => 
// data.json()    ).then(pocemons => {console.log(pocemons)})




//---------------------------    WORK    -------------------------------


// let link = fetch("https://rickandmortyapi.com/api/character")
// let arr = link.then(result => {return result.json()}).then(ret => {
//     arr.results    
// });





// function get_all_users(){
//     let arr = []
//     let work = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res =>{
//     let id = 0; res.forEach(item => {
//         id += 1
//         arr.push(item)
//         document.querySelector(".cards").innerHTML += 
//         `<div class="card" id="${id}" style="width: 18rem;">
        
//         <div class="card-body">
//           <h5 class="card-title">${item.name}</h5>
//           <p class="card-text">${item.phone}</p>
//           <a href="#" class="btn btn-primary">${item.website}</a>
//         </div>
//       </div>`
//     })

// });return arr}
// document.querySelector(".d-grid").addEventListener("click", (event) =>{
// get_all_users()
// })

// console.log(get_all_users())

//.then(res => {
//     return res.json()

// }).then(result => {
//     result.forEach(item => {

//     })
// })


// async function getUsers() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     data.forEach((user) => {
//       user.innerHTML += `
//               <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${user.name}</h5>
//           <p class="card-text">Phone: ${user.phone}</p>
//           <p class="card-text">Website: ${user.website}</p>
//         </div>
//       </div>
//               `;
//     });
//   }
// getUsers()




// ---------------------    WORK     -----------------------------
let body = document.body
function get_ran_num(){
    return Math.floor(Math.random() * 1300)
}
function create_part(){
    let img = document.createElement("img")
    img.setAttribute("src","./снежинка.png")
    img.style.left = `${get_ran_num()}px`
    img.style.width = '9px'
    img.style.position = "absolute";
    img.style.borderRadius = '50px'
    document.body.appendChild(img)
    return img
}

setInterval (()=> {
    let snowflake = create_part()
    let c = 0
    setInterval(()=>{
        snowflake.style.top = `${c++}px`
       
        if (c>500){
            document.body.removeChild(snowflake)
        }
    },10)
},500)