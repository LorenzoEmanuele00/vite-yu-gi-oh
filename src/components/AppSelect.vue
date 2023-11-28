<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="d-flex mb-3">
        <select class="form-select w-25 " aria-label="Default select example" v-model="store.searchArchetype">
            <option selected></option>
            <option value="Ally of Justice">Ally of Justice</option>
            <option value="Ancient Gear">Ancient Gear</option>
            <option value="Alien">Alien</option>
        </select>
        <button @click="$emit('search')" class="btn btn-primary ">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>