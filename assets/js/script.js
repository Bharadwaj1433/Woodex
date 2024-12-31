'use strict';

function addToCart(product, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);
  const totalPrice = price * quantity;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const existingItemIndex = cart.findIndex(item => item.name === product);
  
  if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
  } else {
      cart.push({ name: product, price: totalPrice, quantity: quantity });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + ' (Qty: ' + quantity + ') added to the cart.');
}

function updatePrice(priceId, price, quantityId) {
  const quantity = document.getElementById(quantityId).value;
  const updatedPrice = price * quantity;
  document.getElementById(priceId).textContent = updatedPrice;
}
function addToWishlist(product, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);
  const totalPrice = price * quantity;
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  const existingItemIndex = wishlist.findIndex(item => item.name === product);
  
  if (existingItemIndex > -1) {
      wishlist[existingItemIndex].quantity += quantity;
  } else {
      wishlist.push({ name: product, price: totalPrice, quantity: quantity });
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(product + ' (Qty: ' + quantity + ') added to the wishlist.');
}

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);



/**
 * product filter
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);