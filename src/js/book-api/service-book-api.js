
// import Loader from './index/loader';

// const loader = new Loader('.loader')




// export default async function serviceBookAPI(endpoint, params = {}) {
//   const BASE_URL = 'https://books-backend.p.goit.global/books/';

//   const config = {
//     topBooks: 'top-books',
//     categoryList: 'category-list',
//     category: `category/?category=${params.category}`,
//     book: `${params.id}`,
//   };

//   const url = `${BASE_URL}${config[endpoint]}`;

//   const response = await axios.get(url);
//   return response.data;
// }

// call examples

// const topBooks = await serviceBookAPI('topBooks');
// console.log('Top Books:', topBooks);

// const categoryList = await serviceBookAPI('categoryList');
// console.log('Category List:', categoryList);

// let bookCategory = categoryList[0].list_name;
// const booksByCategory = await serviceBookAPI('category', {
//   category: bookCategory,
// });
// console.log('Books by Category:', booksByCategory);

// let bookId = booksByCategory[0]._id;
// const bookById = await serviceBookAPI('book', { id: bookId });
// console.log('Book by ID:', bookById);


import axios from 'axios';

export async function fetchingByCategory(query) {
  try {
 
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );

    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingTopBooks() {
  try {
 
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );

    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingCategories() {
  try {

    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
  
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingByBook(id) {
  try {
 
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );

    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}
