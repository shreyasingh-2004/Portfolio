let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll('.page');
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
  }
}

function prevPage() {
  const pages = document.querySelectorAll('.page');
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
  }
}
