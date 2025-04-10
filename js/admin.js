checkVerify()

const newsDiv = document.getElementById('newsDiv')
const tbl = document.getElementById('tbl')
const titleInp = document.getElementById('titleInp')
const textInp = document.getElementById('textInp')
const imgInp = document.getElementById('imgInp')
const dateInp = document.getElementById('dateInp')
const sayInp = document.getElementById('sayInp')
const popInp = document.getElementById('popInp')
const btnChange = document.getElementById('btnChange')
const changeText = document.getElementById('changeText')

const DATA = []

function objNews() {
    const newsObj = {
        title: titleInp.value,
        description: textInp.value,
        img: imgInp.value,
        date: dateInp.value,
        view: sayInp.value,
        is_popular: popInp.checked,
    }
    return newsObj
}

function addNews() {
    if (validation()) return

    fetch('https://67ee9259c11d5ff4bf7a1d3f.mockapi.io/oxuaz', {
        method: "POST",
        body: JSON.stringify(objNews(),),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json)
        .then(info => getNews())
}

function getNews() {
    clearInps()

    fetch('https://67ee9259c11d5ff4bf7a1d3f.mockapi.io/oxuaz')
        .then(res => res.json())
        .then(info => {
            DATA.length = 0
            DATA.push(...info)
            showTable()
        })
}

getNews()

function showTable() {
    let kod = ''

    DATA.map((item, i) => {
        kod += `
                    <tr class=" h-[50px] bg-[#fafafc]">
                        <td class="border px-3 py-2"><img width="50" height="50" src="${item.img}" class="cLover" alt="photo"/></td>
                        <td class="border px-3 py-2">${item.title}</td>
                        <td class="border px-3 py-2">${item.description}</td>
                        <td class="border px-3 py-2 text-nowrap">${item.date}</td>
                        <td class="border px-3 py-2">${item.view}</td>
                        <td class="border px-3 py-2">${item.is_popular ? 'Populyardir' : 'Sadədir'}</td>
                        <td onclick="editNews('${item.id}')" class="border px-3 py-2"><i class="fa-solid fa-edit text-green-600 cursor-pointer"></i></td>
                        <td onclick="delNews('${item.id}', ${i})" class="border px-3 py-2"><i class="fa-solid fa-trash text-red-600 cursor-pointer"></i></td>
                    <tr/>`
    })
    tbl.innerHTML = kod
}

function delNews(id, i) {
    fetch(`https://67ee9259c11d5ff4bf7a1d3f.mockapi.io/oxuaz/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(info => {
            DATA.splice(i, 1)
            showTable()
        })
}

function editNews(id) {
    openNewsDiv()
    const editData = DATA.find(item => item.id == id)
    btnChange.onclick = () => editFetch(id)
    btnChange.innerHTML = 'Dəyişdir'
    changeText.innerHTML = 'Xəbər dəyişdir'
    titleInp.value = editData.title
    textInp.value = editData.description
    imgInp.value = editData.img
    dateInp.value = editData.date
    sayInp.value = editData.view
}

function editFetch(id) {
    fetch(`https://67ee9259c11d5ff4bf7a1d3f.mockapi.io/oxuaz/${id}`, {
        method: "PUT",
        body: JSON.stringify(objNews(),),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json)
        .then(info => {
            getNews()
            openNewsDiv()
        })
}

function clearInps() {
    titleInp.value = ''
    textInp.value = ''
    imgInp.value = ''
    dateInp.value = ''
    sayInp.value = ''
}

function openNewsDiv(arg) {
    newsDiv.classList.toggle('hidden')
    if (arg) {
        clearInps()
        btnChange.onclick = () => addNews()
        btnChange.innerHTML = 'Yüklə'
        changeText.innerHTML = 'Xəbər yerləşdir'
    }
}
openNewsDiv()

function validation() {
    titleInp.style.borderColor = 'gray'
    textInp.style.borderColor = 'gray'
    imgInp.style.borderColor = 'gray'
    dateInp.style.borderColor = 'gray'
    sayInp.style.borderColor = 'gray'

    if (titleInp.value.trim() == '') {
        titleInp.style.borderColor = 'red'
        titleInp.focus()
        return true
    }
    if (textInp.value.trim() == '') {
        textInp.style.borderColor = 'red'
        textInp.focus()
        return true
    }
    if (imgInp.value.trim() == '') {
        imgInp.style.borderColor = 'red'
        imgInp.focus()
        return true
    }
    if (dateInp.value.trim() == '') {
        dateInp.style.borderColor = 'red'
        dateInp.focus()
        return true
    }
    if (sayInp.value.trim() == '') {
        sayInp.style.borderColor = 'red'
        sayInp.focus()
        return true
    }
}
