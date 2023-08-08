// Data storage
const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
	addPage(page) {
		pagesStore.push(page);
		localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
	},

	getAllPages() {
		return pagesStore;
	},

	getSinglePage(index) {
		return pagesStore[index];
	},

	editPage(index, page) {
		// Update pagesStore array so at a given index we have a page object
		pagesStore[index] = page;

		localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
	},
};
