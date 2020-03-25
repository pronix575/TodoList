const listenSettingsChangeMainColor = () => {
  const settingColors = [
    'colorChangerCircle-blue',
    'colorChangerCircle-deepBlue',
    'colorChangerCircle-green',
    'colorChangerCircle-black',
    'colorChangerCircle-orange'
  ]

  const changeColor = (item) => {
    let mainColor = $(getIdName(item)).attr("style")

    mainColor = mainColor.slice(mainColor.indexOf('#'), mainColor.length);
    $('body').css({
      "--main-block-background": mainColor
    })

    let active = $(getClassName("colorChangerCircle-active"))
    active.attr({
      "class": "colorChangerCircle"
    })

    let newActive = $(getIdName(item)).attr({
      "class": "colorChangerCircle colorChangerCircle-active"
    })

    applicationState.settings.backgroundColor.link = item
    applicationState.settings.backgroundColor.color = mainColor
    appDataStore.set(applicationState)
  }

  settingColors.forEach((item, i) => {
    $(getIdName(item)).click(() => {
      changeColor(item)
    })
  });
}
