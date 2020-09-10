<template>
    <div class="blindtext" v-html="lorem"></div>
</template>

<script>
    import { loremIpsum } from 'lorem-ipsum'
    import words from '@/words.json'

    export default {
        name: 'Blindtext',
        props: {
            paragraphs: {
                type: Number,
                default: 1,
            },
            length: {
                type: Number,
                default: 1,
            },
            value: {
                type: String,
                default: '',
            },
        },
        computed: {
            lorem() {
                const lorem = loremIpsum({
                    count: this.paragraphs, // Number of "words", "sentences", or "paragraphs"
                    format: 'html', // "plain" or "html"
                    paragraphLowerBound: Math.ceil((this.length * 2) / 3), // Min. number of sentences per paragraph.
                    paragraphUpperBound: this.length, // Max. number of sentences per paragarph.
                    sentenceLowerBound: Math.ceil((this.length * 2) / 3), // Min. number of words per sentence.
                    sentenceUpperBound: this.length, // Max. number of words per sentence.
                    units: 'paragraph',
                    words,
                })

                this.$emit('input', lorem)

                return lorem
            },
        },
    }
</script>

<style lang="postcss" scoped>
    .blindtext {
        font-family: 'AugsburgerSchriftCAT', serif;
        font-size: 1.5rem;
        padding: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .blindtext >>> p:first-child {
        margin-top: 0;
    }

    .blindtext >>> p:last-child {
        margin-bottom: 0;
    }
</style>
