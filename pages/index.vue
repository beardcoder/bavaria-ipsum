<template>
    <div class="container">
        <div>
            <div class="logo">
                <Logo />
                <div>
                    Homat is a Gfui, Homat is da wo dei Herz is, Homat is dort
                    wo'sd an Bauch ned eiziang muaßt.
                </div>
            </div>
            <div class="settings">
                <client-only>
                    <div class="settings__item">
                        <div class="settings__label">Wia vui moxt ham?</div>
                        <vue-slider v-model="paragraphs" :min="1" />
                    </div>
                </client-only>
                <client-only>
                    <div class="settings__item">
                        <div class="settings__label">Wia lang solls sei?</div>
                        <vue-slider v-model="length" :min="1" :max="10" />
                    </div>
                </client-only>
            </div>
            <div class="buttons">
                <Button :message="blindtext">als html kopieren</Button>
                <Button
                    :message="
                        htmlToText.fromString(blindtext, { wordwrap: false })
                    "
                    >als text kopieren</Button
                >
            </div>
            <client-only>
                <Blindtext
                    v-model="blindtext"
                    :length="length"
                    :paragraphs="paragraphs"
                />
            </client-only>
        </div>
    </div>
</template>

<script>
    import htmlToText from 'html-to-text'
    import 'vue-slider-component/theme/default.css'

    const components = []

    if (process.browser) {
        const VueRangeSlider = require('vue-slider-component')
        components['vue-slider'] = VueRangeSlider
    }

    export default {
        components: { ...components },
        data: () => ({
            blindtext: '',
            paragraphs: 3,
            length: 5,
            htmlToText,
        }),
    }
</script>

<style lang="postcss" scoped>
    .container {
        margin: 0 auto;
        padding: 0 20px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        max-width: 600px;
    }

    .logo {
        margin-bottom: 5rem;
        text-align: center;
    }

    .buttons {
        margin-bottom: 2rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    .settings {
        margin-bottom: 2rem;
    }

    .settings__item {
        margin-bottom: 1rem;
    }

    .settings__label {
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .settings >>> .vue-slider-process {
        background-color: #839970;
    }

    .settings >>> .vue-slider-dot-tooltip-inner {
        border-color: #839970;
        background-color: #839970;
    }
</style>
