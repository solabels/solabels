console.log('object1');
if (typeof window !== 'undefined') {
  console.log('object2');
  function smoothScroll (scrollTo) {
    scrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  window.onload = function () {
    document.querySelector('.scoll-down').onclick = function () {
      const headlineText = document.querySelector('.scroll-to-headlinetext');
      smoothScroll(headlineText);
    };
  };
}
