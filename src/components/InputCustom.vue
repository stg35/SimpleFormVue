<template>
    <div :class="[$style.inputWrapper]">
        <input :class="classInput" v-bind="$attrs" @input="sendData" v-model="enteredValue">
        <span v-if="error" :class="$style.errorMessage">
            {{ error }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['error'],
    emits: ['input-on'],
    data() {
        return {
            enteredValue: ''
        }
    },
    computed: {
        classInput() {
            if(this.error) {
                return [this.$style.input, this.$style.error];
            } else {
                return this.$style.input;
            }

        }
    },
    methods: {
        sendData() {
            this.$emit('input-on', this.enteredValue);
        }
    }
}
</script>

<style module>
.input {
    padding: 7px 15px;
    margin: 10px 0;

    color: var(--black);
    border: none;
    outline-color: var(--primary);
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    font-size: 16px;
    line-height: 22px;

    font-family: var(--font-family);
}

.input::placeholder {
    color: var(--gray);
}

.error {
    border: 2px solid var(--red);
}

.inputWrapper {
    position: relative;
    margin-bottom: 10px;
}

.errorMessage {
    position: absolute;
    bottom: -7px;
    left: 0;
    color: var(--red);
    font-size: 13px;
}
</style>