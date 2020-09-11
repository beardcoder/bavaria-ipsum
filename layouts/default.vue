<template>
    <div class="app">
        <Nuxt />
    </div>
</template>

<style scoped>
    .app::before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('../assets/images/background.svg');
        background-repeat: no-repeat;
        opacity: 0.1;
        width: 800px;
        height: 800px;
    }
</style>
