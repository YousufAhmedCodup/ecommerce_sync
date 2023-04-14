<template>
    <div class="custom-select-option">
        <div class="selected-option" @click="showOptions = !showOptions">
            <span v-if="!selectedOption">Select an option</span>
            <span v-else>{{ selectedOption }}</span>
            <i class="fas fa-angle-down"></i>
        </div>
        <div class="options" v-show="showOptions">
            <div v-for="option in options" :key="option" @click="selectOption(option)">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CustomSelectOption',
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedOption: '',
            showOptions: false
        }
    },
    methods: {
        selectOption(option) {
            this.selectedOption = option
            this.showOptions = false
            this.$emit('option-selected', option)
        }
    }
}
</script>
  
<style scoped>
.custom-select-option {
    position: relative;
    width: 200px;
}

.selected-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.selected-option:hover {
    background-color: #e6e6e6;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 5px 5px;
    overflow: auto;
    max-height: 200px;
}

.options div {
    padding: 10px;
    cursor: pointer;
}

.options div:hover {
    background-color: #f2f2f2;
}
</style>