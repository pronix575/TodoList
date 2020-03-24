const todos = new View('.app',
`
  <div class="todos-view">
    <div>
    </div>
    <div class="start column" style="border-radius: 10px 0 0 0">
      <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
        <h3>Todos</h3>
      </div>
      <div class="add-todo">
        + add
      </div>
    </div>
    <div class="in-progress column">
      <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
        <h3>In Progress</h3>
      </div>
    </div>
    <div class="done column">
      <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
        <h3>Done</h3>
      </div>
    </div>
  </div>
`,

'todos-view'
);
