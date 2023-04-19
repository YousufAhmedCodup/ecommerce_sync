<template>
    <div class="container mx-auto">
        <h2 class="text-3xl text-center">Flow direction & Frequency</h2>
        <div class="mt-3 relative flex flex-col rounded-xl items-center justify-between">
            <div class="mt-3 relative flex items-center justify-between gap-32" href="#">
                <div class="flex items-center gap-5">
                    <div>
                        <img v-if="selectedOption.label == 'Bigcommmerce'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAgVBMVEX///8AAAA0Mj/w8PE/PUkAABgiHzApJjZ8eoGBgIb29vb7+/vLy8tcXFzm5uZWVlYbGCvW1ta4uLt+fn6VlZWqqqrCwsKJiYk2NjZvb28hISFoaGgxMTGxsbHe3t8sLCyenp4UECZtbHMGAB+PjpNkYmpLSVNZWGIAABybmp8AABPN/JqQAAAE4ElEQVRogc2b65qiMAyGi8yCCuLiAXU8jODo7Mz9X+ACWmihLUkJy34/0YeXtmmapilz8FquN9skjtw5Y2zuRnGy3ayXFu9hSOwucQOmUuAmO+QHINj7g44r8A97evb7MXSNXC43PL6Tsk/nCAR+KjqfyNiLEAF+KlyQsI8XNLnQ5dibvYityIXirrab2afEmlwoMY+7kb2b90Lnnmdnyf7Am1hb4YcNe01ALrTGs/uNtKgEyd5jfEmXIo2fVbMXfY1M1lw925RskqGWHINy0FXsHQX687e09qgmm4J9JUHf3uR17wph06DTSYOtgLfYRB0+abHb3d5kk5hZgW6zWwbXYC/I0Ao2W5jYe4p5/USr2PO9gU3hzT5vEx2bRXo2hQ/PLVzPln27yKaws1eH69iSvQnsD1K0hs0+lGyCUEFA69ihik3gVGYCWscWXEzFPvWfXrN0AmDPTy12fxsXO9zArm2ds/s7tAZaz67cG2fbbwE42ptA2bHMPvZFzxqtNrHZUWLb7blMaBP7IrL7jvY0baFN7NeIMwq3omi1mR3W7NMAaCObnSr2uR+6aeEA9pmz33st2+pWd7Cj9xe71wTToc3scpqxnpamsnAIO3yy97DklUpB5qRpeks9H8t29yX7YI1mQVQqvN79Ft3MZoeSTbLTvsya8A52UrLtu1xSiGO7BXtpzpHCFfkYdrDM2SQbsFKXXwh2HjsxwsQKk8a8i53kbKvhDiKXS4jzLh6C7eZsq+FO/Deux6yGYPo8cNjSBs1WgjvzHhXl7sPZOdluI7QSvXh65Y+nGPaabfqz/Yw//sKwN2zbn+3N+GOMnedkuykm9zlfCBOMnedku8B89eNx/fav/OkDY+c52S5mia5c21X1hitoP1a/g+Fci8k6zn8mKLbLUNvPLNP+5DYjmE42buM7Tae6ny4pfD9mo6nna9lB+OUNyJ56Ez2bwfff1efCe/2et8vIljwqaLyhPVOga3Y8nXF9nqvPx7Fd6PzOytGs2KubX8nzuX/C+bUI5teCJ1pgS2vJG48BUP48hvnzF1rDnnj8Jaj1OwGtYxytZa9ej789BHsLWb/v1Rt1bL6QbTHsDSBuqdHa8eZ/RbV73R2vZcL7ana9hnp/HtVcyXDxWkecGojomh19V9rG9RvEgQDEqR3xuYTu8Gssxsbnxkkmo7vYGXZfYtqP3Rtrk5kdSsEDZD9m2Ic20WZ2eJsg2OU+VDvgQdZKXpnYV3AeuZRryjso0Fr2/LJ9IOOWxJRvUaBzzRSaZl8+Kpdb6GDIM7XG+tVypVT/BOWZlPk1DRohUH5NlVf8UjaFkH3U5VOD/q2G5lObeWSVhROzz5r8OUmrwflz2dqaQf4AbOHcQDovITCzTrZ4XiKcE306v0j04wHPiQTfFrhEMmx4DsTnggg1zgVpCjyAap6HUqZVO9Q6B6Y4/4ZJcf5NmMs2S3HuT1LvAJCy3oGkzqNb6joPsspMkzT1Lf/C1rV1PTT1TCYZ6plo6rj0MtZxDezejPVrw9pbR93ekC6ms16RqE5TIUCd5lBwUH3qMN0OrMsdwuDA9cij1mGPWn/ujFl374x632DUexbOmPdLnFHv1Thj3icqZHuP6tD55v/7/lih8e7NFRrvvmCp0e5JvjTW/dD6A+p7sUGfe7F/AfQaU+6cB6mfAAAAAElFTkSuQmCC"
                            alt="Your Company">
                        <img v-if="selectedOption.label == 'Woocommerce'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption.label == 'Shopify'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption.label == 'Magento'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                    </div>
                </div>
                <div class="">
                    <div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label"
                        class="sc-jIRcFI diViob sc-jFmBXp hxjPJw">
                        <div class="custom-select" style="width:24rem" tabindex="0">
                            <div class="selected" @click="toggleDropdown">
                                {{ selectedOptionFlow.label }}
                            </div>
                            <ul v-if="isDropdownOpen" class="items">
                                <li class="p-2 rounded-lg" v-for="(option, index) in options" :key="index"
                                    @click="selectOption(option)">{{ option.label }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-5">
                    <div>
                        <img v-if="selectedOption2.value == 'option1'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACCCAMAAABW6lvMAAAAZlBMVEUsoBz///8AmQAZnACPx4kmnhMAlwAhnQtOq0X7/vvG4MZpuGE2oygRmgDs9evp9Ojg79/V6dO83LlGqTvy+fGfzpyx165Apj13vHFasFE2oy+p06XB3r6q0qhqtmiXy5KEwoGAwHnriuSkAAAH0ElEQVR4nNWc26KjKgxAUYpolXp3Wttt9f9/8qCtihIU0D6cvM2uwhJCSEIY5NhInL7+Lt0jj1AvUf7oLn+vNLZqC5m+cEvLMEcUM0wJGoUM/0Z5WKa33xLEz6Z2mdD1Ughlbt08zcbCgCApH566d4HCe5TJ+QRF5rt4r/eJArt+VpxKcHvn2t2PEPlbTyV0COILYWb9DwyMXHQ0Yp+gaF1s3P1HsNvuz8UeQVFS2/4HBlruMewQXH12oP9emH89QBC0rvn8r4W4bWBL8CJHJmAWTF5WBMHFcAGqheCLehiUBHF4VANEYaFyYaoIUnTODIyCUWpGUHlnzcAoxKtMCMozZ2AUVuoTXH4BwBEuugT33wBwhLseQfcrAI7Q6RC8fwfAEd77BDZKyLC28ZLVcU1QueYAOK0uke4O4q4X5YogtQBAbv9mVmuaMDfdIrjVNoZoIOBmXA+B1Dc1QaDZCEjgBL4ePg4DJYGlJfoSOIXmFC4tk0hwtVyHI4Hz1hxCdoUJAislEAkSzRdIHYAE1rvBROA8NL9BnIeZILW2hTNBq6vJLJUJggc9TnDRJaCPQCKo7LcDCwLEqjVBcGA/siFALFgR6C6k0wjwe0lQHPFLrQgQLhYEhxxDO4Jxn/4Q3A70b0uA0E0geO4OAaEYEJDg8+Ruugex50yws6tRTCM/vF9koQABbfgP7T30I/7e5kf5wURw3Rg8wrywShVJABcgcMdtp0ir0NtKvuDrRBAqWYnrPzdi702CYXSfvtp9o+FIUHiqZ1j+2oz9dwk4Q5YrlcwrvgQqg0zwe7N/LQLO8FZ50oNp7glC+AEcqcJdMwK+7UawopHwQ1DAQ8DCnQHQJ+AOqKKPYiDIQPcOQzGeLQGPRcFRcLOBoINWAhhkHiCAw2Ha9QTFP0AN6ENuI5hkm+DliI9MAnlA5F/BCSDvjKClCQqu5SOPvkLm6BMiQMND9aO8LjEKAnwp99YQuBbxIv1WlL54qCC4mSDB5xsoY/4yn/oCVIGvR+R08g9LLayipWnFOgQDBYsWYSqgjbjjBMCuFAmRXRCuLaY2ARevEabiFkk9Ed9BhfxnMca/PSRwEwKEH8JMAH5QVKBUHgIqDIEMYEbAEYTPkZcDSZGsH7Sd34FySmYEi9xRKyHgF5KXgjdvB1do1zQkQN5solKpPVYh2U2n0wuw72RK8PWFBpHH4I0km0znpfgCHQdTAuTN1uUu9dYhaWue4ylFKGxMQGZllOachEgaaDqpQSIvVCsChKYD0HQ9BsRHUi/RdBKQwe2ZE+BsfCCWu5Mfn/MbiuyqOcGcSQ1q8IGFkH9Tew3sQpsT0GZ6AnIF1AQKJ96CIPzfEsC+nY0m3k0IUD1tZop41kITn+MDBaCJ8p+mxasIJy3GYNoZ5IxjLVuk+fEbvHTMCeZctvRR3CJJS24eMsVyNCYQFqM0sbRBUhJScNTh0wZjAuFEQXLZcYtK6SV33kzBQTAlEIYgkD4JlyiTFN6dN9PkFA9lLsx5SQQsQ7LCk5kZPHYyJBAPlhrJGuArSmQT4QrVRBcZwYzAFdLoidwYSRCwW/EwQkCQZsmIYHGeAgRHdYAgR4iKqYs/b6WOBgTU+xNaktyTwX1C0JkA9YX3nLhZlgNpE2C3WdQ9+DIBbjnBCwoJliejaVczhikXskPg0q9gxur7Mgskr3s+SS9OkEAraH0sGad/l5BLP2UbBM9H+JX2uS5XBM0bTjhBAHnEJIKLyvpmNgg25BZB3TyCPosDHg7RHES42hLcctC8tkMeCQzNOAJUPWNLEIMAQ0DXZ/NgZ4xGQJmjJUESKfr4ZPPkUOojxH1KTdkRPBW55SFA7Amg9TgIfqyHwYYgAXIQH2GvL4GjPLGmtF0ymBMkLVVm7ocXBwLAXk/DgBsxQ2lKcL3jjba7iQAw2MI4eKyp0jgwIwiCOK0ad72nLFtOJwIw3yk+iimqc59LDtlE4suS12jnkGd0Bz8EsqMkCxkEAQTfn5ay3yDLBALdAo5BZAIrGZM73xNPkyKgkwhG7+1LYFJ/cQ7BVIcxnnwbHP6fQzClq6b6A/1BOIWA1M6aYOvU8wcEc3Q616EosgW/IRAyCjMBEDgo3u6OE5AEIHAq5dHr6u1/hwnEqlmxJkt9/LyUOZywJBDySkuCGGmWtt2PERAUKwi0LeOU/7cjWBZJLusT35pN0uQAgbusVV0S6BYokuhlTbAqT1xXiRaaqkBwF9sRrA9TpUrZRPfODPb89mleykbY2vmVqoWv2q0SmxsuVDoXlyumdfwla2GZ1B9QNa5rGy0EukEAVc4fKBTcFgZdYQBvD2T7BVUWQqg8BSoCro7nIxBZCTcI+FZ97jWW/kqR4sah6iZNcepVnr6yR3W7THmbKHifcJ9rFOKqa6s27nRlyLp6dyUUgTq4S+DE4ZGIZBZXfZ1qh4APwwkKicnGAOwSOLduJwDeE4q7ncumu3c8U9/ihukohPm71XUa91yz3HJVEDffngBdAsd5hZu5EFioF25dazQjcIJrg8wsFEPNdb+6UJ/A6W98U6Z5a4lgRvVvfZvce0/fucd28jOEMC9/76qfJQGfjaRs+qMGmIL0hwpNmeiNvh1BL7e0uvs1ohwEj8cZvGuKav9emf/nAxYEgxRJmlXlpe16aS9llaWJ7lX7lfwH2VFf/u6pZ3gAAAAASUVORK5CYII="
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option2'" class="mx-auto h-12 w-auto"
                            src="https://object-storage-ca-ymq-1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-images-prod/openstack-logo/OpenStack-Logo-Horizontal.png"
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option3'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option4'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option5'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option6'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                        <img v-if="selectedOption2.value == 'option7'" class="mx-auto h-12 w-auto"
                            src="data:image/png;base64,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"
                            alt="Your Company">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center gap-5 items-center">
            <h2 class="mt-10 text-xl">Sync Frequency
            </h2>
            <div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label"
                class="sc-jIRcFI diViob sc-jFmBXp hxjPJw">
                <div class="custom-select" style="width:24rem" tabindex="0">
                    <div class="selected" @click="toggleDropdownFre">
                        {{ selectedOptionFlowFre.label }}
                    </div>
                    <ul v-if="isDropdownOpenFre" class="items">
                        <li class="p-2 rounded-lg" v-for="(option, index) in optionsFre" :key="index"
                            @click="selectOptionFre(option)">{{ option.label }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['selectedOption', 'selectedOption2', 'selectedOptionFlows']),
        selectedOptionFlow() {
            return { label: 'Select', value: null };
        },
        options() {
            return [
                { label: `${this.selectedOption.label} to ${this.selectedOption2.label}`, value: 'option1' },
                { label: 'Both', value: 'option2' },
                { label: `${this.selectedOption2.label} to ${this.selectedOption.label}`, value: 'option3' }
            ];
        },
        selectedOptionFlowFre() {
            return { label: 'Select', value: null };
        },
        optionsFre() {
            return [
                { label: 'Once an Hour', value: 'option1' },
                { label: 'Twice an Hour', value: 'option2' },
                { label: 'Once a Week', value: 'option3' },
                { label: 'Twice a Week', value: 'option4' },
                { label: 'Once a Month', value: 'option5' },
            ];
        }
    },
    data() {
        return {
            checkedNames: [],
            isDropdownOpen: false,
            isDropdownOpenFre: false,
            selectedFrequency: '1'
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
        selectOption(option) {
            this.selectedOptionFlow.label = option.label;
            this.selectedOptionFlows.label = option.label;
            this.isDropdownOpen = false
        },
        toggleDropdownFre() {
            this.isDropdownOpenFre = !this.isDropdownOpen
        },
        selectOptionFre(option) {
            this.selectedOptionFlowFre.label = option.label;
            this.isDropdownOpenFre = false
        },
        onFrequencyChanged() {
            this.$emit('frequency-changed', this.selectedFrequency);
        }
    }
}
</script>

<style scoped>
.diViob {
    position: relative;
}

.hxjPJw {
    max-width: 100%;
    min-width: 0px;
}

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

button:disabled {
    opacity: 0.1;
}

.go {
    padding: 6px;
    width: 8rem;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    color: white;
    background-color: #63b3ed;
}

#radios label {
    cursor: pointer;
    position: relative;
}

#radios label+label {
    margin-left: 15px;
}

input[type="radio"] {
    opacity: 0;
    /* hidden but still tabable */
    position: absolute;
}

input[type="radio"]+span {
    font-family: 'Material Icons';
    color: #B3CEFB;
    /* border-radius: 50%; */
    padding: 12px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
}

input[type="radio"]:checked+span {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    transition: border 0.1s ease-in-out 0s, background-color 0.1s ease-in-out 0s;
    text-decoration: none;
    line-height: 1;
    height: 46px;
    color: rgb(255, 255, 255);
    background-color: #63b3ed;
    border: 2px solid #63b3ed;
    box-sizing: border-box;
}

input[type="radio"]:focus+span {
    color: #fff;
}

/* ================ TOOLTIPS ================= */

#radios label:hover::before {
    content: attr(for);
    font-family: Roboto, -apple-system, sans-serif;
    text-transform: capitalize;
    font-size: 11px;
    position: absolute;
    top: 170%;
    left: 0;
    right: 0;
    opacity: 0.75;
    background-color: #323232;
    color: #fff;
    padding: 4px;
    border-radius: 3px;
    display: block;
}

/* =============================================
* CENTERING, CONTAINER STYLING ETC || IGNORE
=============================================== */

label span {
    font-size: 31px;
}

#radios {
    text-align: center;
    margin: 0 auto;
    border: 1px solid gray;
    width: 35rem;
    /* padding: 10px; */
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>