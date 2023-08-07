import * as basicLightbox from "basiclightbox";
import sprite from '/src/images/icons.svg';
import amazon from '/src/images/modal/amazon-icon1x.png';
import amazon2x from '/src/images/modal/amazon-icon2x.png';
import appleBook from '/src/images/modal/applebook-icon1x.png';
import appleBook2x from '/src/images/modal/applebook-icon2x.png';
import bookShop from "/src/images/modal/bookshop-icon1x.png";
import bookShop2x from "/src/images/modal/bookshop-icon2x.png";
import serviceBookAPI from '../book-api/service-book-api'

const SHOPPING_LIST_LS = 'shopping list'

const bodyEl = document.querySelector("body");
const URL = "https://books.backend.p.goit.global/books/";
let idBook = "";

const shops = {
  Amazon: `<img srcset="${amazon} 1x, ${amazon2x} 2x" src="${amazon}" alt="amazon logo" width="62" height="19">`,
  "Apple Books": `<img srcset="${appleBook} 1x, ${appleBook2x} 2x" src="${appleBook}" alt="apple books logo" width="33" height="32">`,
  "Book Shop": `<img srcset="${bookShop} 1x, ${bookShop2x} 2x" src="${bookShop}" alt="book shop logo" width="38" height="36">`,
};

async function getBookInfo(bookId) {
  // const response = await fetch(`${URL}${bookId}`);
  // const responseData = await response.json();
  const responseData = await serviceBookAPI('book', { id: bookId })
  console.log('responseData', responseData)
  const books = {
    id: responseData._id,
    img: responseData.book_image,
    bookName: responseData.list_name,
    author: responseData.author,
    description: responseData.description,
    shops: responseData.buy_links,
    title: responseData.title,
  };
  return books;
}

function getImages(name) {
  if (name in shops) {
    const img = shops[name];
    return img;
  } else return "";
}

async function createMarkup(bookId) {
   console.log("textmarkup");
  const books = await getBookInfo(bookId);
  console.log(books);
  const shopName = books.shops
    .map(({ name, url }) => {
      const img = getImages(name);
      return `<li class="item book-item"><a href="${url}" target="_blank" class="link link-img">${img}</a></li>`;
    })
    .join("");
  console.log(shopName);
   const instance = basicLightbox.create( `
  <div class="modal">
    <div class="book-card-container js-modal">
        <button type="button" class="close-btn">
            <svg class="close-img" width="28" height="28"><use href="${sprite}#close-btn"></use></svg>
        </button>
        <div class="book-info-container">
            <div class="book-cover">
                <img src="${books.img}" alt="book cover image" width="192" height="280">
            </div>
            <div class="book-info">
                <h2 class="book-title">${books.bookName}</h2>
                <p class="book-author">${books.author}</p>
                <p class="book-description">${books.description}</p>
                <ul class="list shop-list">${shopName}</ul>
            </div>
        </div>
        <button type="button" class="btn-modal hidden" id="add">Add to shopping list</button>
        <button type="button" class="btn-modal hidden" id="remove">Remove from the shopping list</button>
        <p class="text-remove hidden">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
    </div>
  </div>`, {
     onShow: () => {
      console.log('idBook', idBook)

      document.addEventListener("keydown", closeModal(instance));
      bodyEl.style.overflow = "hidden";
    },
    onClose: () => {
      document.removeEventListener("keydown", closeModal(instance));
      bodyEl.style.overflow = "auto";
    },
   });
     instance.show();

  // return bookCard;
}

function closeModal(instance) {
  function eventHandler(evt) {
    if (evt.key === "Escape") {
      instance.close();
      bodyEl.style.overflow = "auto";
    }
  }
  document.addEventListener("keydown", (evt) => {
    if (evt.key !== "Escape") {
      return;
    }
    document.removeEventListener("keydown", eventHandler);
    instance.close();
  });
}

const obj = {}

//import to gallery
export  function openModal(evt) {
console.log(evt.target.closest('.js-click-book').dataset.bookid);
 createMarkup(evt.target.closest('.js-click-book').dataset.bookid)
  
  // instance.element().querySelector(".close-btn").onClick = instance.close;

  const addBtn = document.querySelector("#add");
  const removeBtn = document.querySelector("#remove");
  // const textRemove = document.querySelector(".text-remove");
  // const books = await getBookInfo(idBook);

  const savedBooks = getSavedBooks();
  const isBookSaved = savedBooks.some(item => item.id === idBook);

  if (isBookSaved) {
    addBtn.classList.add("hidden");
    removeBtn.classList.remove("hidden");
  } else {
    // addBtn.classList.remove("hidden");
    // removeBtn.classList.add("hidden");
    // textRemove.classList.add("hidden");
  }
  
  // addBtn.addEventListener("click", () => {
  //   addElement(idBook, books);
  //   addBtn.classList.add("hidden");
  //   removeBtn.classList.remove("hidden");
  //   textRemove.classList.remove("hidden");
  // });

  // removeBtn.addEventListener("click", () => {
  //   const updatedSavedBooks = savedBooks.filter(item => item.id !== idBook);
  //   localStorage.setItem(SHOPPING_LIST_LS, JSON.stringify(updatedSavedBooks));

  //   addBtn.classList.remove("hidden");
  //   removeBtn.classList.add("hidden");
  //   textRemove.classList.add("hidden");
  // });
}

function addElement(key, value) {
  let existingItems = JSON.parse(localStorage.getItem(SHOPPING_LIST_LS)) || [];
  existingItems.push({ id: key, book: value });
  localStorage.setItem(SHOPPING_LIST_LS, JSON.stringify(existingItems));
}

function getSavedBooks() {
  return JSON.parse(localStorage.getItem(SHOPPING_LIST_LS)) || [];
}
