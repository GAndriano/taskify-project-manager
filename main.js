/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
// module for creating projects and an array for storing them
class Project {
  constructor(name, due, done) {
    this.name = name;
    this.due = due;
    this.tasks = [];
    this.done = done;
  }

  deleteTask = (newTask) => this.tasks.splice((this.tasks.indexOf(newTask)), 1);

  addTask = (newTask) => this.tasks.push(newTask);
}

const projectList = [];




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// module that makes the tasks
class Task {
  constructor(title, dueDate, done) {
    this.title = title;
    this.dueDate = dueDate;
    this.done = done;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

// main file where projects and tasks are imported and DOM content rendered.




const makeProject = (() => {
  const page = document.getElementById('content');

  // makes the first 'add project' box
  const renderAddBox = () => {
    const box = document.createElement('div');

    box.classList.add('addbox');
    const addButton = document.createElement('div');
    addButton.classList.add('addbtn');
    addButton.textContent = '+';
    const boxtext = document.createElement('div');
    boxtext.classList.add('boxtext');
    boxtext.textContent = 'add project';
    addButton.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      addForm(box);
      makeProject.renderAddBox();
    });
    box.appendChild(addButton);
    box.appendChild(boxtext);
    page.appendChild(box);

    return box;
  };

  // makes the rest of the project box
  const addForm = (box) => {
    // eslint-disable-next-line no-param-reassign
    box.innerHTML = '';

    const formBox = document.createElement('div');
    formBox.classList.add('formbox');
    box.appendChild(formBox);

    const projNameBox = document.createElement('div');
    projNameBox.classList.add('projnamebox');

    const projName = document.createElement('input');
    projName.classList.add('projname');
    projName.placeholder = 'Project Name';
    projNameBox.appendChild(projName);
    formBox.appendChild(projNameBox);
    projName.focus();
    projName.addEventListener('click', () => {
      projName.style.cursor = 'text';
    });
    projName.addEventListener('mouseleave', () => {
      projName.style.cursor = 'pointer';
    });

    let projNameValue = projName.value;
    projName.addEventListener('input', () => {
      projNameValue = projName.value;
    });

    const projDueDate = document.createElement('input');
    projDueDate.classList.add('projduedate');
    projDueDate.type = 'date';
    let projDateValue = projDueDate.value;
    projDueDate.addEventListener('input', () => {
      projDateValue = projDueDate.value;
    });
    projDueDate.addEventListener('click', () => {
      projDueDate.style.cursor = 'text';
    });
    projDueDate.addEventListener('mouseleave', () => {
      projDueDate.style.cursor = 'pointer';
    });

    projNameBox.appendChild(projDueDate);

    const confirmBox = document.createElement('div');
    confirmBox.classList.add('confirmbox');

    const confirmProject = document.createElement('div');
    confirmProject.classList.add('confirmproject');
    confirmProject.textContent = 'confirm';
    confirmProject.addEventListener('click', () => {
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projNameValue, projDateValue, false, []);
      _project__WEBPACK_IMPORTED_MODULE_0__.projectList.push(newProject);
      populateStorage();
      const editBox = document.createElement('div');

      editBox.classList.add('editbox');
      const edit = document.createElement('div');
      edit.textContent = 'edit';
      edit.classList.add('projedit');
      edit.addEventListener('click', () => {
        edit.remove();
        const editConfirm = document.createElement('div');
        editBox.appendChild(editConfirm);
        editConfirm.textContent = 'done';
        editConfirm.classList.add('projedit');
        editConfirm.addEventListener('click', () => {
          newProject.name = projNameValue;
          newProject.due = projDateValue;
          editConfirm.remove();
          editBox.appendChild(edit);
          populateStorage();
        });
      });
      editBox.appendChild(edit);

      confirmBox.classList.replace('confirmbox', 'editdelbox');
      const del = document.createElement('span');
      del.addEventListener('click', () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(Number(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(newProject)), 1);
        populateStorage();
        box.remove();
      });
      del.classList.add('del');
      del.textContent = 'X';
      confirmProject.remove();
      confirmBox.appendChild(editBox);
      confirmBox.appendChild(del);
      function renderTaskBox() {
        const taskBox = document.createElement('div');
        taskBox.classList.add('taskbox');

        const taskTitle = document.createElement('input');
        taskTitle.type = 'text';
        let taskTitleValue = taskTitle.value;
        taskTitle.placeholder = 'task name';
        taskTitle.classList.add('tasktitle');
        taskTitle.addEventListener('input', () => {
          taskTitleValue = taskTitle.value;
        });
        taskTitle.addEventListener('click', () => {
          taskTitle.style.cursor = 'text';
        });
        taskTitle.addEventListener('mouseleave', () => {
          taskTitle.style.cursor = 'pointer';
        });

        const taskDueDate = document.createElement('input');
        taskDueDate.type = 'date';
        let taskDueValue = taskDueDate.value;
        taskDueDate.classList.add('taskduedate');
        taskDueDate.addEventListener('input', () => {
          taskDueValue = taskDueDate.value;
        });
        taskDueDate.addEventListener('click', () => {
          taskDueDate.style.cursor = 'text';
        });
        taskDueDate.addEventListener('mouseleave', () => {
          taskDueDate.style.cursor = 'pointer';
        });

        const taskDoneBox = document.createElement('div');
        const taskDone = document.createElement('input');
        taskDone.classList.add('taskdone');
        taskDoneBox.appendChild(taskDone);
        taskDone.type = 'checkbox';

        const taskConfirmBox = document.createElement('div');
        taskConfirmBox.style.backgroundColor = '#a3e635';
        taskConfirmBox.style.height = '26px';
        taskConfirmBox.style.display = 'flex';
        const taskConfirm = document.createElement('div');
        taskConfirm.textContent = 'confirm';
        taskConfirm.classList.add('projedit');
        taskConfirm.style.fontSize = '15px';
        taskConfirm.addEventListener('click', () => {
          taskConfirm.remove();
          taskConfirmBox.remove();
          taskBox.appendChild(taskDoneBox);

          const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitleValue, taskDueValue, false);
          newProject.addTask(newTask);
          populateStorage();

          const taskDelBox = document.createElement('div');
          taskDelBox.classList.add('taskDelBox');
          const taskDel = document.createElement('div');
          taskDel.textContent = 'x';
          taskDelBox.classList.add('taskdelbox');
          taskDelBox.appendChild(taskDel);
          taskDel.classList.add('taskdel');
          taskDel.addEventListener('click', () => {
            taskBox.remove();
            newProject.deleteTask(newTask);
            if (newProject.tasks.length === 0) {
              box.style.backgroundColor = 'white';
              projName.style.backgroundColor = 'white';
              projDueDate.style.backgroundColor = 'white';
            }
            populateStorage();
          });

          taskDone.addEventListener('change', () => {
            if (taskDone.checked) {
              newTask.done = true;
              populateStorage();
              taskTitle.style.backgroundColor = '#a3e635';
              taskDueDate.style.backgroundColor = '#a3e635';
              taskDoneBox.style.backgroundColor = '#a3e635';
            } else {
              newTask.done = false;
              populateStorage();
              taskTitle.style.backgroundColor = 'white';
              taskDueDate.style.backgroundColor = 'white';
              taskDoneBox.style.backgroundColor = 'white';
            }

            const checkIsDone = (task) => task.done === true;

            if (newProject.tasks.every(checkIsDone) === true) {
              box.style.backgroundColor = '#a3e635';
              projName.style.backgroundColor = '#a3e635';
              projDueDate.style.backgroundColor = '#a3e635';
            } else {
              box.style.backgroundColor = 'white';
              projName.style.backgroundColor = 'white';
              projDueDate.style.backgroundColor = 'white';
            }
          });

          taskBox.appendChild(taskDelBox);
        });
        taskConfirmBox.appendChild(taskConfirm);
        taskBox.appendChild(taskTitle);
        taskBox.appendChild(taskDueDate);
        taskBox.appendChild(taskConfirmBox);

        return taskBox;
      }
      const addButton = document.createElement('div');
      addButton.classList.add('taskaddbutton');
      addButton.textContent = '+';
      addButton.addEventListener('click', () => {
        // eslint-disable-next-line no-shadow
        const projNameBox = document.querySelector('projnamebox');
        box.appendChild(renderTaskBox());
        renderTaskBox().insertBefore(addButton, projNameBox);
        box.appendChild(addButton);
      });
      renderTaskBox();

      box.appendChild(addButton);
    });

    confirmBox.appendChild(confirmProject);
    projNameBox.appendChild(confirmBox);
  };

  // stores project info
  function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_0__.projectList));
  }

  // returns project info and displays them
  function getStorage() {
    const projects = Array.from(JSON.parse(localStorage.getItem('projects')));

    if (localStorage.getItem('projects')) {
      projects.forEach((project) => {
        _project__WEBPACK_IMPORTED_MODULE_0__.projectList.push(project);
        const box = document.createElement('div');
        box.classList.add('addbox');
        const formBox = document.createElement('div');
        formBox.classList.add('formbox');

        const projNameBox = document.createElement('div');
        projNameBox.classList.add('projnamebox');

        const projName = document.createElement('input');
        projName.classList.add('projname');
        projName.value = project.name;
        projNameBox.appendChild(projName);
        formBox.appendChild(projNameBox);
        projName.focus();
        projName.addEventListener('click', () => {
          projName.style.cursor = 'text';
        });
        projName.addEventListener('mouseleave', () => {
          projName.style.cursor = 'pointer';
        });

        const projDueDate = document.createElement('input');
        projDueDate.classList.add('projduedate');
        projDueDate.type = 'date';
        projDueDate.value = project.due;
        projDueDate.addEventListener('click', () => {
          projDueDate.style.cursor = 'text';
        });
        projDueDate.addEventListener('mouseleave', () => {
          projDueDate.style.cursor = 'pointer';
        });

        const editDelBox = document.createElement('div');
        editDelBox.classList.add('editdelbox');
        const editBox = document.createElement('div');
        editBox.classList.add('editbox');
        const edit = document.createElement('div');
        edit.textContent = 'edit';
        edit.classList.add('projedit');
        edit.addEventListener('click', () => {
          edit.remove();
          const editConfirm = document.createElement('div');
          editBox.appendChild(editConfirm);
          editConfirm.textContent = 'done';
          editConfirm.classList.add('projedit');
          editConfirm.addEventListener('click', () => {
            project.name = projName.value;
            project.due = projDueDate.value;
            editConfirm.remove();
            editBox.appendChild(edit);
            populateStorage();
          });
        });
        const del = document.createElement('span');
        del.addEventListener('click', () => {
          projects.splice(Number(projects.indexOf(project)), 1);
          _project__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(Number(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project)), 1);
          populateStorage();
          box.remove();
          if (project.tasks.length === 0) {
            box.style.backgroundColor = 'white';
            projName.style.backgroundColor = 'white';
            projDueDate.style.backgroundColor = 'white';
          }
        });
        del.classList.add('del');
        del.textContent = 'X';

        function renderTasks() {
          project.tasks.forEach((task) => {
            const taskBox = document.createElement('div');
            taskBox.classList.add('taskbox');

            const taskTitle = document.createElement('input');
            taskTitle.type = 'text';
            taskTitle.value = task.title;
            taskTitle.classList.add('tasktitle');
            taskTitle.addEventListener('click', () => {
              taskTitle.style.cursor = 'text';
            });
            taskTitle.addEventListener('mouseleave', () => {
              taskTitle.style.cursor = 'pointer';
            });

            const taskDueDate = document.createElement('input');
            taskDueDate.type = 'date';
            taskDueDate.value = task.dueDate;
            taskDueDate.classList.add('taskduedate');

            const taskDoneBox = document.createElement('div');
            const taskDone = document.createElement('input');
            taskDone.classList.add('taskdone');
            taskDoneBox.appendChild(taskDone);
            taskDone.type = 'checkbox';

            // eslint-disable-next-line no-shadow
            const checkIsDone = (task) => task.done === true;

            if (task.done === true && project.tasks.every(checkIsDone) === false) {
              taskDone.checked = true;
              taskTitle.style.backgroundColor = '#a3e635';
              taskDueDate.style.backgroundColor = '#a3e635';
              taskDoneBox.style.backgroundColor = '#a3e635';
            } else if (task.done === true && project.tasks.every(checkIsDone) === true) {
              box.style.backgroundColor = '#a3e635';
              projName.style.backgroundColor = '#a3e635';
              projDueDate.style.backgroundColor = '#a3e635';
              taskDone.checked = true;
              taskTitle.style.backgroundColor = '#a3e635';
              taskDueDate.style.backgroundColor = '#a3e635';
              taskDoneBox.style.backgroundColor = '#a3e635';
            } else {
              taskDone.checked = false;
              taskTitle.style.backgroundColor = 'white';
              taskDueDate.style.backgroundColor = 'white';
              taskDoneBox.style.backgroundColor = 'white';
              projName.style.backgroundColor = 'white';
              projDueDate.style.backgroundColor = 'white';
            }

            taskDone.addEventListener('change', () => {
              function updateDone() {
                if (taskDone.checked === true) {
                  task.done = true;
                  if (project.tasks.every(checkIsDone) === true) {
                    project.done = true;
                    projName.style.backgroundColor = '#a3e635';
                    projDueDate.style.backgroundColor = '#a3e635';
                    box.style.backgroundColor = '#a3e635';
                    taskTitle.style.backgroundColor = '#a3e635';
                    taskDueDate.style.backgroundColor = '#a3e635';
                    taskDoneBox.style.backgroundColor = '#a3e635';
                    populateStorage();
                  } else {
                    taskTitle.style.backgroundColor = '#a3e635';
                    taskDueDate.style.backgroundColor = '#a3e635';
                    taskDoneBox.style.backgroundColor = '#a3e635';
                    projName.style.backgroundColor = 'white';
                    projDueDate.style.backgroundColor = 'white';
                    box.style.backgroundColor = 'white';
                    populateStorage();
                  }
                } else if (taskDone.checked === false) {
                  task.done = false;
                  project.done = false;
                  projName.style.backgroundColor = 'white';
                  projDueDate.style.backgroundColor = 'white';
                  box.style.backgroundColor = 'white';
                  taskTitle.style.backgroundColor = 'white';
                  taskDueDate.style.backgroundColor = 'white';
                  taskDoneBox.style.backgroundColor = 'white';
                  populateStorage();
                }
              }
              updateDone();
            });

            const taskDelBox = document.createElement('div');
            const taskDel = document.createElement('div');
            taskDel.textContent = 'x';
            taskDelBox.classList.add('taskdelbox');
            taskDelBox.appendChild(taskDel);
            taskDel.classList.add('taskdel');
            taskDel.addEventListener('click', () => {
              taskBox.remove();
              project.tasks.splice(project.tasks.indexOf(task), 1);
              populateStorage();
            });

            taskBox.appendChild(taskTitle);
            taskBox.appendChild(taskDueDate);
            taskBox.appendChild(taskDoneBox);
            taskBox.appendChild(taskDelBox);
            box.appendChild(taskBox);
          });
        }

        const addButton = document.createElement('div');
        addButton.classList.add('taskaddbutton');
        addButton.textContent = '+';
        addButton.addEventListener('click', () => {
          function renderTaskBox() {
            const taskBox = document.createElement('div');
            taskBox.classList.add('taskbox');

            const taskTitle = document.createElement('input');
            taskTitle.type = 'text';
            let taskTitleValue = taskTitle.value;
            taskTitle.placeholder = 'task name';
            taskTitle.classList.add('tasktitle');
            taskTitle.addEventListener('input', () => {
              taskTitleValue = taskTitle.value;
            });
            taskTitle.addEventListener('click', () => {
              taskTitle.style.cursor = 'text';
            });
            taskTitle.addEventListener('mouseleave', () => {
              taskTitle.style.cursor = 'pointer';
            });
            taskBox.appendChild(taskTitle);

            const taskDueDate = document.createElement('input');
            taskDueDate.type = 'date';
            let taskDueValue = taskDueDate.value;
            taskDueDate.classList.add('taskduedate');
            taskDueDate.addEventListener('input', () => {
              taskDueValue = taskDueDate.value;
            });
            taskDueDate.addEventListener('click', () => {
              taskDueDate.style.cursor = 'text';
            });
            taskDueDate.addEventListener('mouseleave', () => {
              taskDueDate.style.cursor = 'pointer';
            });
            taskBox.appendChild(taskDueDate);

            const taskDoneBox = document.createElement('div');
            const taskDone = document.createElement('input');
            taskDone.classList.add('taskdone');
            taskDoneBox.appendChild(taskDone);
            taskDone.type = 'checkbox';

            const taskConfirmBox = document.createElement('div');
            taskConfirmBox.style.backgroundColor = '#a3e635';
            taskConfirmBox.style.height = '26px';
            taskConfirmBox.style.display = 'flex';
            const taskConfirm = document.createElement('div');
            taskConfirm.textContent = 'confirm';
            taskConfirm.classList.add('projedit');
            taskConfirm.style.fontSize = '15px';
            taskConfirmBox.appendChild(taskConfirm);
            taskBox.appendChild(taskConfirmBox);
            taskConfirm.addEventListener('click', () => {
              taskConfirm.remove();
              taskConfirmBox.remove();
              taskBox.appendChild(taskDoneBox);

              const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitleValue, taskDueValue, false);
              project.tasks.push(newTask);
              populateStorage();

              const taskDelBox = document.createElement('div');
              taskDelBox.classList.add('taskDelBox');
              const taskDel = document.createElement('div');
              taskDel.textContent = 'x';
              taskDelBox.classList.add('taskdelbox');
              taskDelBox.appendChild(taskDel);
              taskBox.appendChild(taskDelBox);
              taskDel.classList.add('taskdel');
              taskDel.addEventListener('click', () => {
                taskBox.remove();
                project.tasks.splice(project.tasks.indexOf(newTask), 1);

                const checkIsDone = (task) => task.done === true;

                if (project.tasks.every(checkIsDone) === true) {
                  box.style.backgroundColor = '#a3e635';
                  projName.style.backgroundColor = '#a3e635';
                  projDueDate.style.backgroundColor = '#a3e635';
                } else {
                  box.style.backgroundColor = 'white';
                  projName.style.backgroundColor = 'white';
                  projDueDate.style.backgroundColor = 'white';
                }

                populateStorage();
              });

              taskDone.addEventListener('change', () => {
                if (taskDone.checked) {
                  newTask.done = true;
                  populateStorage();
                  taskTitle.style.backgroundColor = '#a3e635';
                  taskDueDate.style.backgroundColor = '#a3e635';
                  taskDoneBox.style.backgroundColor = '#a3e635';
                } else {
                  newTask.done = false;
                  populateStorage();
                  taskTitle.style.backgroundColor = 'white';
                  taskDueDate.style.backgroundColor = 'white';
                  taskDoneBox.style.backgroundColor = 'white';
                }

                const checkIsDone = (task) => task.done === true;

                if (project.tasks.every(checkIsDone) === true) {
                  box.style.backgroundColor = '#a3e635';
                  projName.style.backgroundColor = '#a3e635';
                  projDueDate.style.backgroundColor = '#a3e635';
                } else {
                  box.style.backgroundColor = 'white';
                  projName.style.backgroundColor = 'white';
                  projDueDate.style.backgroundColor = 'white';
                }
              });
            });

            return taskBox;
          }
          box.appendChild(renderTaskBox());
          renderTaskBox().insertBefore(addButton, document.querySelector('taskbox'));
          box.appendChild(addButton);
        });

        editBox.appendChild(edit);
        editDelBox.appendChild(editBox);
        editDelBox.appendChild(del);
        projNameBox.appendChild(projName);
        projNameBox.appendChild(projDueDate);
        projNameBox.appendChild(editDelBox);
        formBox.appendChild(projNameBox);
        box.appendChild(formBox);
        page.appendChild(box);
        renderTasks();
        box.appendChild(addButton);
      });
    }
  }

  return { renderAddBox, getStorage, populateStorage };
})();

if (!localStorage.getItem('projects')) {
  makeProject.populateStorage();
} else {
  makeProject.getStorage();
}
makeProject.renderAddBox();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kdWxlIGZvciBjcmVhdGluZyBwcm9qZWN0cyBhbmQgYW4gYXJyYXkgZm9yIHN0b3JpbmcgdGhlbVxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZSwgZG9uZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gIH1cblxuICBkZWxldGVUYXNrID0gKG5ld1Rhc2spID0+IHRoaXMudGFza3Muc3BsaWNlKCh0aGlzLnRhc2tzLmluZGV4T2YobmV3VGFzaykpLCAxKTtcblxuICBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuZXhwb3J0IHsgcHJvamVjdExpc3QsIFByb2plY3QgfTtcbiIsIi8vIG1vZHVsZSB0aGF0IG1ha2VzIHRoZSB0YXNrc1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkb25lKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kb25lID0gZG9uZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLy8gbWFpbiBmaWxlIHdoZXJlIHByb2plY3RzIGFuZCB0YXNrcyBhcmUgaW1wb3J0ZWQgYW5kIERPTSBjb250ZW50IHJlbmRlcmVkLlxuXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5jb25zdCBtYWtlUHJvamVjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIG1ha2VzIHRoZSBmaXJzdCAnYWRkIHByb2plY3QnIGJveFxuICBjb25zdCByZW5kZXJBZGRCb3ggPSAoKSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBib3guY2xhc3NMaXN0LmFkZCgnYWRkYm94Jyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZGJ0bicpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBjb25zdCBib3h0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94dGV4dC5jbGFzc0xpc3QuYWRkKCdib3h0ZXh0Jyk7XG4gICAgYm94dGV4dC50ZXh0Q29udGVudCA9ICdhZGQgcHJvamVjdCc7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBhZGRGb3JtKGJveCk7XG4gICAgICBtYWtlUHJvamVjdC5yZW5kZXJBZGRCb3goKTtcbiAgICB9KTtcbiAgICBib3guYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBib3guYXBwZW5kQ2hpbGQoYm94dGV4dCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChib3gpO1xuXG4gICAgcmV0dXJuIGJveDtcbiAgfTtcblxuICAvLyBtYWtlcyB0aGUgcmVzdCBvZiB0aGUgcHJvamVjdCBib3hcbiAgY29uc3QgYWRkRm9ybSA9IChib3gpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBib3guaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBmb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJveC5jbGFzc0xpc3QuYWRkKCdmb3JtYm94Jyk7XG4gICAgYm94LmFwcGVuZENoaWxkKGZvcm1Cb3gpO1xuXG4gICAgY29uc3QgcHJvak5hbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qTmFtZUJveC5jbGFzc0xpc3QuYWRkKCdwcm9qbmFtZWJveCcpO1xuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2puYW1lJyk7XG4gICAgcHJvak5hbWUucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcbiAgICBwcm9qTmFtZUJveC5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qTmFtZUJveCk7XG4gICAgcHJvak5hbWUuZm9jdXMoKTtcbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2pOYW1lLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICB9KTtcbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgcHJvak5hbWUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb2pOYW1lVmFsdWUgPSBwcm9qTmFtZS52YWx1ZTtcbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHByb2pOYW1lVmFsdWUgPSBwcm9qTmFtZS52YWx1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2pEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZHVlZGF0ZScpO1xuICAgIHByb2pEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgbGV0IHByb2pEYXRlVmFsdWUgPSBwcm9qRHVlRGF0ZS52YWx1ZTtcbiAgICBwcm9qRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHByb2pEYXRlVmFsdWUgPSBwcm9qRHVlRGF0ZS52YWx1ZTtcbiAgICB9KTtcbiAgICBwcm9qRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICB9KTtcbiAgICBwcm9qRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgcHJvakR1ZURhdGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIH0pO1xuXG4gICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQocHJvakR1ZURhdGUpO1xuXG4gICAgY29uc3QgY29uZmlybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1Cb3guY2xhc3NMaXN0LmFkZCgnY29uZmlybWJveCcpO1xuXG4gICAgY29uc3QgY29uZmlybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjb25maXJtcHJvamVjdCcpO1xuICAgIGNvbmZpcm1Qcm9qZWN0LnRleHRDb250ZW50ID0gJ2NvbmZpcm0nO1xuICAgIGNvbmZpcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2pOYW1lVmFsdWUsIHByb2pEYXRlVmFsdWUsIGZhbHNlLCBbXSk7XG4gICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICBjb25zdCBlZGl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGVkaXRCb3guY2xhc3NMaXN0LmFkZCgnZWRpdGJveCcpO1xuICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgncHJvamVkaXQnKTtcbiAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGVkaXRDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdENvbmZpcm0pO1xuICAgICAgICBlZGl0Q29uZmlybS50ZXh0Q29udGVudCA9ICdkb25lJztcbiAgICAgICAgZWRpdENvbmZpcm0uY2xhc3NMaXN0LmFkZCgncHJvamVkaXQnKTtcbiAgICAgICAgZWRpdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbmV3UHJvamVjdC5uYW1lID0gcHJvak5hbWVWYWx1ZTtcbiAgICAgICAgICBuZXdQcm9qZWN0LmR1ZSA9IHByb2pEYXRlVmFsdWU7XG4gICAgICAgICAgZWRpdENvbmZpcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgZWRpdEJveC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgIGNvbmZpcm1Cb3guY2xhc3NMaXN0LnJlcGxhY2UoJ2NvbmZpcm1ib3gnLCAnZWRpdGRlbGJveCcpO1xuICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoTnVtYmVyKHByb2plY3RMaXN0LmluZGV4T2YobmV3UHJvamVjdCkpLCAxKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIGJveC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xuICAgICAgZGVsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgY29uZmlybVByb2plY3QucmVtb3ZlKCk7XG4gICAgICBjb25maXJtQm94LmFwcGVuZENoaWxkKGVkaXRCb3gpO1xuICAgICAgY29uZmlybUJveC5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgZnVuY3Rpb24gcmVuZGVyVGFza0JveCgpIHtcbiAgICAgICAgY29uc3QgdGFza0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tib3gnKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgbGV0IHRhc2tUaXRsZVZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAndGFzayBuYW1lJztcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2t0aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGFza1RpdGxlVmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgbGV0IHRhc2tEdWVWYWx1ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrZHVlZGF0ZScpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICB0YXNrRHVlVmFsdWUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0YXNrRG9uZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEb25lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkb25lJyk7XG4gICAgICAgIHRhc2tEb25lQm94LmFwcGVuZENoaWxkKHRhc2tEb25lKTtcbiAgICAgICAgdGFza0RvbmUudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbmZpcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0NvbmZpcm1Cb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICB0YXNrQ29uZmlybUJveC5zdHlsZS5oZWlnaHQgPSAnMjZweCc7XG4gICAgICAgIHRhc2tDb25maXJtQm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGNvbnN0IHRhc2tDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb25maXJtLnRleHRDb250ZW50ID0gJ2NvbmZpcm0nO1xuICAgICAgICB0YXNrQ29uZmlybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWRpdCcpO1xuICAgICAgICB0YXNrQ29uZmlybS5zdHlsZS5mb250U2l6ZSA9ICcxNXB4JztcbiAgICAgICAgdGFza0NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGFza0NvbmZpcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgdGFza0NvbmZpcm1Cb3gucmVtb3ZlKCk7XG4gICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRG9uZUJveCk7XG5cbiAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlVmFsdWUsIHRhc2tEdWVWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgIG5ld1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0YXNrRGVsQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZWxCb3gnKTtcbiAgICAgICAgICBjb25zdCB0YXNrRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGFza0RlbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICB0YXNrRGVsQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZWxib3gnKTtcbiAgICAgICAgICB0YXNrRGVsQm94LmFwcGVuZENoaWxkKHRhc2tEZWwpO1xuICAgICAgICAgIHRhc2tEZWwuY2xhc3NMaXN0LmFkZCgndGFza2RlbCcpO1xuICAgICAgICAgIHRhc2tEZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrQm94LnJlbW92ZSgpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5kZWxldGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3QudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFza0RvbmUuY2hlY2tlZCkge1xuICAgICAgICAgICAgICBuZXdUYXNrLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICB0YXNrRG9uZUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdUYXNrLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICB0YXNrRG9uZUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjaGVja0lzRG9uZSA9ICh0YXNrKSA9PiB0YXNrLmRvbmUgPT09IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0LnRhc2tzLmV2ZXJ5KGNoZWNrSXNEb25lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRGVsQm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tDb25maXJtQm94LmFwcGVuZENoaWxkKHRhc2tDb25maXJtKTtcbiAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrQ29uZmlybUJveCk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tCb3g7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrYWRkYnV0dG9uJyk7XG4gICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgICAgY29uc3QgcHJvak5hbWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm9qbmFtZWJveCcpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQocmVuZGVyVGFza0JveCgpKTtcbiAgICAgICAgcmVuZGVyVGFza0JveCgpLmluc2VydEJlZm9yZShhZGRCdXR0b24sIHByb2pOYW1lQm94KTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICB9KTtcbiAgICAgIHJlbmRlclRhc2tCb3goKTtcblxuICAgICAgYm94LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBjb25maXJtQm94LmFwcGVuZENoaWxkKGNvbmZpcm1Qcm9qZWN0KTtcbiAgICBwcm9qTmFtZUJveC5hcHBlbmRDaGlsZChjb25maXJtQm94KTtcbiAgfTtcblxuICAvLyBzdG9yZXMgcHJvamVjdCBpbmZvXG4gIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICB9XG5cbiAgLy8gcmV0dXJucyBwcm9qZWN0IGluZm8gYW5kIGRpc3BsYXlzIHRoZW1cbiAgZnVuY3Rpb24gZ2V0U3RvcmFnZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnYWRkYm94Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUJveC5jbGFzc0xpc3QuYWRkKCdmb3JtYm94Jyk7XG5cbiAgICAgICAgY29uc3QgcHJvak5hbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvak5hbWVCb3guY2xhc3NMaXN0LmFkZCgncHJvam5hbWVib3gnKTtcblxuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2pOYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2puYW1lJyk7XG4gICAgICAgIHByb2pOYW1lLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qTmFtZUJveC5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG4gICAgICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvak5hbWVCb3gpO1xuICAgICAgICBwcm9qTmFtZS5mb2N1cygpO1xuICAgICAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJvakR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZHVlZGF0ZScpO1xuICAgICAgICBwcm9qRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBwcm9qRHVlRGF0ZS52YWx1ZSA9IHByb2plY3QuZHVlO1xuICAgICAgICBwcm9qRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdERlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0RGVsQm94LmNsYXNzTGlzdC5hZGQoJ2VkaXRkZWxib3gnKTtcbiAgICAgICAgY29uc3QgZWRpdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0Qm94LmNsYXNzTGlzdC5hZGQoJ2VkaXRib3gnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plZGl0Jyk7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgZWRpdC5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlZGl0Q29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdENvbmZpcm0pO1xuICAgICAgICAgIGVkaXRDb25maXJtLnRleHRDb250ZW50ID0gJ2RvbmUnO1xuICAgICAgICAgIGVkaXRDb25maXJtLmNsYXNzTGlzdC5hZGQoJ3Byb2plZGl0Jyk7XG4gICAgICAgICAgZWRpdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qTmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHByb2plY3QuZHVlID0gcHJvakR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICBlZGl0Q29uZmlybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RzLnNwbGljZShOdW1iZXIocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSksIDEpO1xuICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShOdW1iZXIocHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KSksIDEpO1xuICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgIGJveC5yZW1vdmUoKTtcbiAgICAgICAgICBpZiAocHJvamVjdC50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xuICAgICAgICBkZWwudGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tib3gnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrdGl0bGUnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza2R1ZWRhdGUnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RvbmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRhc2tEb25lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkb25lJyk7XG4gICAgICAgICAgICB0YXNrRG9uZUJveC5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG4gICAgICAgICAgICB0YXNrRG9uZS50eXBlID0gJ2NoZWNrYm94JztcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgICAgICAgY29uc3QgY2hlY2tJc0RvbmUgPSAodGFzaykgPT4gdGFzay5kb25lID09PSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGFzay5kb25lID09PSB0cnVlICYmIHByb2plY3QudGFza3MuZXZlcnkoY2hlY2tJc0RvbmUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0YXNrRG9uZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICB0YXNrRG9uZUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suZG9uZSA9PT0gdHJ1ZSAmJiBwcm9qZWN0LnRhc2tzLmV2ZXJ5KGNoZWNrSXNEb25lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0RvbmUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFza0RvbmUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEb25lKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRG9uZS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXNrLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGFza3MuZXZlcnkoY2hlY2tJc0RvbmUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFza0RvbmUuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIHRhc2suZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgcHJvamVjdC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB1cGRhdGVEb25lKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0RlbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgIHRhc2tEZWxCb3guY2xhc3NMaXN0LmFkZCgndGFza2RlbGJveCcpO1xuICAgICAgICAgICAgdGFza0RlbEJveC5hcHBlbmRDaGlsZCh0YXNrRGVsKTtcbiAgICAgICAgICAgIHRhc2tEZWwuY2xhc3NMaXN0LmFkZCgndGFza2RlbCcpO1xuICAgICAgICAgICAgdGFza0RlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza0JveC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEb25lQm94KTtcbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RlbEJveCk7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGFza0JveCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2thZGRidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgZnVuY3Rpb24gcmVuZGVyVGFza0JveCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZCgndGFza2JveCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlVmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgICAgICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAndGFzayBuYW1lJztcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrdGl0bGUnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza1RpdGxlVmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGxldCB0YXNrRHVlVmFsdWUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkdWVkYXRlJyk7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza0R1ZVZhbHVlID0gdGFza0R1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEb25lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0YXNrRG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrZG9uZScpO1xuICAgICAgICAgICAgdGFza0RvbmVCb3guYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuICAgICAgICAgICAgdGFza0RvbmUudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb25maXJtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ29uZmlybUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICB0YXNrQ29uZmlybUJveC5zdHlsZS5oZWlnaHQgPSAnMjZweCc7XG4gICAgICAgICAgICB0YXNrQ29uZmlybUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDb25maXJtLnRleHRDb250ZW50ID0gJ2NvbmZpcm0nO1xuICAgICAgICAgICAgdGFza0NvbmZpcm0uY2xhc3NMaXN0LmFkZCgncHJvamVkaXQnKTtcbiAgICAgICAgICAgIHRhc2tDb25maXJtLnN0eWxlLmZvbnRTaXplID0gJzE1cHgnO1xuICAgICAgICAgICAgdGFza0NvbmZpcm1Cb3guYXBwZW5kQ2hpbGQodGFza0NvbmZpcm0pO1xuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrQ29uZmlybUJveCk7XG4gICAgICAgICAgICB0YXNrQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza0NvbmZpcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHRhc2tDb25maXJtQm94LnJlbW92ZSgpO1xuICAgICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEb25lQm94KTtcblxuICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlVmFsdWUsIHRhc2tEdWVWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgdGFza0RlbEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsQm94Jyk7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgdGFza0RlbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgICAgdGFza0RlbEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrZGVsYm94Jyk7XG4gICAgICAgICAgICAgIHRhc2tEZWxCb3guYXBwZW5kQ2hpbGQodGFza0RlbCk7XG4gICAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RlbEJveCk7XG4gICAgICAgICAgICAgIHRhc2tEZWwuY2xhc3NMaXN0LmFkZCgndGFza2RlbCcpO1xuICAgICAgICAgICAgICB0YXNrRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tCb3gucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKG5ld1Rhc2spLCAxKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrSXNEb25lID0gKHRhc2spID0+IHRhc2suZG9uZSA9PT0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tzLmV2ZXJ5KGNoZWNrSXNEb25lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRG9uZS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICBuZXdUYXNrLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdUYXNrLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0lzRG9uZSA9ICh0YXNrKSA9PiB0YXNrLmRvbmUgPT09IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50YXNrcy5ldmVyeShjaGVja0lzRG9uZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGFza0JveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm94LmFwcGVuZENoaWxkKHJlbmRlclRhc2tCb3goKSk7XG4gICAgICAgICAgcmVuZGVyVGFza0JveCgpLmluc2VydEJlZm9yZShhZGRCdXR0b24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rhc2tib3gnKSk7XG4gICAgICAgICAgYm94LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIGVkaXREZWxCb3guYXBwZW5kQ2hpbGQoZWRpdEJveCk7XG4gICAgICAgIGVkaXREZWxCb3guYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuICAgICAgICBwcm9qTmFtZUJveC5hcHBlbmRDaGlsZChwcm9qRHVlRGF0ZSk7XG4gICAgICAgIHByb2pOYW1lQm94LmFwcGVuZENoaWxkKGVkaXREZWxCb3gpO1xuICAgICAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2pOYW1lQm94KTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGZvcm1Cb3gpO1xuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcmVuZGVyQWRkQm94LCBnZXRTdG9yYWdlLCBwb3B1bGF0ZVN0b3JhZ2UgfTtcbn0pKCk7XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgbWFrZVByb2plY3QucG9wdWxhdGVTdG9yYWdlKCk7XG59IGVsc2Uge1xuICBtYWtlUHJvamVjdC5nZXRTdG9yYWdlKCk7XG59XG5tYWtlUHJvamVjdC5yZW5kZXJBZGRCb3goKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==