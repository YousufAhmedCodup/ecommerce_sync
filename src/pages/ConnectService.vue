<template>
    <div>
        <div class="sc-nbcfT ikXjjo"
            style="box-sizing: border-box; position: relative; margin-left: auto; margin-right: auto; padding-left: 16px; padding-right: 16px; max-width: 1216px;">
            <h2 class="text-3xl mb-10">Choose your flow services</h2>
            <div
                style="margin-left: 0px; margin-right: 0px; display: flex; flex-grow: 0; flex-shrink: 0; align-items: start; justify-content: flex-start; flex-flow: row wrap; flex-direction: column; gap: 52px;">
                <div
                    style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 0px; padding-right: 0px; width: 41.6667%; flex: 0 0 41.6667%; max-width: 41.6667%; margin-left: 0%; right: auto; left: auto;">
                    <div data-testid="sideATools" class=" sc-bcXHqe fRDptH sc-dZjHZU fwZyxc">
                        <div class="sc-bcXHqe bttOLS">
                            <div class="sc-bcXHqe fioeDI sc-cCmLNy eDKfjI">Sync in</div>
                            <div class="sc-bcXHqe bisnyh sc-cnMZnH fVzKUS">
                                <div class="sc-febvLc iFSume">
                                    <div role="combobox" aria-expanded="false" aria-haspopup="listbox"
                                        aria-labelledby="downshift-0-label" class="sc-jIRcFI diViob sc-jFmBXp hxjPJw">
                                        <div class="custom-select w-80" tabindex="0">
                                            <div class="selected" @click="toggleDropdown">
                                                {{ selectedOption.label }}
                                            </div>
                                            <ul v-if="isDropdownOpen" class="items">
                                                <li class="p-2 rounded-lg" v-for="(option, index) in options" :key="index"
                                                    @click="selectOption(option)">{{ option.label }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc-bcXHqe iOFbrj sc-kOjCZu eYkdVh"></div>
                    </div>
                </div>
                <div
                    style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 0px; padding-right: 0px; width: 16.6667%; flex: 0 0 16.6667%; max-width: 16.6667%; margin-left: 0%; right: auto; left: auto;">
                    <div class="sc-bcXHqe fUXITm sc-fZqfic ktsDBc relative"
                        style=" left: 17rem; transform: rotate(-0.25turn);">
                        <div class="sc-eKJbhj hbSPdg" color="#d7dde8"></div>
                        <div class="sc-bcXHqe inInwk sc-hyeYAt cBnWJ"><svg aria-hidden="true" focusable="false"
                                data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus " role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M232 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H184V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V72z">
                                </path>
                            </svg></div>
                        <div class="sc-eKJbhj hbSPdg" color="#d7dde8"></div>
                    </div>
                </div>
                <div
                    style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 0px; padding-right: 0px; width: 41.6667%; flex: 0 0 41.6667%; max-width: 41.6667%; margin-left: 0%; right: auto; left: auto;">
                    <div data-testid="sideBTools" class=" ml-64 sc-bcXHqe fRDptH sc-dZjHZU fwZyxc">
                        <div class="sc-bcXHqe bttOLS">
                            <div class="sc-bcXHqe fioeDI sc-cCmLNy eDKfjI">Sync in</div>
                            <div class="sc-bcXHqe bisnyh sc-cnMZnH fVzKUS">
                                <div class="sc-febvLc iFSume">
                                    <div role="combobox" aria-expanded="false" aria-haspopup="listbox"
                                        aria-labelledby="downshift-1-label" class="sc-jIRcFI diViob sc-jFmBXp hxjPJw">
                                        <div class="custom-select w-80" tabindex="0">
                                            <div class="selected" @click="toggleDropdown2">
                                                {{ selectedOption2.label }}
                                            </div>
                                            <ul v-if="isDropdownOpen2" class="items">
                                                <li class="p-2 rounded-lg" v-for="(option, index) in options2" :key="index"
                                                    @click="selectOption2(option)">{{ option.label }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc-bcXHqe iOFbrj sc-kOjCZu eYkdVh"></div>
                    </div>
                </div>
                <!-- :class="{ 'null-class': !testVal || !testVal2, 'not-null-class': testVal || testVal2 }" -->
            </div>
            <!-- <div class="flex justify-center mt-10">
                <button @click="emitCustomEvent" class="go"
                    :disabled='selectedOption.value == null || selectedOption2.value == null'>Connect</button>
            </div> -->
            <div
                style="margin-left: -16px; margin-right: -16px; display: flex; flex-grow: 0; flex-shrink: 0; align-items: normal; justify-content: flex-start; flex-flow: row wrap;">
                <div
                    style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 16px; padding-right: 16px; width: 100%; flex: 0 0 100%; max-width: 100%; margin-left: 0%; right: auto; left: auto;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import { store } from './store';
export default {
    data() {
        return {
            selectedOption: { label: 'Select', value: null },
            options: [
                { label: 'Bigcommmerce', value: 'option1' },
                { label: 'Woocommerce', value: 'option2' },
                { label: 'Shopify', value: 'option3' },
                { label: 'Magento', value: 'option4' }
            ],
            isDropdownOpen: false,
            selectedOption2: { label: 'Select', value: null },
            options2: [
                { label: 'Quickbook Cloud', value: 'option1' },
                { label: 'Netswift', value: 'option2' },
                { label: 'Microsoft Dynamics', value: 'option3' },
                { label: 'Odoo ', value: 'option4' },
                { label: 'Oracle Netsuite ', value: 'option5' },
                { label: 'Sage ERP ', value: 'option6' },
                { label: 'SAP', value: 'option7' },
            ],
            isDropdownOpen2: false
        }
    },
    computed: {
        // ...mapState(['selectedOption', 'selectedOption2'])
    },
    methods: {
        ...mapMutations(['setSelectedOption', 'setSelectedOption2']),
        toggleDropdown2() {
            this.isDropdownOpen2 = !this.isDropdownOpen2;
        },
        selectOption2(option) {
            this.selectedOption2 = option
            this.setSelectedOption2(option);
            this.toggleDropdown2();
        },
        emitCustomEvent() {
            this.$emit('custom-event', { /* event data */ })
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
        selectOption(option) {
            this.selectedOption = option
            this.setSelectedOption(option);
            this.toggleDropdown();
        },
        // toggleDropdown2() {
        //     this.isDropdownOpen2 = !this.isDropdownOpen2
        // },
        // selectOption2(option) {
        //     this.selectedOption2 = option
        //     this.isDropdownOpen2 = false
        // }
    },
    mounted() {
        // localStorage.setItem('YourItem', this.selectedOption2 = this.option)
    }
}
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 20rem;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
}

.custom-select .selected {
    background-color: #00B8F0;
    border-radius: 6px;
    /* border: 1px solid #ffffff; */
    color: rgb(2, 2, 2);
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    border: 1px solid #ad8225;
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    color: rgb(0, 0, 0);
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    /* border-right: 1px solid #000000;
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000; */
    position: absolute;
    background-color: #ffffff;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items li:hover {
    background-color: rgb(156, 155, 155);
    cursor: pointer;
}

.selectHide {
    display: none;
}

.items {
    padding: 10px;
    border-radius: 10px;
    margin-right: 6px;
    margin-top: 10px;
}

.go {
    padding: 6px;
    border-radius: 10px;
    text-align: center;
    width: 20rem;
    font-size: 20px;
    color: white;
    background-color: #63b3ed;
}

button:disabled {
    opacity: 0.1;
}

.ikXjjo {
    padding: 0px !important;
}

.fwZyxc {
    border-radius: 4rem;
    position: relative;
}

.fRDptH {
    box-sizing: border-box;
    /* padding: 2rem; */
    flex-wrap: nowrap;
    /* border: 1px solid rgb(215, 221, 232); */
}

.bttOLS {
    box-sizing: border-box;
    margin: 0rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.eDKfjI {
    font-weight: 700;
    white-space: nowrap;
}

.fioeDI {
    box-sizing: border-box;
    margin: 0rem;
    flex-wrap: nowrap;
}

.fVzKUS {
    min-width: 0px;
}

.bisnyh {
    box-sizing: border-box;
    margin: 0rem 0rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.iFSume {
    display: inline-flex;
    max-width: 100%;
}


.hxjPJw {
    max-width: 100%;
    min-width: 0px;
}

.diViob {
    position: relative;
}

.bdtmhc {
    background: rgb(234, 242, 255);
    border-radius: 0.5rem;
    border: 1px solid rgb(126, 176, 252);
    color: rgb(37, 119, 241);
    width: 100%;
    outline: none;
    padding: 0px;
}

[role=button] {
    cursor: pointer;
}

.hvmKEA {
    display: inline-flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
}

.kTiisp {
    box-sizing: border-box;
    padding: 0rem 0.5rem;
    flex-wrap: nowrap;
}

.iFSume div:not(:last-child) {
    margin-right: 8px;
}

.ljkCqj {
    white-space: nowrap;
    overflow: hidden;
    min-height: calc(2rem - 2px);
    margin: 0px;
    color: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.bPJWV {
    font-size: 0.875rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5rem;
    color: rgb(2, 6, 15);
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.bdtmhc {
    background: rgb(234, 242, 255);
    border-radius: 0.5rem;
    border: 1px solid rgb(126, 176, 252);
    color: rgb(37, 119, 241);
    width: 100%;
    outline: none;
    padding: 0px;
}

.ljkCqj label {
    display: flex;
}

.form-label,
label {
    display: inline-block;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 0;
    max-width: 100%;
}

label {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 5px;
    max-width: 100%;
}

.fVTjMt {
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.hFfHWU {
    box-sizing: border-box;
    padding: 0rem 0.25rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.ktsDBc {
    flex: 1 1 0%;
}

.fUXITm {
    box-sizing: border-box;
    padding: 1rem 0rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.hbSPdg {
    border-bottom: 1px solid rgb(215, 221, 232);
    border-top-color: rgb(215, 221, 232);
    border-right-color: rgb(215, 221, 232);
    border-left-color: rgb(215, 221, 232);
    flex: 1 1 0%;
}

.cBnWJ {
    border-radius: 100px;
    width: 4rem;
    height: 4rem;
    color: rgb(215, 221, 232);
}

.inInwk {
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px solid rgb(215, 221, 232);
    background-color: #2fb5ee;
    color: black;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
}

svg:not(:root) {
    overflow: hidden;
}

.svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}

.null-class {
    background-color: red;
}

.not-null-class {
    background-color: green;
}
</style>