import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

hideLoader();
hideLoadMoreButton();

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.query.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search query' });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();

  await fetchImages();
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  await fetchImages(true);
});

async function fetchImages(isLoadMore = false) {
  try {
    showLoader();

    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;
    totalHits = data.totalHits;

    if (images.length === 0) {
      iziToast.error({
        message: 'Sorry, no images found. Please try another query!',
      });
      hideLoader();
      return;
    }

    createGallery(images);

    if (!isLoadMore) {
      iziToast.success({ message: `Hooray! We found ${totalHits} images.` });
    }

    const totalLoaded = currentPage * 15;
    if (totalLoaded >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }

    if (isLoadMore) {
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Please try again.' });
    console.error(error);
  } finally {
    hideLoader();
  }
}
