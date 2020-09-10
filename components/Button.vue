<template>
    <button
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        :class="$style.button"
        type="button"
    >
        <span v-if="copied">kopiert</span>
        <span v-else>
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        props: {
            message: {
                type: String,
                default: '',
            },
        },
        data: () => ({ copied: false }),
        methods: {
            onCopy(e) {
                this.copied = true
                setTimeout(() => {
                    this.copied = false
                }, 1000)
            },
            onError(e) {
                // eslint-disable-next-line
                console.error('Failed to copy texts')
            },
        },
    }
</script>

<style lang="postcss" module>
    .button {
        appearance: none;
        background-color: #839970;
        border: none;
        color: #fff;
        padding: 10px 20px;
        font-size: 1rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
