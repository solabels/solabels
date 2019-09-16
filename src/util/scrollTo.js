export default function scrollTo (className) {
  if (typeof document !== 'undefined') {
    const scrollTo = document.querySelector(className);

    scrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }
}
