<template>
    <LogoSvg :class="$style.logo"></LogoSvg>
</template>

<script>
    import LogoSvg from '@/assets/images/logo.svg?inline'
    export default {
        components: { LogoSvg },
    }
</script>

<style module>
    .logo {
        height: auto;
        width: 420px;
    }
</style>
