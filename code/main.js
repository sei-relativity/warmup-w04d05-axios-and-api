// If you get stuck go to axiox documentations
// https://github.com/axios/axios
function getAllStudents() {
    axios({
        method: 'GET',
        url: 'https://sei-relativity-ruh.herokuapp.com/developers'
      })
        .then(response => {
            addToPage(response.data)
            // console.log(response.data)
        }).catch(err => console.log(err))
}

function addToPage(data) {
    const main = document.querySelector("#main")
    main.innerHTML = '<ul id="listStudents"></ul>'
     data.forEach((student) =>{
        console.log(student.name)
        const li = document.createElement('li');
        li.innerText = student.name;
        document.querySelector(`#main ul`).appendChild(li)
    })
    
}

function addStudent(name) {
   
}


const form = document.querySelector("#form-n")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector("#name").value
    // console.log(name)
    // addStudent(name)
    axios({
        method: 'POST',
        url: 'https://sei-relativity-ruh.herokuapp.com/developers',
        data: {
            name: name
        }
      })
        .then( res => {
            console.log(res)
            console.log("post success")
            getAllStudents()

        }).catch(err => {
            console.log("erererererer")
            console.log(err)
        
        })
})

getAllStudents()