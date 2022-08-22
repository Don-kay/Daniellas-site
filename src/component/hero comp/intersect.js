export const heroOptions = {};
const heroObserver = new IntersectionObserver(function (Entries) {
  Entries.forEach((entry) => {
    console.log(entry.target);
  });
}, heroOptions);
