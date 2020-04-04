"use strict";function loadTodoList(){destroy("#todosList");var e=new TodoList(seek("#app")),t=getLocalStorage("todos");if(t){for(var o=0;o<t.length;o++)Object.setPrototypeOf(t[o],new Todo),e.addTodo(t[o]);e.fillList()}}function isInputCorrect(e){var t=!0,o=seek("#select-task"),s=seek("#select-priorities"),r=seek("#select-statuses"),a=document.getElementsByClassName("error-message");o.classList.remove("error-block"),s.classList.remove("error-block"),r.classList.remove("error-block");for(var n=0;n<a.length;n++)a[n].remove();"0"===e.task.value&&(o.classList.add("error-block"),t=!1),"0"===e.priority.value&&(s.classList.add("error-block"),t=!1),"0"===e.status.value&&(r.classList.add("error-block"),t=!1),a=document.getElementsByClassName("error-block");for(var i=0;i<a.length;i++){var c=new DOMElement("span",a[i]);c.addClass("error-message"),c.HTML("Incorrect input")}return t}function getApis(){fetch("data.json").then(function(e){return e.json()}).then(function(e){apis=e}).then(function(){checkApis()}).then(function(){loadTodoList()}).catch(function(e){console.log("rejected",e)})}function checkApis(){for(var e=getLocalStorage("todos"),t=0;t<e.length;t++){for(var o=e[t],s=!1,r=0;r<apis.statuses.length;r++)if(o.status===apis.statuses[r].value){s=!0;break}s||(e[t].status="Not defined"),s=!1;for(var a=0;a<apis.priorities.length;a++)if(o.priority===apis.priorities[a].value){s=!0;break}s||(e[t].priority="Not defined"),s=!1;for(var n=0;n<apis.tasks.length;n++)if(o.task===apis.tasks[n].value){s=!0;break}s||(e[t].task="Not defined")}localStorage.setItem("todos",JSON.stringify(e))}function addItemToPageContent(e){seek("#todosList").appendChild(e.get())}function updateItemInPageContent(e){var t=document.querySelector('#todosList > [data-id="'.concat(e.id,'"]'));seek("#todosList").replaceChild(e.get(),t)}function deleteItemFromPage(e){document.querySelector('tr[data-id="'.concat(e,'"]')).remove()}function deleteConfirmationCheck(e){e.hidden=!0,new ActionBar(e.parentElement,e.dataset.id,["Confirm","Cancel"])}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb3JlLmpzIl0sIm5hbWVzIjpbImxvYWRUb2RvTGlzdCIsImRlc3Ryb3kiLCJsaXN0IiwiVG9kb0xpc3QiLCJzZWVrIiwidG9kb3NMaXN0IiwiZ2V0TG9jYWxTdG9yYWdlIiwiaSIsImxlbmd0aCIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiVG9kbyIsImFkZFRvZG8iLCJmaWxsTGlzdCIsImZvcm0iLCJmbGFnIiwiaXNJbnB1dENvcnJlY3QiLCJwcmlvcml0aWVzIiwidGFza3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlcnJvclNlbGVjdHMiLCJyZW1vdmUiLCJjbGFzc0xpc3QiLCJzdGF0dXNlcyIsInRhc2siLCJ2YWx1ZSIsImFkZCIsInByaW9yaXR5IiwibWVzc2FnZSIsIkRPTUVsZW1lbnQiLCJhZGRDbGFzcyIsIkhUTUwiLCJnZXRBcGlzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNoZWNrQXBpcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImN1cnJlbnQiLCJpc0N1cnJlbnRBcGlFeGlzdHMiLCJrIiwic3RhdHVzIiwiYXBpcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkSXRlbVRvUGFnZUNvbnRlbnQiLCJ0b2RvT2JqIiwiYXBwZW5kQ2hpbGQiLCJnZXQiLCJ1cGRhdGVJdGVtSW5QYWdlQ29udGVudCIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJpZCIsImRlbGV0ZUl0ZW1Gcm9tUGFnZSIsIml0ZW1JZCIsImRlbGV0ZUNvbmZpcm1hdGlvbkNoZWNrIiwiZGVsZXRlQnV0dG9uIiwiaGlkZGVuIiwiQWN0aW9uQmFyIiwiZGF0YXNldCJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSxTQUFTQSxlQUNMQyxRQUFRLGNBQ1IsSUFBVUMsRUFBT0MsSUFBQUEsU0FBYUMsS0FBQyxTQUN6QkMsRUFBWUMsZ0JBQWdCLFNBQ2xDLEdBQUtE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R0EsRUFBYUMsUUFBUyxFQUwxQixJQUFBQyxVQUNJL0MsRUFBU3VDLGNBQ1pNLEVBQUFHLFFBQUFQLEdBT08sQ0FBQyxVQUFXIiwiZmlsZSI6ImFwcC5jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZFRvZG9MaXN0KCkge1xyXG4gICAgZGVzdHJveSgnI3RvZG9zTGlzdCcpO1xyXG4gICAgY29uc3QgbGlzdCA9IG5ldyBUb2RvTGlzdChzZWVrKCcjYXBwJykpO1xyXG4gICAgY29uc3QgdG9kb3NMaXN0ID0gZ2V0TG9jYWxTdG9yYWdlKCd0b2RvcycpO1xyXG4gICAgaWYgKCF0b2Rvc0xpc3QpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0b2Rvc0xpc3RbaV0sIG5ldyBUb2RvKTtcclxuICAgICAgICBsaXN0LmFkZFRvZG8odG9kb3NMaXN0W2ldKTtcclxuICAgIH1cclxuICAgIGxpc3QuZmlsbExpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJbnB1dENvcnJlY3QoZm9ybSkge1xyXG4gICAgbGV0IGZsYWcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gc2VlaygnI3NlbGVjdC10YXNrJyk7XHJcbiAgICBjb25zdCBwcmlvcml0aWVzID0gc2VlaygnI3NlbGVjdC1wcmlvcml0aWVzJyk7XHJcbiAgICBjb25zdCBzdGF0dXNlcyA9IHNlZWsoJyNzZWxlY3Qtc3RhdHVzZXMnKTtcclxuICAgIGxldCBlcnJvclNlbGVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1tZXNzYWdlJyk7XHJcblxyXG4gICAgdGFza3MuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItYmxvY2snKTtcclxuICAgIHByaW9yaXRpZXMuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItYmxvY2snKTtcclxuICAgIHN0YXR1c2VzLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLWJsb2NrJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yU2VsZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGVycm9yU2VsZWN0c1tpXS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9ybS50YXNrLnZhbHVlID09PSAnMCcpIHtcclxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCdlcnJvci1ibG9jaycpO1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtLnByaW9yaXR5LnZhbHVlID09PSAnMCcpIHtcclxuICAgICAgICBwcmlvcml0aWVzLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLWJsb2NrJyk7XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm0uc3RhdHVzLnZhbHVlID09PSAnMCcpIHtcclxuICAgICAgICBzdGF0dXNlcy5jbGFzc0xpc3QuYWRkKCdlcnJvci1ibG9jaycpO1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvclNlbGVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1ibG9jaycpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JTZWxlY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBET01FbGVtZW50KCdzcGFuJywgZXJyb3JTZWxlY3RzW2ldKTtcclxuICAgICAgICBtZXNzYWdlLmFkZENsYXNzKCdlcnJvci1tZXNzYWdlJyk7XHJcbiAgICAgICAgbWVzc2FnZS5IVE1MKCdJbmNvcnJlY3QgaW5wdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmxhZztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBpcygpIHtcclxuICAgIGZldGNoKCdkYXRhLmpzb24nKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgYXBpcyA9IHJlcztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tBcGlzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRUb2RvTGlzdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWplY3RlZCcsIGVycik7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tBcGlzKCkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRMb2NhbFN0b3JhZ2UoJ3RvZG9zJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYltpXTtcclxuICAgICAgICBsZXQgaXNDdXJyZW50QXBpRXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY2hlY2sgc3RhdHVzZXNcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFwaXMuc3RhdHVzZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuc3RhdHVzID09PSBhcGlzLnN0YXR1c2VzW2tdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpc0N1cnJlbnRBcGlFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0N1cnJlbnRBcGlFeGlzdHMpIHtcclxuICAgICAgICAgICAgZGJbaV0uc3RhdHVzID0gJ05vdCBkZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgcHJpb3JpdGllc1xyXG4gICAgICAgIGlzQ3VycmVudEFwaUV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXBpcy5wcmlvcml0aWVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnByaW9yaXR5ID09PSBhcGlzLnByaW9yaXRpZXNba10udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlzQ3VycmVudEFwaUV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzQ3VycmVudEFwaUV4aXN0cykge1xyXG4gICAgICAgICAgICBkYltpXS5wcmlvcml0eSA9ICdOb3QgZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIHRhc2tzXHJcbiAgICAgICAgaXNDdXJyZW50QXBpRXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhcGlzLnRhc2tzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnRhc2sgPT09IGFwaXMudGFza3Nba10udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlzQ3VycmVudEFwaUV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzQ3VycmVudEFwaUV4aXN0cykge1xyXG4gICAgICAgICAgICBkYltpXS50YXNrID0gJ05vdCBkZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZGIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSXRlbVRvUGFnZUNvbnRlbnQodG9kb09iaikge1xyXG4gICAgc2VlaygnI3RvZG9zTGlzdCcpLmFwcGVuZENoaWxkKHRvZG9PYmouZ2V0KCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVJdGVtSW5QYWdlQ29udGVudCh0b2RvT2JqKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb3NMaXN0ID4gW2RhdGEtaWQ9XCIke3RvZG9PYmouaWR9XCJdYCk7XHJcbiAgICBzZWVrKCcjdG9kb3NMaXN0JykucmVwbGFjZUNoaWxkKHRvZG9PYmouZ2V0KCksIHRhcmdldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW1Gcm9tUGFnZShpdGVtSWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke2l0ZW1JZH1cIl1gKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ29uZmlybWF0aW9uQ2hlY2soZGVsZXRlQnV0dG9uKSB7XHJcbiAgICBkZWxldGVCdXR0b24uaGlkZGVuID0gdHJ1ZTtcclxuICAgIG5ldyBBY3Rpb25CYXIoXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQsIFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LmlkLCBcclxuICAgICAgICBbJ0NvbmZpcm0nLCAnQ2FuY2VsJ11cclxuICAgICk7XHJcbn0iXX0=
