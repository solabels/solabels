export default function scrollTo (className) {
  const scrollTo = document.querySelector(className);

  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
}
