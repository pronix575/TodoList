const menu = new View(
  '.app',

  `
    <div class="routerMenu">
      <div class="startRouterMenu">
        <div style="margin: 0; padding: 0; font-weight: bold; font-size: 25px; width: 100%">Todo<span style="color: var(--main-block-background)">List</span></div>
        <div class="routerLink flex routerLink-todos"><span>Todos</span><i class="fa fa-sticky-note-o"></i></div>
        <div class="routerLink flex routerLink-dashboard"><span>Dashboard</span><i class="fa fa-area-chart"></i></div>
        <div class="routerLink flex routerLink-settings"><span>Settings</span><i class="fa fa-gear"></i></div>
      </div>
      <div>
        <p class="developedByIskanderKarimovStudio">
          <span style="opacity: .8">developed by</span> <br>
          <span style="font-size: 17px; font-weight: bold">Iskander Karimov <span style="color: var(--main-block-background)">Studio</span></span> <br>
          <!--<span style="font-size: 17px; font-weight: bold">Rakhmatullin <span style="color: var(--main-block-background)">Industries</span></span>-->
        </p>
      </div>
    </div>
  `,

  'routerMenu'
)
