const hideMenuDiv = document.getElementById('hideMenuDiv')
const sideMenu = document.getElementById('sideMenu')
const deskMenu = document.getElementById('deskMenu')
const changeI = document.getElementById('changeI')
const scrollHide = document.getElementById('scrollHide')
const contentNews = document.getElementById('contentNews')
const deskMenuDiv = document.querySelectorAll('.deskMenuDiv')
const marq = document.querySelectorAll('.marq')

function openCloseMenu() { hideMenuDiv.classList.toggle('hidden') }
openCloseMenu()

const sideMenuArr = ['Ana səhifə', 'Siyasət', 'İqtisadiyyat', 'Cəmiyyət', 'Ordu', 'Şou-biznes', 'Kriminal', 'idman', 'Mədəniyyət', 'Dünya', 'Hadisə', 'Müsahibə', 'Turizm', 'İKT', 'Baku TV', 'CineMastercard', 'Digər', 'Maraqlı']

function addMenu() {
    sideMenu.innerHTML = ''
    deskMenu.innerHTML = ''
    sideMenuArr.map(item => {
        sideMenu.innerHTML += `<a href="#" class="text-[#051d39] text-[14px] font-[600] p-[6px_16px] rounded-[16px] border border-[#e8e8e8] transition duration-300 hover:bg-[#f5f5f5]">
                                    ${item}
                                </a>`
        deskMenu.innerHTML += `<div class="w-[15%] text-center">
                                    <a href="#" class="text-[#051d39] text-nowrap text-[16px] font-[600] p-[6px_16px] rounded-[16px] border border-[#e8e8e8] transition duration-300 hover:bg-[#f5f5f5]">
                                        ${item}
                                    </a>
                                </div>`
    })
}
addMenu()

let flag = true

function showHideMenu() {
    changeI.classList.toggle('fa-xmark')
    deskMenuDiv[0].classList.toggle('max-h-[500px]')
    if (flag) deskMenuDiv[1].classList.remove('hidden')
    else setTimeout(() => deskMenuDiv[1].classList.add('hidden'), 500)
    flag = !flag
    openCloseMenu()
}

let lastScrollTop = 0

window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY
    scrollHide.style.maxHeight = currentScroll < lastScrollTop ? '500px' : 0
    lastScrollTop = currentScroll;
})

const NEWS = []

function showFetch() {
    fetch('https://67ee9259c11d5ff4bf7a1d3f.mockapi.io/oxuaz')
        .then(res => res.json())
        .then(info => {
            NEWS.length = 0
            NEWS.push(...info)
            showNews()
        })
}

showFetch()

function showNews() {
    contentNews.innerHTML = ''
    NEWS.map(item => {
        contentNews.innerHTML += `
                            <article class="flex flex-col bg-[#fafaf9] rounded-[6px] overflow-hidden border">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" class="object-cover w-full h-52 bg-gray-500" src="${item.img}">
                                </a>
                                <div class="flex flex-col flex-1 p-[18px_14px]">
                                    <p class="text-[12px] tracking-[.96px] font-medium text-[#777]">
                                        <i class="fa-regular fa-calendar-plus"></i>
                                        <span class="mr-[14px] uppercase">${item.date} / <span>14:20</span></span>
                                        <i class="fa-solid fa-eye"></i>
                                        <span>${item.view}</span>
                                    </p>
                                    <a href="#" class="flex-1 p-[12px_0_14px_0] text-[#051d39] text-[18px] font-[600] tracking-[-.72px] leading-[28px]">${item.title}</a>
                                    <div class="flex flex-wrap justify-between items-center">
                                        <a href="#" class="text-[12px] text-[#1894a0] font-bold uppercase">${item.category}</a>
                                        <div class="text-[#777] flex">
                                            <div class="group cursor-pointer flex items-center gap-2">
                                                <i class="fa-regular group-hover:text-[#1894a0] transition duration-200 text-[20px] fa-thumbs-up"></i>
                                                <span class="text-[12px]">${item.like}</span>
                                            </div>
                                            <div class="group cursor-pointer ml-3 flex items-center gap-2">
                                                <i class="fa-regular group-hover:text-[#ff5f2d] transition duration-200 ml-5 text-[20px] fa-thumbs-down"></i>
                                                <span class="text-[12px]">${item.dislike}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>`
            marq[0].innerHTML += `<div class="ml-3 inline-block relative pl-2"> <div class="w-[3px] absolute top-[50%] left-0 translate-y-[-50%] h-[3px] rounded-[50%] bg-white"></div> ${item.title}</div>`
            marq[1].innerHTML += `<div class="ml-3 inline-block relative pl-2"> <div class="w-[3px] absolute top-[50%] left-0 translate-y-[-50%] h-[3px] rounded-[50%] bg-white"></div> ${item.title}</div>`
    })
}