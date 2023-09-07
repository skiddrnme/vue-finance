<template >
    <div>
        <form @submit.prevent  action="/" class="goal_form">
            <input v-model="newGoal.name" type="text" placeholder="Название цели">
            <input v-model="newGoal.sum" type="text" placeholder="Сумма">
            <button @click="createNewGoal">Создать цель</button>
        </form>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    const newGoal = ref({
        name: '',
        sum: '',
    })
    import {useGoalsStore} from "../store/goals.js"
    import {useModalStore} from "../store/modal.js"
    const goals = useGoalsStore()
    const modal = useModalStore()
    const createNewGoal = () => {
        goals.addGoals(newGoal.value)
        modal.show = false
    }
</script>
<style scoped>
    .goal_form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>