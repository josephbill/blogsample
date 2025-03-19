document.addEventListener("DOMContentLoaded" , function () {
    // global variable 
    const API_URL = "http://localhost:3000/task"

    // get :: fetch data from api 
    async function fetchTasks() {
        //  this variable holds a reference to the response from the api 
        const response = await fetch(API_URL)
        console.log(JSON.stringify(response))
        
        try{
             // convert the respomse to a json string with promise states 
            const tasks = await response.json()
            console.log(tasks)
            document.getElementById("taskList").innerHTML = tasks.map(task => {
                return `<li>
                   ${task.text} - ${task.completed}
                   <button onclick="toggleTask(${task.id}, ${task.completed})">Completed</button>
                   <button onclick="deleteTask(${task.id})">Delete</button>
                
                </li>`
            }).join("")
            // using dom we populate tasks to the empty ul element  
        }catch(error){
             console.error(error)
        }   


    }

            // toogle  // a function to update the task title  // use dom to update the button text for the edit 
            // true : green color ,  // completed false: red color , not complete
            async function toggleTask(id, completed) {
                await fetch(`${API_URL}/${id}`, {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({ completed: !completed})
                }); 
        
                fetchTasks();
            }

    // delete 
    async function deleteTask(id) {
        await fetch(`${API_URL}/${id}`, {method: "DELETE"}); 
        fetchTasks(); 
    }

    // expose toggle and delete globally 
    // adding props to the window object 
    window.toggleTask = toggleTask
    window.deleteTask = deleteTask



    //listening to the add
     const btnsubmit = document.getElementById("addTask")
     btnsubmit.addEventListener("click", addTask)
    // add 
    async function addTask() {
        //alert("clicked")
        const taskInput = document.getElementById("taskInput")
        // validating my input 
        if(!taskInput.value.trim()) return;

        // post fetch 
        // how can the id be auto-incremented  ? 
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({  text: taskInput.value, completed: false   })
        });
        // event to show post has gone through or use dom to display an element with the msg for success or failure  
        taskInput.value = ""
        // call the fetch task 
        fetchTasks();

    }

// on page load also run fetch tasks
    fetchTasks();

})

