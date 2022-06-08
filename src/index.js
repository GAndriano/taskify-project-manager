/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

// main file where projects and tasks are imported and DOM content rendered.

import { projectList, Project } from './project';
import Task from './task';

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
      const newProject = new Project(projNameValue, projDateValue, false, []);
      projectList.push(newProject);
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
        projectList.splice(Number(projectList.indexOf(newProject)), 1);
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

          const newTask = new Task(taskTitleValue, taskDueValue, false);
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
    localStorage.setItem('projects', JSON.stringify(projectList));
  }

  // returns project info and displays them
  function getStorage() {
    const projects = Array.from(JSON.parse(localStorage.getItem('projects')));

    if (localStorage.getItem('projects')) {
      projects.forEach((project) => {
        projectList.push(project);
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
          projectList.splice(Number(projectList.indexOf(project)), 1);
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

              const newTask = new Task(taskTitleValue, taskDueValue, false);
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
