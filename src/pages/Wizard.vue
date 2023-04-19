<template>
    <div class="wrapper-stepper">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item" :class="{ 'current': step == item, 'success': step > item }" v-for="item in 4"
                :key="item">
                <div class="stepper-item-counter">
                    <!-- <img class="icon-success"
                        src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt=""> -->
                    <span class="number">
                        {{ item }}
                    </span>
                </div>
                <span class="stepper-item-title">
                    Step {{ item }}
                </span>
            </div>
        </div>

        <div class="stepper-content">
            <div class="stepper-pane" v-if="step == 1">
                <connect-service />
            </div>
            <div class="stepper-pane" v-if="step == 2">
                <login-services />
                <!-- Estas en el paso <span class="tx-green-1">{{ item }}</span> aqui mostrarás el contenido :D -->
            </div>
            <div class="stepper-pane" v-if="step == 3">
                <flow-direction />
                <!-- Estas en el paso <span class="tx-green-1">{{ item }}</span> aqui mostrarás el contenido :D -->
            </div>
            <div class="stepper-pane" v-if="step == 4">
                <manual-maping />
                <!-- Estas en el paso <span class="tx-green-1">{{ item }}</span> aqui mostrarás el contenido :D -->
            </div>
        </div>

        <div class="controls">
            <button class="btn" @click="step--" :disabled="step == 1">
                Back
            </button>
            <button class="btn btn--green-1" @click="step++" :disabled="step == 5" :class="{ 'hidden': step == 4 }">
                Next
            </button>
            <router-link class="btn btn--green-1" :class="{ 'hidden': step != 4, 'block': step == 5 }" to="/dashboard/flow">
                <button>
                    Launch
                </button>
            </router-link>
        </div>
    </div>
</template>
  
<script>
import ConnectService from './ConnectService.vue'
import LoginServices from './LoginServices.vue'
import FlowDirection from './FlowDirection.vue'
import ManualMaping from './ManualMaping.vue'
import { mapState } from 'vuex';
export default {
    data() {
        return {
            currentStep: 0,
            step: 1,
        };
    },
    components: {
        ConnectService,
        LoginServices,
        FlowDirection,
        ManualMaping
    },
    computed: {
        stepperProgress() {
            return (100 / 4) * (this.step - 1) + '%'
        },
        ...mapState(['selectedOption', 'selectedOption2'])
    },

    methods: {
        handleCustomEvent() {
            // Handle custom event data here
            this.step++
        },
        nextStep() {
            this.currentStep++;

        },
        previousStep() {
            this.currentStep--;
        }
    },
    mounted() {
        this.steps = this.$slots.default.filter(slot => slot.tag);
    }
};
</script>
  
<style>
/* Style for the wizard container */

.tx-green-1 {
    color: #63b3ed;
    font-weight: 600;
}

.wrapper-stepper {
    background-color: #fff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.09);
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80rem;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;
}

.stepper-progress {
    position: absolute;
    background-color: #c5c5c5;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.stepper-progress-bar {
    position: absolute;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #63b3ed;
    transition: all 500ms ease;
}

.stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c5c5c5;
    transition: all 500ms ease;
}

.stepper-item-counter {
    height: 45px;
    width: 45px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;
}

.stepper-item-counter .icon-success {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 24px;
    transition: all 500ms ease;
}

.stepper-item-counter .number {
    font-size: 14px;
    transition: all 500ms ease;
}

.stepper-item-title {
    position: absolute;
    font-size: 14px;
    bottom: -24px;
}

.stepper-item.success .stepper-item-counter {
    border-color: #63b3ed;
    background-color: #437539;
    color: #fff;
    /* font-weight: 600; */
}

.stepper-item.success .stepper-item-counter .icon-success {
    opacity: 1;
    transform: scale(1);
}

.stepper-item.success .stepper-item-counter .number {
    /* opacity: 0;
    transform: scale(0); */
}

.stepper-item.success .stepper-item-title {
    color: #63b3ed;
}

.stepper-item.current .stepper-item-counter {
    border-color: #63b3ed;
    background-color: #63b3ed;
    color: #fff;
    font-weight: 600;
}

.stepper-item.current .stepper-item-title {
    color: #818181;
}

.stepper-pane {
    color: #333;
    /* text-align: center; */
    /* padding: 120px 60px; */
    /* box-shadow: 0 8px 12px rgba(0, 0, 0, 0.09); */
    margin: 40px 0;
}

.controls {
    display: flex;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border-color: #f0f0f0;
}

.btn:disabled {
    opacity: 0.5;
    pointer-events: none;
}

.btn--green-1 {
    background-color: #63b3ed;
    border-color: #63b3ed;
    color: #fff;
    margin-left: auto;
}

.hidden {
    display: none;
}
</style>