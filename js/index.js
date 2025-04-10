const hideMenuDiv = document.getElementById('hideMenuDiv')
const sideMenu = document.getElementById('sideMenu')

function openCloseMenu() { hideMenuDiv.classList.toggle('hidden') }
openCloseMenu()

const sideMenuArr = ['Ana səhifə', 'Siyasət', 'İqtisadiyyat', 'Cəmiyyət', 'Ordu', 'Şou-biznes', 'Kriminal', 'idman', 'Mədəniyyət', 'Dünya', 'Hadisə', 'Müsahibə', 'Turizm', 'İKT', 'Baku TV', 'CineMastercard', 'Digər', 'Maraqlı']

function addMenu() {
    sideMenuArr.map(item => {
        sideMenu.innerHTML += `<a href="#" class="text-[#051d39] text-[14px] font-[600] p-[6px_16px] rounded-[16px] border border-[#e8e8e8] transition duration-300 hover:bg-[#f5f5f5]">
                                    ${item}
                                </a>`
    })
}
addMenu()