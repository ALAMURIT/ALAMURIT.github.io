<template>
    <section class="h-screen w-full flex flex-col justify-center items-center">
        <div class="box-content w-96 p-1 mx-auto text-center text-crimson_red font-inter text-[48px] font-bold sm:w-fit text-6xl">{{contentTitle}}</div>
        <div class="box-content w-96 p-1 mx-auto text-center text-black_dark font-inter text-md">mechanical_engineer && game_developer</div>
    </section>
</template>
  
<script>
const words = ["tirumala_rao", "తిరుమల రావు", "ティルマラ・ラオ"];

export default {
    name: "HelloWorld",

    data: function () {
        return {
            contentTitle: ""
        };
    },

    methods: {
        updateWord: function () {
            this.contentTitle = words[Math.floor(Math.random() * words.length)];
        }
    },

    mounted: function () {
        this.updateWord();
        setInterval(this.updateWord, 3000);
    }
};
</script>  