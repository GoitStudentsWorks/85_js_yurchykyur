import './js/index/loader';
import './js/index/gotop';
import './js/index/modal';
import './js/pagination/pagination';
import './js/burger-menu/burger-menu';
import './js/header/anti-flicker.js';
import './js/header/header.js';
import './js/banner/support-ukraine';

import createPagination from './js/pagination/pagination';
import getDataLocalStorage from './js/service-local-storage/get-data-local-storage';
import setDataLocalStorage from './js/service-local-storage/save-data-local-storage';

const SHOPPING_LIST_LS = 'shopping list';

//функція запиту в локал сторедж та отриманні даних
//const booksArr = getDataLocalStorage(SHOPPING_LIST_LS);
const booksArr = [
  {
    _id: '642fd89ac8cf5ee957f122da',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bessel van der Kolk',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg',
    book_image_width: 128,
    book_image_height: 193,
    book_review_link:
      'https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html',
    book_uri: 'nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e',
    contributor: 'by Bessel van der Kolk',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'How trauma affects the body and mind, and innovative treatments for recovery.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0143127748',
    primary_isbn13: '9780143127741',
    publisher: 'Penguin',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'THE BODY KEEPS THE SCORE',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 232,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780143127741?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122db',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Michelle Zauner',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg',
    book_image_width: 338,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/520cb070-10ce-5d43-9b0c-e77f57d84a8d',
    contributor: 'by Michelle Zauner',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984898957',
    primary_isbn13: '9781984898951',
    publisher: 'Vintage',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'CRYING IN H MART',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984898951?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984898951',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCRYING%252BIN%252BH%252BMART%252FMichelle%252BZauner%252F9781984898951&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCRYING%252BIN%252BH%252BMART%252BMichelle%252BZauner',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984898951&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DCRYING%2BIN%2BH%2BMART',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984898951%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCRYING%2BIN%2BH%2BMART%2BMichelle%2BZauner%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122de',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Daniel Kahneman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781429969352.jpg',
    book_image_width: 330,
    book_image_height: 490,
    book_review_link:
      'https://www.nytimes.com/2011/11/27/books/review/thinking-fast-and-slow-by-daniel-kahneman-book-review.html',
    book_uri: 'nyt://book/1e1ffccd-d526-5154-84de-1628b31454e9',
    contributor: 'by Daniel Kahneman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'When we can and cannot trust our intuitions in making business and personal decisions.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0374533555',
    primary_isbn13: '9780374533557',
    publisher: 'Farrar, Straus & Giroux',
    rank: 5,
    rank_last_week: 4,
    sunday_review_link:
      'https://www.nytimes.com/2011/11/27/books/review/thinking-fast-and-slow-by-daniel-kahneman-book-review.html',
    title: 'THINKING, FAST AND SLOW',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 356,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780374533557?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780374533557',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHINKING%25252C%252BFAST%252BAND%252BSLOW%252FDaniel%252BKahneman%252F9780374533557&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHINKING%25252C%252BFAST%252BAND%252BSLOW%252BDaniel%252BKahneman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780374533557&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHINKING%252C%2BFAST%2BAND%2BSLOW',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780374533557%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHINKING%252C%2BFAST%2BAND%2BSLOW%2BDaniel%2BKahneman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122df',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'David Grann',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg',
    book_image_width: 326,
    book_image_height: 495,
    book_review_link:
      'https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html',
    book_uri: 'nyt://book/c5c1cd05-cdbc-5e7a-8255-1923ab4b1ceb',
    contributor: 'by David Grann',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0307742482',
    primary_isbn13: '9780307742483',
    publisher: 'Vintage',
    rank: 6,
    rank_last_week: 14,
    sunday_review_link: '',
    title: 'KILLERS OF THE FLOWER MOON',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 109,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780307742483?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307742483',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252FDavid%252BGrann%252F9780307742483&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252BDavid%252BGrann',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780307742483&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780307742483%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON%2BDavid%2BGrann%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e0',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/152474672X?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Anna Lembke',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781524746728.jpg',
    book_image_width: 334,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/635b9fb7-e082-5635-bd16-f452d0754deb',
    contributor: 'by Anna Lembke',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The medical director of Stanford Addiction Medicine explores the neuroscience and behaviors that inform the relationship between pleasure and pain.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1524746746',
    primary_isbn13: '9781524746742',
    publisher: 'Dutton',
    rank: 7,
    rank_last_week: 15,
    sunday_review_link: '',
    title: 'DOPAMINE NATION',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 9,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/152474672X?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781524746742?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781524746742',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDOPAMINE%252BNATION%252FAnna%252BLembke%252F9781524746742&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDOPAMINE%252BNATION%252BAnna%252BLembke',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524746742&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDOPAMINE%2BNATION',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781524746742%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDOPAMINE%2BNATION%2BAnna%2BLembke%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e1',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/The-Glass-Castle-A-Memoir/dp/074324754X?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Jeannette Walls',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780743247542.jpg',
    book_image_width: 313,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/6525f71e-9487-5a7e-9534-f26d1a493c5f',
    contributor: 'by Jeannette Walls',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The author recalls how she and her siblings were constantly moved from one bleak place to another.',
    first_chapter_link:
      'https://www.nytimes.com/2005/03/13/books/chapters/0313-1st-walls.html',
    price: '0.00',
    primary_isbn10: '074324754X',
    primary_isbn13: '9780743247542',
    publisher: 'Scribner',
    rank: 8,
    rank_last_week: 0,
    sunday_review_link:
      'https://www.nytimes.com/2005/03/13/books/review/013COVERPROSE.html',
    title: 'THE GLASS CASTLE',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 462,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/The-Glass-Castle-A-Memoir/dp/074324754X?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780743247542?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780743247542',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BGLASS%252BCASTLE%252FJeannette%252BWalls%252F9780743247542&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BGLASS%252BCASTLE%252BJeannette%252BWalls',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780743247542&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BGLASS%2BCASTLE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780743247542%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BGLASS%2BCASTLE%2BJeannette%2BWalls%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e2',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Malcolm Gladwell',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780316478526.jpg',
    book_image_width: 330,
    book_image_height: 491,
    book_review_link:
      'https://www.nytimes.com/2019/09/04/books/review-talking-to-strangers-malcolm-gladwell.html',
    book_uri: 'nyt://book/8f9a9575-8d7e-5e74-935c-56865f8addbf',
    contributor: 'by Malcolm Gladwell',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'Famous examples of miscommunication serve as the backdrop to explain potential conflicts and misunderstandings.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0316299227',
    primary_isbn13: '9780316299220',
    publisher: 'Back Bay',
    rank: 9,
    rank_last_week: 9,
    sunday_review_link: '',
    title: 'TALKING TO STRANGERS',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 79,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780316299220?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316299220',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTALKING%252BTO%252BSTRANGERS%252FMalcolm%252BGladwell%252F9780316299220&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTALKING%252BTO%252BSTRANGERS%252BMalcolm%252BGladwell',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316299220&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTALKING%2BTO%2BSTRANGERS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316299220%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTALKING%2BTO%2BSTRANGERS%2BMalcolm%2BGladwell%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e3',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Just-Mercy-Story-Justice-Redemption-ebook/dp/B00JYWVYLY?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bryan Stevenson',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780812994520.jpg',
    book_image_width: 128,
    book_image_height: 193,
    book_review_link: '',
    book_uri: 'nyt://book/cd6d25c8-a6f0-55a4-b322-e8eb0dbb5fb3',
    contributor: 'by Bryan Stevenson',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'A civil rights lawyer and MacArthur grant recipient’s memoir of his decades of work to free innocent people condemned to death.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '081298496X',
    primary_isbn13: '9780812984965',
    publisher: 'One World',
    rank: 10,
    rank_last_week: 0,
    sunday_review_link:
      'https://www.nytimes.com/2014/10/19/books/review/just-mercy-by-bryan-stevenson.html',
    title: 'JUST MERCY',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 303,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Just-Mercy-Story-Justice-Redemption-ebook/dp/B00JYWVYLY?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780812984965?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780812984965',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FJUST%252BMERCY%252FBryan%252BStevenson%252F9780812984965&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DJUST%252BMERCY%252BBryan%252BStevenson',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780812984965&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DJUST%2BMERCY',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780812984965%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DJUST%2BMERCY%2BBryan%2BStevenson%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e4',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Grit-The-Power-Passion-Perseverance-ebook/dp/B010MH9V3W?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Angela Duckworth',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781501111129.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link:
      'https://www.nytimes.com/2016/05/08/books/review/grit-by-angela-duckworth.html',
    book_uri: 'nyt://book/0918932d-5172-5781-9ea9-bf6549b313aa',
    contributor: 'by Angela Duckworth',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The MacArthur Fellow argues that passion and perseverance are more important than innate talent in creating success.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1501111116',
    primary_isbn13: '9781501111112',
    publisher: 'Scribner',
    rank: 11,
    rank_last_week: 12,
    sunday_review_link: '',
    title: 'GRIT',
    updated_date: '2023-04-05 22:10:18',
    weeks_on_list: 141,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Grit-The-Power-Passion-Perseverance-ebook/dp/B010MH9V3W?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781501111112?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501111112',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGRIT%252FAngela%252BDuckworth%252F9781501111112&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGRIT%252BAngela%252BDuckworth',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501111112&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DGRIT',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501111112%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGRIT%2BAngela%2BDuckworth%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e5',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593230256?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Isabel Wilkerson',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593230251.jpg',
    book_image_width: 330,
    book_image_height: 500,
    book_review_link:
      'https://www.nytimes.com/2020/07/31/books/review-caste-isabel-wilkerson-origins-of-our-discontents.html',
    book_uri: 'nyt://book/4c671a17-af83-5711-911f-956c77c7f5e3',
    contributor: 'by Isabel Wilkerson',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The Pulitzer Prize-winning journalist examines aspects of caste systems across civilizations and reveals a rigid hierarchy in America today.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593230272',
    primary_isbn13: '9780593230275',
    publisher: 'Random House',
    rank: 12,
    rank_last_week: 6,
    sunday_review_link: '',
    title: 'CASTE',
    updated_date: '2023-04-05 22:10:18',
    weeks_on_list: 7,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593230256?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593230275?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593230275',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCASTE%252FIsabel%252BWilkerson%252F9780593230275&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCASTE%252BIsabel%252BWilkerson',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593230275&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DCASTE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593230275%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCASTE%2BIsabel%2BWilkerson%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e6',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0525555218?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'John Green',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780525555216.jpg',
    book_image_width: 331,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/46e48617-316d-5d31-b826-62f7b6580826',
    contributor: 'by John Green',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'A collection of personal essays that review different facets of the human-centered planet.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0525555242',
    primary_isbn13: '9780525555247',
    publisher: 'Dutton',
    rank: 13,
    rank_last_week: 5,
    sunday_review_link: '',
    title: 'THE ANTHROPOCENE REVIEWED',
    updated_date: '2023-04-05 22:10:18',
    weeks_on_list: 2,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0525555218?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780525555247?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525555247',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BANTHROPOCENE%252BREVIEWED%252FJohn%252BGreen%252F9780525555247&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BANTHROPOCENE%252BREVIEWED%252BJohn%252BGreen',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780525555247&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BANTHROPOCENE%2BREVIEWED',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780525555247%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BANTHROPOCENE%2BREVIEWED%2BJohn%2BGreen%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e7',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Dolly Alderton',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780062968791.jpg',
    book_image_width: 332,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/78725ce3-7ae4-5a35-acad-04355f2d0b44',
    contributor: 'by Dolly Alderton',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'The British journalist shares stories and observations; the basis of the TV series.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0062968793',
    primary_isbn13: '9780062968791',
    publisher: 'Harper Perennial',
    rank: 14,
    rank_last_week: 13,
    sunday_review_link: '',
    title: 'EVERYTHING I KNOW ABOUT LOVE',
    updated_date: '2023-04-05 22:10:18',
    weeks_on_list: 2,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780062968791?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062968791',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FEVERYTHING%252BI%252BKNOW%252BABOUT%252BLOVE%252FDolly%252BAlderton%252F9780062968791&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DEVERYTHING%252BI%252BKNOW%252BABOUT%252BLOVE%252BDolly%252BAlderton',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062968791&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DEVERYTHING%2BI%2BKNOW%2BABOUT%2BLOVE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062968791%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DEVERYTHING%2BI%2BKNOW%2BABOUT%2BLOVE%2BDolly%2BAlderton%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122e8',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0735217955?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Chuck Klosterman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735217959.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/b0589fec-1732-5c75-bd5e-109f1ef7a873',
    contributor: 'by Chuck Klosterman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:28',
    description:
      'An overview of the cultural and historical impact of the 1990s.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735217963',
    primary_isbn13: '9780735217966',
    publisher: 'Penguin',
    rank: 15,
    rank_last_week: 11,
    sunday_review_link: '',
    title: 'THE NINETIES',
    updated_date: '2023-04-05 22:10:18',
    weeks_on_list: 9,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0735217955?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735217966?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735217966',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BNINETIES%252FChuck%252BKlosterman%252F9780735217966&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BNINETIES%252BChuck%252BKlosterman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735217966&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BNINETIES',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735217966%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BNINETIES%2BChuck%2BKlosterman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122dd',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Robin Wall Kimmerer',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg',
    book_image_width: 321,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/194ea111-42ad-5795-9fb5-3e155ffa5e79',
    contributor: 'by Robin Wall Kimmerer',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1571313567',
    primary_isbn13: '9781571313560',
    publisher: 'Milkweed Editions',
    rank: 4,
    rank_last_week: 3,
    sunday_review_link: '',
    title: 'BRAIDING SWEETGRASS',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 155,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781571313560?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781571313560',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBRAIDING%252BSWEETGRASS%252FRobin%252BWall%252BKimmerer%252F9781571313560&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBRAIDING%252BSWEETGRASS%252BRobin%252BWall%252BKimmerer',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781571313560&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DBRAIDING%2BSWEETGRASS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781571313560%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBRAIDING%2BSWEETGRASS%2BRobin%2BWall%2BKimmerer%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122dc',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'bell hooks',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780060959470.jpg',
    book_image_width: 319,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/84ce374b-f6b1-5f05-8556-b0e09e97679c',
    contributor: 'by bell hooks',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'The late feminist icon explores the causes of a polarized society and the meaning of love.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0060959479',
    primary_isbn13: '9780060959470',
    publisher: 'Morrow',
    rank: 3,
    rank_last_week: 2,
    sunday_review_link:
      'https://www.nytimes.com/2000/01/30/books/that-4-letter-word.html',
    title: 'ALL ABOUT LOVE',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 69,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780060959470?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780060959470',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FALL%252BABOUT%252BLOVE%252Fbell%252Bhooks%252F9780060959470&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DALL%252BABOUT%252BLOVE%252Bbell%252Bhooks',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780060959470&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DALL%2BABOUT%2BLOVE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780060959470%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DALL%2BABOUT%2BLOVE%2Bbell%2Bhooks%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];
//setDataLocalStorage(SHOPPING_LIST_LS, booksArr);


const data = getDataLocalStorage(SHOPPING_LIST_LS);
//виклик створення розмітки пагінації та розмітки
createPagination(data, 1, true);
