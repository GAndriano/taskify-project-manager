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

  return { renderAddBox, getStorage };
})();
window.onload = makeProject.getStorage();
makeProject.renderAddBox();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZSBmb3IgY3JlYXRpbmcgcHJvamVjdHMgYW5kIGFuIGFycmF5IGZvciBzdG9yaW5nIHRoZW1cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWUsIGRvbmUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlID0gZHVlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmRvbmUgPSBkb25lO1xuICB9XG5cbiAgZGVsZXRlVGFzayA9IChuZXdUYXNrKSA9PiB0aGlzLnRhc2tzLnNwbGljZSgodGhpcy50YXNrcy5pbmRleE9mKG5ld1Rhc2spKSwgMSk7XG5cbiAgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbmV4cG9ydCB7IHByb2plY3RMaXN0LCBQcm9qZWN0IH07XG4iLCIvLyBtb2R1bGUgdGhhdCBtYWtlcyB0aGUgdGFza3NcbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgZG9uZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8vIG1haW4gZmlsZSB3aGVyZSBwcm9qZWN0cyBhbmQgdGFza3MgYXJlIGltcG9ydGVkIGFuZCBET00gY29udGVudCByZW5kZXJlZC5cblxuaW1wb3J0IHsgcHJvamVjdExpc3QsIFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuY29uc3QgbWFrZVByb2plY3QgPSAoKCkgPT4ge1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvLyBtYWtlcyB0aGUgZmlyc3QgJ2FkZCBwcm9qZWN0JyBib3hcbiAgY29uc3QgcmVuZGVyQWRkQm94ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2FkZGJveCcpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRidG4nKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgY29uc3QgYm94dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveHRleHQuY2xhc3NMaXN0LmFkZCgnYm94dGV4dCcpO1xuICAgIGJveHRleHQudGV4dENvbnRlbnQgPSAnYWRkIHByb2plY3QnO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgYWRkRm9ybShib3gpO1xuICAgICAgbWFrZVByb2plY3QucmVuZGVyQWRkQm94KCk7XG4gICAgfSk7XG4gICAgYm94LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYm94LmFwcGVuZENoaWxkKGJveHRleHQpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYm94KTtcblxuICAgIHJldHVybiBib3g7XG4gIH07XG5cbiAgLy8gbWFrZXMgdGhlIHJlc3Qgb2YgdGhlIHByb2plY3QgYm94XG4gIGNvbnN0IGFkZEZvcm0gPSAoYm94KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgYm94LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgZm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Cb3guY2xhc3NMaXN0LmFkZCgnZm9ybWJveCcpO1xuICAgIGJveC5hcHBlbmRDaGlsZChmb3JtQm94KTtcblxuICAgIGNvbnN0IHByb2pOYW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvak5hbWVCb3guY2xhc3NMaXN0LmFkZCgncHJvam5hbWVib3gnKTtcblxuICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qbmFtZScpO1xuICAgIHByb2pOYW1lLnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvak5hbWVCb3gpO1xuICAgIHByb2pOYW1lLmZvY3VzKCk7XG4gICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qTmFtZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgfSk7XG4gICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHByb2pOYW1lLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICB9KTtcblxuICAgIGxldCBwcm9qTmFtZVZhbHVlID0gcHJvak5hbWUudmFsdWU7XG4gICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwcm9qTmFtZVZhbHVlID0gcHJvak5hbWUudmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvamR1ZWRhdGUnKTtcbiAgICBwcm9qRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGxldCBwcm9qRGF0ZVZhbHVlID0gcHJvakR1ZURhdGUudmFsdWU7XG4gICAgcHJvakR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwcm9qRGF0ZVZhbHVlID0gcHJvakR1ZURhdGUudmFsdWU7XG4gICAgfSk7XG4gICAgcHJvakR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgfSk7XG4gICAgcHJvakR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICB9KTtcblxuICAgIHByb2pOYW1lQm94LmFwcGVuZENoaWxkKHByb2pEdWVEYXRlKTtcblxuICAgIGNvbnN0IGNvbmZpcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtQm94LmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1ib3gnKTtcblxuICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY29uZmlybXByb2plY3QnKTtcbiAgICBjb25maXJtUHJvamVjdC50ZXh0Q29udGVudCA9ICdjb25maXJtJztcbiAgICBjb25maXJtUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qTmFtZVZhbHVlLCBwcm9qRGF0ZVZhbHVlLCBmYWxzZSwgW10pO1xuICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgY29uc3QgZWRpdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBlZGl0Qm94LmNsYXNzTGlzdC5hZGQoJ2VkaXRib3gnKTtcbiAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plZGl0Jyk7XG4gICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0LnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBlZGl0Q29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0Qm94LmFwcGVuZENoaWxkKGVkaXRDb25maXJtKTtcbiAgICAgICAgZWRpdENvbmZpcm0udGV4dENvbnRlbnQgPSAnZG9uZSc7XG4gICAgICAgIGVkaXRDb25maXJtLmNsYXNzTGlzdC5hZGQoJ3Byb2plZGl0Jyk7XG4gICAgICAgIGVkaXRDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG5ld1Byb2plY3QubmFtZSA9IHByb2pOYW1lVmFsdWU7XG4gICAgICAgICAgbmV3UHJvamVjdC5kdWUgPSBwcm9qRGF0ZVZhbHVlO1xuICAgICAgICAgIGVkaXRDb25maXJtLnJlbW92ZSgpO1xuICAgICAgICAgIGVkaXRCb3guYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBlZGl0Qm94LmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICBjb25maXJtQm94LmNsYXNzTGlzdC5yZXBsYWNlKCdjb25maXJtYm94JywgJ2VkaXRkZWxib3gnKTtcbiAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKE51bWJlcihwcm9qZWN0TGlzdC5pbmRleE9mKG5ld1Byb2plY3QpKSwgMSk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICBib3gucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcbiAgICAgIGRlbC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgIGNvbmZpcm1Qcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgY29uZmlybUJveC5hcHBlbmRDaGlsZChlZGl0Qm94KTtcbiAgICAgIGNvbmZpcm1Cb3guYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tCb3goKSB7XG4gICAgICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrYm94Jyk7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGxldCB0YXNrVGl0bGVWYWx1ZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgdGFza1RpdGxlLnBsYWNlaG9sZGVyID0gJ3Rhc2sgbmFtZSc7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tUaXRsZVZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGxldCB0YXNrRHVlVmFsdWUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza2R1ZWRhdGUnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGFza0R1ZVZhbHVlID0gdGFza0R1ZURhdGUudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGFza0RvbmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrRG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrZG9uZScpO1xuICAgICAgICB0YXNrRG9uZUJveC5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG4gICAgICAgIHRhc2tEb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb25maXJtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb25maXJtQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgdGFza0NvbmZpcm1Cb3guc3R5bGUuaGVpZ2h0ID0gJzI2cHgnO1xuICAgICAgICB0YXNrQ29uZmlybUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBjb25zdCB0YXNrQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ29uZmlybS50ZXh0Q29udGVudCA9ICdjb25maXJtJztcbiAgICAgICAgdGFza0NvbmZpcm0uY2xhc3NMaXN0LmFkZCgncHJvamVkaXQnKTtcbiAgICAgICAgdGFza0NvbmZpcm0uc3R5bGUuZm9udFNpemUgPSAnMTVweCc7XG4gICAgICAgIHRhc2tDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tDb25maXJtLnJlbW92ZSgpO1xuICAgICAgICAgIHRhc2tDb25maXJtQm94LnJlbW92ZSgpO1xuICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RvbmVCb3gpO1xuXG4gICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZVZhbHVlLCB0YXNrRHVlVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGVsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGFza0RlbEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsQm94Jyk7XG4gICAgICAgICAgY29uc3QgdGFza0RlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRhc2tEZWwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgICAgdGFza0RlbEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrZGVsYm94Jyk7XG4gICAgICAgICAgdGFza0RlbEJveC5hcHBlbmRDaGlsZCh0YXNrRGVsKTtcbiAgICAgICAgICB0YXNrRGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZWwnKTtcbiAgICAgICAgICB0YXNrRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0JveC5yZW1vdmUoKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuZGVsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0LnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2tEb25lLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgbmV3VGFzay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VGFzay5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hlY2tJc0RvbmUgPSAodGFzaykgPT4gdGFzay5kb25lID09PSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAobmV3UHJvamVjdC50YXNrcy5ldmVyeShjaGVja0lzRG9uZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RlbEJveCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrQ29uZmlybUJveC5hcHBlbmRDaGlsZCh0YXNrQ29uZmlybSk7XG4gICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0NvbmZpcm1Cb3gpO1xuXG4gICAgICAgIHJldHVybiB0YXNrQm94O1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFza2FkZGJ1dHRvbicpO1xuICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICAgIGNvbnN0IHByb2pOYW1lQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJvam5hbWVib3gnKTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKHJlbmRlclRhc2tCb3goKSk7XG4gICAgICAgIHJlbmRlclRhc2tCb3goKS5pbnNlcnRCZWZvcmUoYWRkQnV0dG9uLCBwcm9qTmFtZUJveCk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgfSk7XG4gICAgICByZW5kZXJUYXNrQm94KCk7XG5cbiAgICAgIGJveC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgY29uZmlybUJveC5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdCk7XG4gICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQoY29uZmlybUJveCk7XG4gIH07XG5cbiAgLy8gc3RvcmVzIHByb2plY3QgaW5mb1xuICBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgfVxuXG4gIC8vIHJldHVybnMgcHJvamVjdCBpbmZvIGFuZCBkaXNwbGF5cyB0aGVtXG4gIGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2FkZGJveCcpO1xuICAgICAgICBjb25zdCBmb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Cb3guY2xhc3NMaXN0LmFkZCgnZm9ybWJveCcpO1xuXG4gICAgICAgIGNvbnN0IHByb2pOYW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pOYW1lQm94LmNsYXNzTGlzdC5hZGQoJ3Byb2puYW1lYm94Jyk7XG5cbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qbmFtZScpO1xuICAgICAgICBwcm9qTmFtZS52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuICAgICAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2pOYW1lQm94KTtcbiAgICAgICAgcHJvak5hbWUuZm9jdXMoKTtcbiAgICAgICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgcHJvak5hbWUuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb2pEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvamR1ZWRhdGUnKTtcbiAgICAgICAgcHJvakR1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgcHJvakR1ZURhdGUudmFsdWUgPSBwcm9qZWN0LmR1ZTtcbiAgICAgICAgcHJvakR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvakR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVkaXREZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdERlbEJveC5jbGFzc0xpc3QuYWRkKCdlZGl0ZGVsYm94Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdEJveC5jbGFzc0xpc3QuYWRkKCdlZGl0Ym94Jyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWRpdCcpO1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGVkaXQucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgZWRpdENvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBlZGl0Qm94LmFwcGVuZENoaWxkKGVkaXRDb25maXJtKTtcbiAgICAgICAgICBlZGl0Q29uZmlybS50ZXh0Q29udGVudCA9ICdkb25lJztcbiAgICAgICAgICBlZGl0Q29uZmlybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWRpdCcpO1xuICAgICAgICAgIGVkaXRDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gcHJvak5hbWUudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0LmR1ZSA9IHByb2pEdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgZWRpdENvbmZpcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBlZGl0Qm94LmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoTnVtYmVyKHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpLCAxKTtcbiAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoTnVtYmVyKHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCkpLCAxKTtcbiAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICBib3gucmVtb3ZlKCk7XG4gICAgICAgICAgaWYgKHByb2plY3QudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcbiAgICAgICAgZGVsLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrYm94Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza3RpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkdWVkYXRlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEb25lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0YXNrRG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrZG9uZScpO1xuICAgICAgICAgICAgdGFza0RvbmVCb3guYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuICAgICAgICAgICAgdGFza0RvbmUudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrSXNEb25lID0gKHRhc2spID0+IHRhc2suZG9uZSA9PT0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRhc2suZG9uZSA9PT0gdHJ1ZSAmJiBwcm9qZWN0LnRhc2tzLmV2ZXJ5KGNoZWNrSXNEb25lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGFza0RvbmUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgdGFza0RvbmVCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRvbmUgPT09IHRydWUgJiYgcHJvamVjdC50YXNrcy5ldmVyeShjaGVja0lzRG9uZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHRhc2tEb25lLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhc2tEb25lLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRG9uZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0RvbmUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFzay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tzLmV2ZXJ5KGNoZWNrSXNEb25lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRG9uZUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRG9uZUJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2tEb25lLmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICB0YXNrLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHByb2plY3QuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdXBkYXRlRG9uZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEZWwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgICAgICB0YXNrRGVsQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZWxib3gnKTtcbiAgICAgICAgICAgIHRhc2tEZWxCb3guYXBwZW5kQ2hpbGQodGFza0RlbCk7XG4gICAgICAgICAgICB0YXNrRGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZWwnKTtcbiAgICAgICAgICAgIHRhc2tEZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tCb3gucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRG9uZUJveCk7XG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEZWxCb3gpO1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRhc2tCb3gpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrYWRkYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tCb3goKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tib3gnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgbGV0IHRhc2tUaXRsZVZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdGFza1RpdGxlLnBsYWNlaG9sZGVyID0gJ3Rhc2sgbmFtZSc7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza3RpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZVZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBsZXQgdGFza0R1ZVZhbHVlID0gdGFza0R1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrZHVlZGF0ZScpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tEdWVWYWx1ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRG9uZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGFza0RvbmUuY2xhc3NMaXN0LmFkZCgndGFza2RvbmUnKTtcbiAgICAgICAgICAgIHRhc2tEb25lQm94LmFwcGVuZENoaWxkKHRhc2tEb25lKTtcbiAgICAgICAgICAgIHRhc2tEb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29uZmlybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NvbmZpcm1Cb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgdGFza0NvbmZpcm1Cb3guc3R5bGUuaGVpZ2h0ID0gJzI2cHgnO1xuICAgICAgICAgICAgdGFza0NvbmZpcm1Cb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ29uZmlybS50ZXh0Q29udGVudCA9ICdjb25maXJtJztcbiAgICAgICAgICAgIHRhc2tDb25maXJtLmNsYXNzTGlzdC5hZGQoJ3Byb2plZGl0Jyk7XG4gICAgICAgICAgICB0YXNrQ29uZmlybS5zdHlsZS5mb250U2l6ZSA9ICcxNXB4JztcbiAgICAgICAgICAgIHRhc2tDb25maXJtQm94LmFwcGVuZENoaWxkKHRhc2tDb25maXJtKTtcbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0NvbmZpcm1Cb3gpO1xuICAgICAgICAgICAgdGFza0NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhc2tDb25maXJtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB0YXNrQ29uZmlybUJveC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRG9uZUJveCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZVZhbHVlLCB0YXNrRHVlVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcblxuICAgICAgICAgICAgICBjb25zdCB0YXNrRGVsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRhc2tEZWxCb3guY2xhc3NMaXN0LmFkZCgndGFza0RlbEJveCcpO1xuICAgICAgICAgICAgICBjb25zdCB0YXNrRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRhc2tEZWwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgICAgICAgIHRhc2tEZWxCb3guY2xhc3NMaXN0LmFkZCgndGFza2RlbGJveCcpO1xuICAgICAgICAgICAgICB0YXNrRGVsQm94LmFwcGVuZENoaWxkKHRhc2tEZWwpO1xuICAgICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEZWxCb3gpO1xuICAgICAgICAgICAgICB0YXNrRGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZWwnKTtcbiAgICAgICAgICAgICAgdGFza0RlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrQm94LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuaW5kZXhPZihuZXdUYXNrKSwgMSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0lzRG9uZSA9ICh0YXNrKSA9PiB0YXNrLmRvbmUgPT09IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50YXNrcy5ldmVyeShjaGVja0lzRG9uZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICBwcm9qTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2EzZTYzNSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHByb2pEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRhc2tEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0RvbmUuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3VGFzay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTNlNjM1JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VGFzay5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHRhc2tEb25lQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJc0RvbmUgPSAodGFzaykgPT4gdGFzay5kb25lID09PSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGFza3MuZXZlcnkoY2hlY2tJc0RvbmUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgcHJvak5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgICAgcHJvakR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhM2U2MzUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgIHByb2pOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICBwcm9qRHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRhc2tCb3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJveC5hcHBlbmRDaGlsZChyZW5kZXJUYXNrQm94KCkpO1xuICAgICAgICAgIHJlbmRlclRhc2tCb3goKS5pbnNlcnRCZWZvcmUoYWRkQnV0dG9uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YXNrYm94JykpO1xuICAgICAgICAgIGJveC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0Qm94LmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICBlZGl0RGVsQm94LmFwcGVuZENoaWxkKGVkaXRCb3gpO1xuICAgICAgICBlZGl0RGVsQm94LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIHByb2pOYW1lQm94LmFwcGVuZENoaWxkKHByb2pOYW1lKTtcbiAgICAgICAgcHJvak5hbWVCb3guYXBwZW5kQ2hpbGQocHJvakR1ZURhdGUpO1xuICAgICAgICBwcm9qTmFtZUJveC5hcHBlbmRDaGlsZChlZGl0RGVsQm94KTtcbiAgICAgICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qTmFtZUJveCk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChmb3JtQm94KTtcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHJlbmRlckFkZEJveCwgZ2V0U3RvcmFnZSB9O1xufSkoKTtcbndpbmRvdy5vbmxvYWQgPSBtYWtlUHJvamVjdC5nZXRTdG9yYWdlKCk7XG5tYWtlUHJvamVjdC5yZW5kZXJBZGRCb3goKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==