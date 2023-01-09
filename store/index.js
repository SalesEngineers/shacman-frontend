import * as axios from "axios";

export const state = () => ({
  visabilityHeader: false,
  breadcrumbs: [],
  categories: [],
  settings: {},
  contacts: [],
  articles: [],
  addressMap: null,
  showModal: false,
  modalContent: {
    title: "",
    text: "",
    btnName: "",
  },
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await dispatch("loadSettings");
      await dispatch("loadCategories");
      await dispatch("loadContacts");
    } catch (e) {
      console.log(e);
    }
  },
  async loadCategories({ commit }) {
    await axios
      .get(`http://api.shacman.marketolog.sale/api/categories`)
      .then((r) => r.data.data)
      .then((categories) => {
        commit("setCategories", categories);
      });
  },
  async loadSettings({ commit }) {
    await axios
      .get(`http://api.shacman.marketolog.sale/api/settings`)
      .then((r) => r.data.data)
      .then((settings) => {
        commit("setSettings", settings);
      });
  },
  async loadContacts({ commit }) {
    await axios
      .get(`http://api.shacman.marketolog.sale/api/contacts`)
      .then((r) => r.data.data)
      .then((contacts) => {
        commit("setContacts", contacts);
        if (contacts.langth != 0) commit("setAddress", contacts[0]);
      });
  },
  async loadArticles({ commit }) {
    await axios
      .get(`http://api.shacman.marketolog.sale/api/articles`)
      .then((r) => r.data.data)
      .then((articles) => {
        commit("setArticles", articles);
      });
  },
};

export const mutations = {
  offVisabilityHeader(state) {
    state.visabilityHeader = false;
  },
  onVisabilityHeader(state) {
    state.visabilityHeader = true;
  },
  setAddress(state, addressMap) {
    state.addressMap = addressMap;
  },
  setBreadCrumbs(state, breadCrumbs) {
    state.breadcrumbs = breadCrumbs || [];
  },
  setCategories(state, categories) {
    state.categories = categories || [];
  },
  setSettings(state, settings) {
    state.settings = settings || {};
  },
  setContacts(state, contacts) {
    state.contacts = contacts || [];
  },
  setArticles(state, articles) {
    state.articles = articles || [];
  },
  onModalWindow(
    state,
    {
      title = "Оствьте заявку",
      btnName = "Оствьте заявку",
      text = "Оставьте контактные данные, и мы перезвоним вам в течение 1 рабочего дня",
    } = {
      title: "Оствьте заявку",
      btnName: "Оствьте заявку",
      text: "Оставьте контактные данные, и мы перезвоним вам в течение 1 рабочего дня",
    }
  ) {
    state.showModal = true;
    state.modalContent.title = title;
    state.modalContent.btnName = btnName;
    state.modalContent.text = text;
  },
  offModalWindow(state) {
    state.showModal = false;
  },
};

export const getters = {
  getVisabilityHeader(state) {
    return state.visabilityHeader;
  },
  getBreadcrumbs(state) {
    return state.breadcrumbs;
  },
  getCategories(state) {
    return state.categories;
  },
  getContacts(state) {
    return state.contacts;
  },
  getModalWindow(state) {
    return state.showModal;
  },
  getAddress(state) {
    return state.addressMap;
  },
  getArticles(state) {
    return state.articles;
  },
  getSettings(state) {
    return state.settings;
  }
};
