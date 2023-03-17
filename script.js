// <!-- Open ticket -->

// Sold out tickets  
const soldBtns = document.querySelectorAll('.js-sold-out-ticket')

function showSoldTicket() {
    alert("SOLD OUT")
}
for (const soldBtn of soldBtns) {
    soldBtn.addEventListener('click',showSoldTicket)
    
}
// Buy tickets
const buyBtn = document.querySelector('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-close')
const modalContainer = document.querySelector('.js-container')


function showBuyTicket() {
    modal.classList.add('open')
}
function hideBuyTicket() {
    modal.classList.remove('open')
}

buyBtn.addEventListener('click', showBuyTicket)
modalClose.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)
modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})


// <!--Open Menu -->

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng/mở mobile menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// Tự động đống khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling &&this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } 
        else {
            header.style.height = null;    
        }
    }
}
