// const navEl = document.querySelector("ul");
// console.log(navEl);

// const navLinksEl = navEl.querySelectorAll(".site-nav__link");
// console.log("navLinksEl", navLinksEl);
// const magicBtn = document.querySelector(".js-magic-btn");

// const actions = document.querySelectorAll(".js-actions button");
// console.log("actions", actions[0].dataset);

// magicButton.addEventListener("click", () => {
//   const inputEl = document.querySelector(".js-input");
//   console.log("inputEl", inputEl.value);
//   inputEl.value = "";
// });

// const navEl = document.querySelector(".site-nav");
// console.log("navEl", navEl.classList);

// // navEl.classList.add("super-cool");
// // navEl.classList.remove("site-nav");

// // magicBtn.addEventListener("click", () => {
// //   navEl.classList.toggle("hjhhj");

// //   navEl.classList.replace("super-cool", "yuyuy");
// // });

// // const currentPageUrl = "/about";

// // const linkEl = document.querySelector(
// //   `.site-nav__link[href="${currentPageUrl}"]`
// // );

// // console.log(linkEl);

// // linkEl.classList.add("site-nav__link--current");

// // const navEl = document.querySelector(".site-nav");

// // // const firstNavItem = navEl.children;
// // // console.log("firstNavItem", firstNavItem);

// // const titleEl = document.createElement("h1");

// // titleEl.classList.add("page-title");
// // titleEl.textContent = "Це заголовок сторінки";
// // console.log("titleEl", titleEl);

// // document.body.appendChild(titleEl);

// // // const imageEl = document.createElement("img");
// // // console.log("imageEl", imageEl);
// // // imageEl.width = 700;
// // // imageEl.src = "kljlkjj";
// // // imageEl.alt = "rere";

// // // document.body.appendChild(imageEl);

// // const navItemEl = document.createElement("li");

// // navItemEl.classList.add("site-nav__item");

// // const navLinkEl = document.createElement("a");

// // navLinkEl.classList.add("site-nav__link");
// // navLinkEl.textContent = "Особистий кабінет";
// // navLinkEl.href = "/profile";

// // console.log("navLinkEl", navLinkEl);

// // navItemEl.appendChild(navLinkEl);
// // console.log("navItemEl", navItemEl);

// // const navEl = document.querySelector(".site-nav");

// // // navEl.appendChild(navItemEl);
// // navEl.insertBefore(navItemEl, navEl.firstElementChild);

// // const heroEl = document.querySelector(".hero");
// // // heroEl.appendChild(titleEl);
// // // heroEl.appendChild(navEl);

// // heroEl.append(titleEl, navEl);

// // const colorPeckerOptions = [
// //   { label: "red", color: "#F44336" },
// // //   { label: "green", color: "#4CAF50" },
// // //   { label: "blue", color: "#2196F3" },
// // //   { label: "grey", color: "#607D88" },
// // //   { label: "pink", color: "#E91E63" },
// // //   { label: "indigo", color: "#3F51B5" },
// // // ];

// // // const colorPickerContainerEl = document.querySelector(".js-color-picker");

// // // const makeColorPickerOptions = options => {
// // //   return options.map(option => {
// // //     const buttonEl = document.createElement("button");
// // //     buttonEl.type = "button";
// // //     buttonEl.classList.add("color-picker__option");
// // //     buttonEl.textContent = option.label;
// // //     buttonEl.style.backgroundColor = option.color;

// // //     return buttonEl;
// // //   });
// // // };

// // // const elements = makeColorPickerOptions(colorPeckerOptions);

// // // colorPickerContainerEl.append(...elements);
// // // console.log("elements", elements);

// const products = [
//   {
//     name: "Сервоприводи",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores inventore, magnam nostrum ea quam necessitatibus aliquid odit tempora, rerum dolore deserunt accusantium in repellendus.",
//     price: 2000,
//     available: true,
//     valueOfonSale: true,
//   },
//   {
//     name: "Холодильник",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores inventore, magnam nostrum ea quam necessitatibus aliquid odit tempora, rerum dolore deserunt accusantium in repellendus.",
//     price: 4000,
//     available: false,
//     valueOfonSale: true,
//   },
// ];

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");

//   productEl.classList.add("product");

//   const nameEl = document.createElement("h2");
//   nameEl.textContent = name;
//   nameEl.classList.add("product__name");

//   const descrEl = document.createElement("p");
//   descrEl.classList.add("product__descr");
//   descrEl.textContent = description;

//   const priceEl = document.createElement("p");
//   priceEl.classList.add("product__price");
//   priceEl.textContent = `Ціна: ${price} гривень`;
//   productEl.append(nameEl, descrEl, priceEl);
//   return productEl;
// };

// console.log(products);

// const elements = products.map(makeProductCard);
// console.log(elements);

// const productsContainerEl = document.querySelector(".js-products");
// productsContainerEl.append(...elements);

// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// addListenerBtn.addEventListener("click", event => {
//   console.log(event);
//   console.log("Вішаю слухача подій на цільову кнопку");
//   targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", event => {
//   console.log("Знімаю слухача подій на цільову кнопку");
//   targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log("Клік по цільовій кнопці");
// }

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLabel: document.querySelector(".js-button > span"),
//   licenseChekbox: document.querySelector(".js-license"),
//   btn: document.querySelector(".js-button"),
// };

// refs.input.addEventListener("focus", onImputFocus);
// refs.input.addEventListener("blur", onImputBlur);

// refs.input.addEventListener("change", onInputChange);

// refs.input.addEventListener("input", onInputChange);

// refs.input.addEventListener("input", onInputChange);
// refs.licenseChekbox.addEventListener("change", onLicenseChange);

// function onImputFocus() {
//   console.log("Інпут отримав фокус");
// }

// function onImputBlur() {
//   console.log("Інпут втратив фокус");
// }

// function onInputChange(event) {
//   console.log(event.currentTarget);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// const refs = {
//   output: document.querySelector(".js-output"),
//   clearBtn: document.querySelector(".js-clear"),
// };

// window.addEventListener("keypress", onKeyPress);

// function onKeyPress(event) {
//   console.log(event);
// }

// // function onClearOutput(event) {
// //   console.log(event);
// }

// const boxRef = document.querySelector(".js-box");

// // boxRef.addEventListener("mouseover", onMouseEnter);
// // boxRef.addEventListener("mouseout", onMouseLeave);
// // boxRef.addEventListener("mousemove", onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add("box--active");
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove("box--active");
// }

// function onMouseMove(event) {
//   console.log(event);
// }
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal]'),
  closeModalBtn: document.querySelector('[data-action="close-modal]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  console.log(document.body.classList.add(show - modal));
}
