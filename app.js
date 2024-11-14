let todoWrapper = document.querySelector('.todo-wrapper');
let completedWrapper = document.querySelector('.compelited-wrapper');
const form = document.querySelector("form");

const todo = [
    { id: 1, title: "Study React fundamentals", status: "todo" },
    { id: 2, title: "Complete JavaScript exercises", status: "todo" },
    { id: 3, title: "Read about CSS Flexbox", status: "todo" },
    { id: 4, title: "Build a to-do list app", status: "todo" },
    { id: 5, title: "Practice coding problems", status: "todo" }
];

const render = () => {
    completedWrapper.textContent = "";
    todoWrapper.textContent = "";
    todo.forEach((e) => {
        if (e.status === "complete") {
            const li = document.createElement("li");
            li.classList.add("todo-complited");
            const p = document.createElement("p");
            p.textContent = e.title;
            li.appendChild(p);

            completedWrapper.prepend(li);
        } else {
            todoWrapper.innerHTML += `
                <li class="todo">
                    <p>${e.title}</p>
                    <div>
                        <button style="border: none;" class="btn1">
                            <img src="./Vector (5).png" alt="">
                        </button>
                        <button style="border: none;" class="btn1">
                            <img src="./TrashSimple.png" alt="">
                        </button>
                    </div>
                </li>
            `;
        }
    });
};
render();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target[0].value.trim();
    if (value) {
        todo.push({
            title: value,
            status: "todo",
            id: new Date().getTime(),
        });
        e.target[0].value = ""; 
        render();
    }
});
