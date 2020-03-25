const changeThemeColor = (theme) => {
  let body = $('body')

  switch (theme) {
    case 'white':

      body.css({
        "--main-theme-color": "white",
        "--main-theme-font-color": "black",
        "--main-box-shadow-color:": "rgb(0,0,0,.2)",
        "--main-box-shadow:": "0 5px 10px var(--main-box-shadow-color)",
        "--main-nav-color": "rgb(0,0,0,.05)",
        "--main-async-color": "#808080",
      })

      break;
    case 'black':

      body.css({
        "--main-theme-color": "#262626",
        "--main-theme-font-color": "white",
        "--main-box-shadow-color:": "rgb(0,0,0,.2)",
        "--main-box-shadow:": "0 5px 10px var(--main-box-shadow-color)",
        "--main-nav-color": "rgb(0,0,0,.8)",
        "--main-async-color": "808080",
      })

      break;
  }
}

const listenSettingsChangeMainColor = () => {
  const settingThemes = [
    {
      link: 'colorChangerCircle-light-orange',
      theme: 'black',
    },
    {
      link: 'colorChangerCircle-deepBlue',
      theme: 'white',
    },
    {
      link: 'colorChangerCircle-green',
      theme: 'black',
    },
    {
      link: 'colorChangerCircle-black-f',
      theme: 'black',
    },
    {
      link: 'colorChangerCircle-purple',
      theme: 'white',
    },
    {
      link: 'colorChangerCircle-white',
      theme: 'black',
    },
    {
      link: 'colorChangerCircle-orange',
      theme: 'black',
    },
  ]

  const changeColor = (item) => {
    let mainColor = $(getIdName(item.link)).attr("style")

    mainColor = mainColor.slice(mainColor.indexOf('#'), mainColor.length);
    $('body').css({
      "--main-block-background": mainColor
    })

    let active = $(getClassName("colorChangerCircle-active"))
    active.attr({
      "class": "colorChangerCircle"
    })

    let newActive = $(getIdName(item.link)).attr({
      "class": "colorChangerCircle colorChangerCircle-active"
    })

    changeThemeColor(item.theme)

    applicationState.settings.backgroundColor.theme = item.theme
    applicationState.settings.backgroundColor.link = item.link
    applicationState.settings.backgroundColor.color = mainColor
    appDataStore.set(applicationState)
  }

  settingThemes.forEach((item, i) => {
    $(getIdName(item.link)).click(() => {
      changeColor(item)
    })
  });
}
