<script>
import axios from "axios";
import { store } from "../store.js";
import AppCard from './AppCard.vue';
import AppSelect from './AppSelect.vue';

export default {
    components: {
        AppCard,
        AppSelect,
    },
    data() {
        return {
            store
        };
    },
    created() {
        this.searchCard()
    },
    methods: {
        searchCard() {
            if (this.store.searchArchetype === "") {
                axios
                    .get(this.store.apiURL, {
                        params: {
                            num: 20,
                            offset: this.store.genStart
                        },
                    })
                    .then((resp) => {
                        this.store.cards = resp.data.data;
                    })
            } else {
                axios
                    .get(this.store.apiURL, {
                        params: {
                            archetype: this.store.searchArchetype,
                            num: 20,
                            offset: this.store.genStart
                        },
                    })
                    .then((resp) => {
                        this.store.cards = resp.data.data;
                    });
            }
        },
        nextCards() {
            if (this.store.cards.length === 20) {
                this.store.genStart += 20;
                this.searchCard();
            }
        },
        previusCards() {
            if (this.store.genStart != 0) {
                this.store.genStart -= 20;
                this.searchCard();
            } 
        },
        handleSearch() {
            this.store.genStart = 0;
            this.searchCard();
        }
    },
};
</script>

<template>
    <div class="bg-color">
        <div class="container p-4">
            <AppSelect @search="handleSearch()" />
            <div class="p-4 container-cards">
                <div class="p-3 bg-color-b">Found {{store.cards.length}} cards</div>
                <div class="row row-cols-xs-2 row-cols-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 g-xxl-5">
                    <div class="col d-flex" v-for="card in store.cards" :key="card.id">
                        <AppCard :card="card" />
                    </div>
                </div>
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-danger" @click="previusCards()">Carica le precedenti carte</button>
                    <button class="btn btn-danger" @click="nextCards()">Carica le prossime carte</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
    .bg-color {
        background-color: $bg-color-yellow;
        .container-cards {
            background-color: white;
            .bg-color-b {
                background-color: black;
                color: white;
            }
        }
    }
</style>
