const settings = new View(
  '.app',

  `
  <div class="settings-view">
    <div></div>
    <div class="settings">

      <h2>Settings</h2>
      
      <div class="settings-container">

        <div class="colorChanger flex">
          <h3>Theme color</h3>

          <div class="changeContainer flex">
            <div id="colorChangerCircle-black-f" class="colorChangerCircle" style="background: #ffffff"></div>
            <div id="colorChangerCircle-orange" class="colorChangerCircle" style="background: #ff6f00"></div>
            <div id="colorChangerCircle-light-orange" class="colorChangerCircle" style="background: #ffbb00"></div>
            <div id="colorChangerCircle-green" class="colorChangerCircle" style="background: #00ff59"></div>
            <div id="colorChangerCircle-deepBlue" class="colorChangerCircle" style="background: #0055ff"></div>
            <div id="colorChangerCircle-purple" class="colorChangerCircle" style="background: #5a1de9"></div>
          </div>
        </div>

      </div>

      <div class="settings-container">

        <div class="colorChanger flex">
          <h3>Wallpaper</h3>

          <div class="changeContainer">
            <div class="flex">
              <div id="wallpaper-mojave" class="wallpaperChangerItem" style="background-image: url(src/media/imgs/wallpaper-mojave.jpg);"></div>

              <div id="wallpaper-el-capitan" class="wallpaperChangerItem" style="background-image: url(src/media/imgs/wallpaper-el-capitan.jpg);"></div>

              <div id="wallpaper-sierra" class="wallpaperChangerItem" style="background-image: url(src/media/imgs/wallpaper-sierra.jpg);"></div>

              <div id="wallpaper-catalina" class="wallpaperChangerItem" style="background-image: url(src/media/imgs/wallpaper-catalina.jpg);"></div>
            </div>
          </div>
        </div>

      </div>

      <div class="settings-container">
        <div class="flex">
          <h3>Info</h3>

          <div style="" class="flex"><span style="color: #868686" class="flex"><span>version 1.0.0</span> <span style="font-weight: normal; border: 1px solid var(--main-block-background); padding: 3px 5px; font-size: 9px; margin: 0 0 0 5px; border-radius: 4px">Beta</span></span></div>
        </div>
      </div>

    </div>
  </div>
  `,

  'settings-view'
)
