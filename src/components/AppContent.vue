<script>
import axios from "axios";
import { store } from "../store.js";
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store
        };
    },
    created() {
        axios.get(this.store.apiURL).then((resp) => {
            this.store.cards = resp.data.data;
            console.log(resp.data.data)
        });
    }
};
</script>

<template>
    <div class="bg-color">
        <div class="container p-4">
            <select class="form-select mb-3 w-25" aria-label="Default select example">
                <option selected>Alien</option>
                <option value="1">Infernoble Arms</option>
                <option value="2">Noble Knight</option>
                <option value="3">Melodious</option>
            </select>
            <div class="p-4 container-cards">
                <div class="p-3 bg-color-b">Found 20 cards</div>
                <div class="row row-cols-5 g-2">
                    <div class="col d-flex" v-for="card in store.cards" :key="card.id">
                        <AppCard :card="card" />
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
