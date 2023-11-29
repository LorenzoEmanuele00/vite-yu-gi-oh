import { reactive } from "vue";

export const store = reactive({
    cards: [],
    loading: null,
    searchArchetype: '',
    genStart: 0,

    // API for 20 cards starting from the index 0
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
})