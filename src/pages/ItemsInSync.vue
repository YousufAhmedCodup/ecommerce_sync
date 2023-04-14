<template>
    <div>
        <div>
            <p v-if="selectedOption2 != {}" class="text-xl mb-3 flex justify-between">{{ selectedOption.label }} <span
                    class="font-bold" style="color:blue">AND</span>
                {{ selectedOption2.label }}
            </p>
            <p v-else>No Items</p>
        </div>
        <hr>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['selectedOption', 'selectedOption2', 'selectedOptionFlows'])
    },
}
</script>

<style lang="scss" scoped></style>