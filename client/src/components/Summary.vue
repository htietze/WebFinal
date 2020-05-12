<template>
    <div class="summary">

        <h3>You have visited {{ total }} {{ statesPlural }} </h3>

        <p id="visited-all" v-if="visitedAll">
            You have visited all 50 states and the District of Columbia!
        </p>

    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: {
        total: Number,
        visitedAll: Boolean
    },
    computed: {
        statesPlural() {
            return this.total === 1 ? 'state' : 'states'
        }
    }
}
</script>

<style scoped>
    #visited-all {
        color: green;
        font-weight: 600;
    }
</style>