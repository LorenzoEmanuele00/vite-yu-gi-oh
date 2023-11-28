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
        this.handleSearch
    },
    methods: {
        handleSearch() {
            if (this.store.searchArchetype === "") {
                axios
                    .get(this.store.apiURL, {
                        params: {
                            num: this.store.genCards,
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
                            num: this.store.genCards,
                            offset: this.store.genStart
                        },
                    })
                    .then((resp) => {
                        this.store.cards = resp.data.data;
                    });
                }
        },
    },
};
</script>

<template>
    <div class="bg-color">
        <div class="container p-4">
            <AppSelect @search="handleSearch()" />
            <div class="p-4 container-cards">
                <div v-if="store.loading">
                    <div class="p-3 bg-color-b">LOADING</div>
                </div>
                <div v-else>
                    <div class="p-3 bg-color-b">Found 20 cards</div>
                    <div class="row row-cols-xs-2 row-cols-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 g-xxl-5">
                        <div class="col d-flex" v-for="card in store.cards" :key="card.id">
                            <AppCard :card="card" />
                        </div>
                    </div>
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
