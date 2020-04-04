"use strict";function loadTodoList(){destroy("#todosList");var e=new TodoList(seek("#app")),t=getLocalStorage("todos");if(t){for(var o=0;o<t.length;o++)Object.setPrototypeOf(t[o],new Todo),e.addTodo(t[o]);e.fillList()}}function isInputCorrect(e){var t=!0,o=seek("#select-task"),s=seek("#select-priorities"),r=seek("#select-statuses"),a=document.getElementsByClassName("error-message");o.classList.remove("error-block"),s.classList.remove("error-block"),r.classList.remove("error-block");for(var n=0;n<a.length;n++)a[n].remove();"0"===e.task.value&&(o.classList.add("error-block"),t=!1),"0"===e.priority.value&&(s.classList.add("error-block"),t=!1),"0"===e.status.value&&(r.classList.add("error-block"),t=!1),a=document.getElementsByClassName("error-block");for(var i=0;i<a.length;i++){var c=new DOMElement("span",a[i]);c.addClass("error-message"),c.HTML("Incorrect input")}return t}function getApis(){fetch("data.json").then(function(e){return e.json()}).then(function(e){apis=e}).then(function(){checkApis()}).then(function(){loadTodoList()}).catch(function(e){console.log("rejected",e)})}function checkApis(){for(var e=getLocalStorage("todos"),t=0;t<e.length;t++){for(var o=e[t],s=!1,r=0;r<apis.statuses.length;r++)if(o.status===apis.statuses[r].value){s=!0;break}s||(e[t].status="Not defined"),s=!1;for(var a=0;a<apis.priorities.length;a++)if(o.priority===apis.priorities[a].value){s=!0;break}s||(e[t].priority="Not defined"),s=!1;for(var n=0;n<apis.tasks.length;n++)if(o.task===apis.tasks[n].value){s=!0;break}s||(e[t].task="Not defined")}localStorage.setItem("todos",JSON.stringify(e))}function addItemToPageContent(e){seek("#todosList").appendChild(e.get())}function updateItemInPageContent(e){var t=document.querySelector('#todosList > [data-id="'.concat(e.id,'"]'));seek("#todosList").replaceChild(e.get(),t)}function deleteItemFromPage(e){document.querySelector('tr[data-id="'.concat(e,'"]')).remove()}function deleteConfirmationCheck(e){e.hidden=!0,new ActionBar(e.parentElement,e.dataset.id,["Confirm","Cancel"])}