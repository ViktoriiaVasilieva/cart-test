const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JAVAsCRIPT" },
  { label: "NODE.JS" },
  { label: "REACT" },
  { label: "VUE" },
  { label: "MOBX" },
  { label: "REDUX" },
  { label: "REACT ROUTER" },
  { label: "GRAPHQL" },
  { label: "POSTGRESQL" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", filterChange);

const listItemMarup = createListItemsMarkup(tech);
populateList(listItemMarup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join("");
}
function filterChange(e) {
  const filter = e.target.value.toLocaleLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLocaleLowerCase().includes(filter)
  );

  const listItemMarup = createListItemsMarkup(filteredItems);

  populateList(listItemMarup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
