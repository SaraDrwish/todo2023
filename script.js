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

      

        const liP = document.createElement("p");
        liP.classList.add("liP");
        liP.innerText = task;
        listli.appendChild(liP);

        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box");

        const delbtn = document.createElement("i");
        delbtn.classList.add("i1");
        delbtn.innerHTML = ` <i class="fa fa-trash"> </i> `;

        const rightbtn = document.createElement("i");
        rightbtn.classList.add("i2");
        rightbtn.innerHTML = ` <i class="fa fa-check"> </i> `;


        iconBox.appendChild(delbtn);
        iconBox.appendChild(rightbtn);
        listli.appendChild(iconBox);


        listUl.appendChild(listli);

        inp.value = "";
        

    });

})



