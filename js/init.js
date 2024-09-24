function formate(i) {
    if (i == 'webtitle') {
        document.title = data[i].l;
        return
    }
    if (i == "swiper") {
        for (let j in data['swiper']) {
            appendDiv(data['swiper'][j])
        }
        return
    }
    let p = $(`#${i}`)[0];
    if (p == undefined) {
        return
    }
    if (p.nodeName == "H1" || p.nodeName == "SPAN" || p.nodeName == "H2") {
        p.innerText = data[i].l
        if (data[i].v) {
            p.href = data[i].v
        }
    }
    if (p.nodeName == "VIDEO") {
        p.poster = data[i].l
        p.src = data[i].v
        p.firstElementChild.src = data[i].v
    }
    if (p.nodeName == "DIV") {
        if (i != "Installcopy") {
            p.firstElementChild.innerHTML = data[i].l
        } else {
            p.href = data[i].v
        }
    }
    if (p.nodeName == "IMG") {
        p.src = data[i].v
    }
    if (p.nodeName == "A") {
        if (i != "SimilargamesTitlecopy" && i != "MorebyLevelInfinitecopy") {
            if (p.children[p.children.length - 1]) {
                p.children[p.children.length - 1].innerText = data[i].l
            } else {
                p.innerText = data[i].l
            }
        }
        p.href = data[i].v
    }
    if (p.nodeName == "BUTTON") {
        if (p.firstChild) {
            p.firstChild.firstChild.innerText = data[i].l
            p.firstChild.lastChild.setAttribute('data-href', data[i].v)
            p.childNodes[1].href = data[i].v
        } else {
            p.innerText = data[i].l
            p.href = data[i].v
        }
    }
}

function addId() {
    let arr = [
        'hlGamesCopy', 'hlGamesCopy1',
        "hlAppscopy", "hlAppscopy1",
        "hlMoviescopy1", "hlMoviescopy",
        "hlBookscopy", "hlBookscopy1",
        "hlKidscopy", "hlKidscopy1",
        "starcopy", "starcopy1",
        "agecopy", "hlnamecopy", "hlnamecopy1",
        "Trailercopy", "Installcopy",
        "SimilargamesTitlecopy",
        "MorebyLevelInfinitecopy", "countrycopy"
    ]
    for (let i in arr) {
        data[arr[i]] = data[arr[i].replace(/copy[0-9]?/gi, '')]
    }
}
addId()

$('document').ready(() => {
    let link = document.createElement('link')
    link.rel = 'shortcut icon'
    link.href = data.webtitle.v
    document.head.appendChild(link)
    for (let i in data) {
        formate(i)
    }
    new Vue({
        el: "#app"
    })
    new Vue({
        el: "#app1"
    })
    new Vue({
        el: "#app2"
    })
    document.body.style.display = 'block'
    // videoInit()
    stopScale()
})
let video;

function videoInit() {
    video = videojs('Video', {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        loop: true,
        controlBar: false,
        preload: 'auto',
        muted: true,
        // src:data['Video'].v,
        poster: data['Video'].l
    });
    video.play()
    document.addEventListener('click', () => {
        video.play()
    })
}

function go() {
    // console.log(event.target.href)
    // return
    if (event.target.href)
        window.open(event.target.href)
    else {
        window.open(data['Video'].t)
    }
}

function stopScale() {
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });

    // 禁止移动端（IOS）双击页面变大
    let touchTime = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener(
        'touchend',
        function(event) {
            //记录当前点击的时间与下一次时间的间隔
            const nowTime = new Date();
            if (nowTime.getTime() - touchTime <= 300) {
                // event.preventDefault();
            }
            touchTime = nowTime.getTime();
        },
        false
    );
}