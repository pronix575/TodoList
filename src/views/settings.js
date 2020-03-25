const settings = new View(
  '.app',

  `
  <div class="settings-view">
    <div></div>
    <div class="settings flex">

      <div class="settings-container">
        <!-- <h2>Settings</h2> -->

        <div class="colorChanger flex">
            <h3>Main Color</h3>

            <div class="colorChangerCircles flex">
              <div id="colorChangerCircle-black-f" class="colorChangerCircle" style="background: #ffffff"></div>
              <div id="colorChangerCircle-orange" class="colorChangerCircle" style="background: #ff6f00"></div>
              <div id="colorChangerCircle-light-orange" class="colorChangerCircle" style="background: #ffbb00"></div>
              <div id="colorChangerCircle-green" class="colorChangerCircle" style="background: #00ff59"></div>
              <div id="colorChangerCircle-deepBlue" class="colorChangerCircle" style="background: #0055ff"></div>
              <div id="colorChangerCircle-purple" class="colorChangerCircle" style="background: #5a1de9"></div>
            </div>
        </div>

      </div>

    </div>
  </div>
  `,

  'settings-view'
)
