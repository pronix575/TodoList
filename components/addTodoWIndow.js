const addTodoWindow = new View('.todos-view',
  `
    <div class="addTodoWindow">
      <form class="addTodoForm flex">
        <div style="width: 100%">
          <div class="flex">
            <h3>Add todo</h3>

            <div class="closeAddTodoWindow flex">
              <i class="fa fa-close"></i>
            </div>
          </div>

          <input type="text" placeholder="title" id="addTodoTitle">
          <input type="text" placeholder="description" id="addTodoText">

          <div class="flex" style="width: 100%; justify-content: center">
            <div class="addTodoSaveBtn">Save</div>
          </div>
        </div>
      </form>
    </div>
  `,

  'addTodoWindow'
);
