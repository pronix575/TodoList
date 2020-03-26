const editTodoWindow = new View('.todos-view',
  `
    <div class="addTodoWindow editTodoWindow">
      <form class="addTodoForm flex">
        <div style="width: 100%">
          <div class="flex">
            <h3>Edit todo</h3>

            <div class="closeAddTodoWindow closeEditTodoWindow flex">
              <i class="fa fa-close"></i>
            </div>
          </div>

          <input type="text" placeholder="title"  id="editTodoTitle">
          <input type="text" placeholder="description" id="editTodoText">

          <div class="flex" style="width: 100%; justify-content: center">
            <div class="addTodoSaveBtn editTodoSaveBtn">Save</div>
          </div>
        </div>
      </form>
    </div>
  `,

  'editTodoWindow'
);
