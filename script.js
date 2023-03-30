    const form = document.querySelector("form");
    const inp = document.querySelector("form .input-form");
    const btn = document.querySelector(".btn");
    const listUl = document.querySelector(".botom-list-todo");
    const todosfltr = document.querySelector(".todos");
    
window.addEventListener('load', () => {

   

    document.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = inp.value;

        if (!(task)) {
            alert("it is empty");
            return;
        }

        const listli = document.createElement("li");
        listli.classList.add("botom-listli");
        listUl.style.display = "block";

        const liP = document.createElement("input");
        liP.classList.add("liP");
        liP.type = "text";
        liP.value = task;
        liP.setAttribute("readonly", "readonly")
        listli.appendChild(liP);

        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box");

        const delbtn = document.createElement("i");
        delbtn.classList.add("i1");
        delbtn.innerHTML = ` <i class="fa fa-trash"> </i> `;

        const rightbtn = document.createElement("i");
        rightbtn.classList.add("i2");
        rightbtn.innerHTML = ` <i class="fa fa-check"> </i> `;

        const editbtn = document.createElement("i");
        editbtn.classList.add("i3");
        editbtn.innerHTML = ` <i class="fa fa-edit"> </i> `;

        iconBox.appendChild(delbtn);
        iconBox.appendChild(editbtn);
        iconBox.appendChild(rightbtn);
        listli.appendChild(iconBox);

        listUl.appendChild(listli);

        inp.value = "";

        delbtn.addEventListener("click", () => {
            listUl.removeChild(listli);
        });

        function toggleRightBtn(e) {
            listli.classList.toggle("rightbtnTogl");
            iconBox.style.background = "unset"; 
            // listli.style.color = " #8ead85";
        }
        rightbtn.addEventListener("click", toggleRightBtn);

        editbtn.addEventListener("click", () => {

            if (editbtn.innerHTML.toLocaleLowerCase() == ` <i class="fa fa-edit"> </i> `) {
                 
                listli.style.backgroundColor = "#abedf1c6";
                iconBox.style.background = "transparent";
                editbtn.style.background = "#abedf1c6";
                rightbtn.style.background = "#abedf1c6";
                delbtn.style.background = "#abedf1c6";
                 
                liP.focus();
                liP.removeAttribute("readonly");
                
                editbtn.innerHTML = ` <i class="fa fa-save"> </i> `;
            } else {
                liP.setAttribute("readonly", "readonly");
                editbtn.innerHTML = ` <i class="fa fa-edit"> </i> `;

                listli.style.backgroundColor = "#fce283";
                iconBox.style.background = "fce283";
                editbtn.style.background = "#ffd000";
                rightbtn.style.background = "#ffd000";
                delbtn.style.background = "#ffd000";
                
            }

// end editbtn.addEventListener("click"
        })
        
      
        const todos = listUl.childNodes;
        const item = e.target;
        // const todo = listli.classList;
        const t = item.parentElement;

function selectTodofilter(e) {
    
    todos.forEach(function(t) {
            console.log(t);
             console.log(todos);

        switch(e.target.value) {
            case "all": 
                listli.style.display = "flex";
                break;
            case "dont":
                if(!t.classList.contains('rightbtnTogl')) {
                    listli.style.display = "flex";
                } else {
                    listli.style.display = "none";
                }
                break;
            case "done": 
                if(t.classList.contains('rightbtnTogl')) {
                    listli.style.display = "flex";
                } else {
                    listli.style.display = "none";
                }
                break;
            
        }
        //   console.log(todo);
        //      console.log(todos);
    });
        }  
        
todosfltr.addEventListener("change", selectTodofilter );

 //ADDING TO LOCAL STORAGE 
    // saveLocalTodos(inp.value);

//end document.addEventListener("submit"
    });



// function saveLocalTodos(todo) {
//     let todos;
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     }

//     document.addEventListener("DOMContentLoaded", getLocalTodos);

//     function getLocalTodos() {
//         let todos;
//         if (localStorage.getItem("todos") === null) {
//             todos = [];
//         } else {
//             todos = JSON.parse(localStorage.getItem("todos"));
//         }
//     }
 



//end window.addEventListener('load'
});


