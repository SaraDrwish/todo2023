// var decleration

///////////////////////////////////////////////////////////////////////

//functions and events

// document.addEventListener("DOMContentLaoded", getTodos);

// btn.addEventListener("click", add);

// listUl.addEventListener("click", del);

// selectTodo.addEventListener("change", filtr);


///////////////////////////////////////////////////////////////////////

// declare functions


//1

// function add(evnt) {
//    evnt.preventDefault();
//     const listli = document.createElement("li");
//     listli.innerText = inp.value;
//     listli.classList.add("botom-listli")

//     saveLocaltodos(inp.value);


// }



window.addEventListener('load', () => {

    const form = document.querySelector("form");
    const inp = document.querySelector("form .input-form");
    const btn = document.querySelector(".btn");
    const listUl = document.querySelector(".botom-list-todo");
    const selectTodo = document.querySelector(".todos");

    // const listli = document.querySelector(".botom-listli");  
    // const liP = document.querySelector(".liP")


    document.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = inp.value;

        if ( !(task) ) {
            alert("it is empty");
            return;
        }
        // else {
        //     console.log("success");
        // }

        // listUl.style.display = "block";
        // liP.innerText = task;
        const listli = document.createElement("li");
        listli.classList.add("botom-listli");
        listUl.style.display = "block";

      

        const liP = document.createElement("input");
        liP.classList.add("liP");
        liP.type = "text";
        liP.value = task;
        liP.setAttribute("readonly" , "readonly")
        // liP.innerText = task;
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
            // listli.style.display = "none";
            listUl.removeChild(listli);
        });

        rightbtn.addEventListener("click", () => {

            if (rightbtn.innerHTML.toLocaleLowerCase() == ` <i class="fa fa-check"> </i> `) {
                 listli.style.backgroundColor = "#b8ceb2dc";
                iconBox.style.background= "transparent";
                editbtn.style.background = "#b8ceb2dc";
                rightbtn.style.background = "#b8ceb2dc";
                delbtn.style.background = "#b8ceb2dc";

            }else{
                listli.style.backgroundColor = "#fce283";
                iconBox.style.background= "fce283";
                editbtn.style.background = "#ffd000";
                rightbtn.style.background = "#ffd000";
                delbtn.style.background = "#ffd000";
            }
                
 
        });

         editbtn.addEventListener("click", ( ) => {

             if (editbtn.innerHTML.toLocaleLowerCase() == ` <i class="fa fa-edit"> </i> `) {
                 
                listli.style.backgroundColor = "#abedf1c6";
                iconBox.style.background= "transparent";
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
                iconBox.style.background= "fce283";
                editbtn.style.background = "#ffd000";
                rightbtn.style.background = "#ffd000";
                delbtn.style.background = "#ffd000";
                
             }
 
            

         })
        
        
       
        

    });

})



