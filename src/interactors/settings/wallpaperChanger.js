const getBackgroundImgIdName = (link) => `wallpaper-${link}`;
const getBackgroundImgLinkName = (link) => `url(src/media/imgs/wallpaper-${link}.jpg)`;

const changeBackgroundImg = (item) => {
    // let newLink = $(getIdName(item)).css("background-image")

    $(".backgroundImg-content").css({
        "background-image": getBackgroundImgLinkName(item),
    })

    $(".wallpaperChangerItem-active").attr({
        "class": "wallpaperChangerItem"
    })

    $(getIdName(getBackgroundImgIdName(item))).attr({
        "class": "wallpaperChangerItem wallpaperChangerItem-active"
    })

    applicationState.settings.backgroundImg.link = item
    applicationState.settings.backgroundImg.url = getBackgroundImgLinkName(item)
    appDataStore.set(applicationState)
}

const listenChangeBackgroundImg = () => {
    let links = [
        'mojave',
        'el-capitan',
        'sierra',
        'catalina',
    ]

    links.forEach((item) => {
        $(getIdName(getBackgroundImgIdName(item))).click(() => {
            changeBackgroundImg(item)
        })
    })
}