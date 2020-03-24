const menu = new View(
  '.app',

  `
    <div class="routerMenu">
      <div style="margin: 0; padding: 0; font-weight: bold; font-size: 25px; width: 100%">Todo<span style="color: var(--main-block-background)">List</span></div>
      <div class="routerLink flex routerLink-todos"><span>Todos</span><i class="fa fa-sticky-note-o"></i></div>
      <div class="routerLink flex routerLink-dashboard"><span>Dashboard</span><i class="fa fa-area-chart"></i></div>
      <div class="routerLink flex routerLink-settings"><span>Settings</span><i class="fa fa-gear"></i></div>
    </div>
  `,

  'routerMenu'
)
