<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">Somar</button>
        <button @click="subtrair">Subtrair</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }        
    },
}
</script>

<style>
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        widows: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>