window.addEventListener('load', () => { //wait to load
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("ERROR: Please input a workout.");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_title_el = document.createElement("div");
    task_title_el.classList.add("title");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_title_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);



    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete"

    const task_addset_el = document.createElement("button");
    task_addset_el.classList.add("addset");
    task_addset_el.innerHTML = "Add Set";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_actions_el.appendChild(task_addset_el);

    task_title_el.appendChild(task_actions_el);
    task_el.appendChild(task_title_el);

    const task_sets_div_el = document.createElement("div");
    task_sets_div_el.classList.add("sets-div");

    const weight_text_el = document.createElement("input");
    weight_text_el.setAttribute("type", "text");
    weight_text_el.setAttribute("placeholder", "Weight");
    weight_text_el.classList.add("set-text");

    const reps_text_el = document.createElement("input");
    reps_text_el.setAttribute("type", "text");
    reps_text_el.setAttribute("placeholder", "Reps");
    reps_text_el.classList.add("set-text");

    const times_el = document.createElement("h1");
    times_el.classList.add("xsymbol");
    times_el.innerHTML = "X";

    task_sets_div_el.appendChild(weight_text_el);
    task_sets_div_el.appendChild(times_el);
    task_sets_div_el.appendChild(reps_text_el);

    task_el.appendChild(task_sets_div_el)
    list_el.appendChild(task_el);

    input.value = "";


    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {

        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });

    task_addset_el.addEventListener('click', () => {
      let task_sets_div_el = document.createElement("div");
      task_sets_div_el.classList.add("sets-div");

      let weight_text_el = document.createElement("input");
      weight_text_el.setAttribute("type", "text");
      weight_text_el.setAttribute("placeholder", "Weight");
      weight_text_el.classList.add("set-text");

      let times_el = document.createElement("h1");
      times_el.classList.add("xsymbol");
      times_el.innerHTML = "X";

      let reps_text_el = document.createElement("input");
      reps_text_el.setAttribute("type", "text");
      reps_text_el.setAttribute("placeholder", "Reps");
      reps_text_el.classList.add("set-text");

      let task_delete_set_el = document.createElement("button");
      task_delete_set_el.classList.add("delete-set");
      task_delete_set_el.innerHTML = "Delete Set";

      task_sets_div_el.appendChild(weight_text_el);
      task_sets_div_el.appendChild(times_el);
      task_sets_div_el.appendChild(reps_text_el);
      task_sets_div_el.appendChild(task_delete_set_el);

      task_el.appendChild(task_sets_div_el);

      task_delete_set_el.addEventListener('click', () => {
        task_el.removeChild(task_sets_div_el);
      });



    });

  })
})