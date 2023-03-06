// Navbar JS scroll 
let navbar = document.querySelector(".navbar");
let prevScrollPosition = window.pageYOffset;
let navbarStyle = navbar.style;

const debounce = (callback, wait = 10) => {
    let timeout;
    return (...args) => {
    clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(this, args), wait);
    };
};

const handleScroll = () => {
  let currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition > currentScrollPosition) {
    navbar.classList.remove("navbar-scroll-hide");
    navbar.classList.add("navbar-scroll-show");
  } else {
    navbar.classList.remove("navbar-scroll-show");
    navbar.classList.add("navbar-scroll-hide");
  }

  prevScrollPosition = currentScrollPosition;
};

window.addEventListener("scroll", debounce(handleScroll));



// Add and remove "active" class on navlink for navigation
const navLLink = document.querySelectorAll(".nav-link");

navLLink.forEach((a) => {
    a.addEventListener("click", () => {
        navLLink.forEach((a) => {
            a.classList.remove("active");
        });
        a.classList.add("active");
    });

    
});

// searchBox toggle and navbar-brand style
const searchButton = document.querySelector("#searchBtn");
const searchBox = document.querySelector("#searchBar");
const navbarBrand = document.querySelector(".navbar-brand");
const navbarItem = document.querySelectorAll(".show");
searchButton.addEventListener("click", () =>{
    if (searchBox.classList.contains("expand-search")) {
        searchBox.classList.remove("expand-search");
        if (window.innerWidth <= 991) {
            setTimeout(() => {
                navbarBrand.style.display = "block";
            }, 400);
        }

        if (window.innerWidth >= 991 && window.innerWidth < 1200) {
            setTimeout(() => {
                navbarItem.forEach(item => item.classList.add("d-block"));
                navbarItem.forEach(item => item.classList.remove("d-none"));
            }, 400);
        }

    } else {
            searchBox.classList.add("expand-search");
            if(window.innerWidth <= 991) {
                navbarBrand.style.display = "none";

            }

            if (window.innerWidth >= 991 && window.innerWidth < 1200) {
                navbarItem.forEach(item => item.classList.add("d-none"));
                navbarItem.forEach(item => item.classList.remove("d-block"));

            }
    };
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 991) {
        navbarBrand.style.display = "block";
    }
});

// Adding and removing item to cart

const addToCartButtons = document.querySelectorAll('.add-cart');
const cartContainers = document.querySelectorAll('.cart-container');

addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', function(event) {

        const cardElement = event.target.closest('.card');
        const clonedCardElement = cardElement.cloneNode(true);
        clonedCardElement.style.width = "";
    
        const newDiv = document.createElement("div");
        newDiv.classList.add("col-6", "cart-item");
        newDiv.appendChild(clonedCardElement);
    
        const removeButton = newDiv.querySelector('.add-cart');
        removeButton.classList.remove('add-cart');
        removeButton.classList.add('remove-cart');
        removeButton.textContent = "Remove from cart";

        cartContainers.forEach(cartContainer => {
            cartContainer.appendChild(newDiv);
        });
    });
});

cartContainers.forEach(cartContainer => {
    cartContainer.addEventListener('click', function(event) {

        if (event.target.classList.contains('remove-cart')) {
            const cardToRemove = event.target.closest('.col-6');
            cardToRemove.remove();

        }
    });
});

const swiper = new Swiper(".menu-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 576) {
      swiper.params.slidesPerView = 1;
      swiper.params.spaceBetween = 35;

      swiper.update();
    } else if (window.innerWidth >= 576 && window.innerWidth <= 768 ) {
        swiper.params.slidesPerView = 2;
        swiper.update();
      }
      else if (window.innerWidth >= 768 && window.innerWidth <= 992 ) {
        swiper.params.slidesPerView = 3;
        swiper.update();
      }
    
    else {
      swiper.params.slidesPerView = 4;
      swiper.update();
    }
  });
  