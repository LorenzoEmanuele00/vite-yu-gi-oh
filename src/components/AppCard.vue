<script>
    export default {
        props: {
            card: Object,
        },
    };
</script>

<template>
    <div class="text-center bg-color">
        <img :src="card.card_images[0].image_url_small" alt="" />
        <div class="txt">
            <h3 class="mt-2">{{ card.name }}</h3>
            <p class="mt-2">{{ card.archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.bg-color {
    background-color: $bg-color-yellow;
    .txt {
        padding: 5px;
        h3 {
            font-size: 1rem;
            color: white;
        }
        p {
            font-size: .8rem;
        }
    }

}
</style>