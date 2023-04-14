<template>
    <div>
        <div class="custom-row flex justify-center gap-10 items-center m-5" v-for="(row, index) in rows" :key="index">
            <div class="column flex justify-between gap-12">
                <custom-select-option :options="options" @option-selected="onOptionSelected(index)"></custom-select-option>
                <div class="flex items-center gap-2">
                    <custom-select-option-2 :options2="options2"
                        @option-selected="onOptionSelected2(index)"></custom-select-option-2>
                    <div class="column">
                        <button @click="removeRow(index)">
                            <img class="w-6"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAb1BMVEX0Qzb////6+vr6///0QTT0PzH0MyL4yMb0Nyf0PC30OSr4y8nzKxfzLRv3jYf0SDv82df4l5H2g331T0P76+r67+7zJxD809H3nJf+9/f6tbL1aWD2cGj5xMH95uX5pJ/1XFH5rqr3eXL6vbn2ZFuIMMhxAAAERElEQVRogc2baaOqIBCG0ZDEpSw1y+WU2f//jRezBXBBXJr7fjyHeBwZhhEGZGgrDorycMxv4R6hfXjLj4eyCGL9fpBW60tS3kPHJrZDLYwRE8YWff4hvJfJZS30X1VjGRN1iD0BscN79bc8Okpz5FPcif3yqY/yNFoUHRwp4w5iv3R6DBZDV4+TM4r7pp+yahF0hTxrPLeR5aF0NrrYEw2DOdPJvpiFDjKibfHHcpINj/kQ+nKmdCq4FqXnoZk+gE5u0971V5jckinoq753tWV5V210/PDng2v5j77w3oNOrFmjzItaPS+9G51Od+y2LLt7jneiz3P9SxQm57Honb8ombH93Tj0biEH49XFbqN33vJkhLw2u4Vew+Zabbtl9HklMmPLviah02V9mxcm6RA6sVcj1+ykHx1bC0aStiwr7kU/Foue3aKPPvR1NRd7y792o5NVJrQoL+lCX26rDnQj63bpQB/I+mSEuJXkgw7GpfhzhWnQQmcre/dbNJPRxU9edy1SSOj9D3yskbUX0dXPjGZmpwIa/cTHGmHEo6sR0UTxba3Ryqs49EM50pStaY6jasVaYFs5VazHFx2cVK1J5kZxsPMGbcLeLogjN1P6zSn4oI+qByWHzcY0N5tiiI29ommljIvO8Y2OVIGMZqzLWhu3P4vBxH23UoUnTKMXOlUtlva7U3Oz7dvawM7208i1FR366Qudqx4SR6apYHNk04xUfk7zBv2nmtQYxSbH7nrnmHBkM1b3+PdEV8rkxAm4fjfuqdUxPrl8i0A5C/3qib4rJ6Kz4zpmdstsfNoKDXZKNL3X6EuoDkBs2vBdS36OfVf4d6GOjTi8MHSicse6pSd2vuXzdWyLNrvDgaf5jZMwdDlm0RLdSPBzwbf73LAlu2Ro9VB3At52yzb3TnxRbLCREY5LEmS223z/Y38SGVmhgeKxO6/fQMnNMdm3BwKtbEmMghFe9motYzws+3bHlO+THSCNfFAMHLVDSc6nQWbZISpHW90e2KKY4Nsv2SU6KCMPz5bcuX+yK+UckDJNENmin0/x7ZfoEeV6CbhkNzfOmhsSVo5ummmwNN4fsu42H76hEYuH9BvRz/V9+9VNiPaaP6nXEtnuzXbEiiFLH1yziTCp2CRbb8trJTTgCwd0M8DJBRhSAAMp4PIBuGgCpgrzEiRvToIEmBYCJsOQnwAwHz6khP3cA/zIBfy0h9zQANzGAdy8gtyyA9yoBNyehdyUNrLfbsVn3CnAiPiz5AFE8X8cu0AeNgEesUEeLCqj6VJ6xlARDXiIbJzBjs4hCwYAyyQgi0MgS2IgC4GMZM1dqMHyJ8iiL8hSN8gCP8iyRshiTsgSVsjCXchyZRZbMFSRNmRpugFYkG9AXkOAvHxhzL1ykk+/clIL7KJNrRTqetHTcv1LVSqLx6IBr5LVArtA9xTUtcFGUJclP/yFroj+AySWU7g5vIsHAAAAAElFTkSuQmCC"
                                alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="column mt-5 flex justify-center">
            <button @click="addRow"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <img class="fill-current w-4 h-4 mr-2" src="https://cdn-icons-png.flaticon.com/512/107/107256.png" alt="">
                <span>Add Map</span>
            </button>
        </div>
    </div>
</template>
  
<script>
import CustomSelectOption from './CustomSelectOption.vue'
import CustomSelectOption2 from './CustomSelectOption2.vue'
export default {
    components: {
        CustomSelectOption,
        CustomSelectOption2,
    },
    data() {
        return {
            options: ['Title', 'Order id', 'Description', 'Product Info', 'Pricing', 'Payment Info', 'Shipping', 'Customer'],
            options2: ['Name', 'categorization id', 'Representation', 'Product Info', 'Cost', 'Amount Info', 'freight', 'Purchaser'],
            rows: [{}]
        }
    },
    methods: {
        onOptionSelected(index) {
            return (option) => {
                this.rows[index] = option
            }
        },
        onOptionSelected2(index) {
            return (option2) => {
                this.rows[index] = option2
            }
        },
        addRow() {
            this.rows.push('')
        },
        removeRow(index) {
            this.rows.splice(index, 1)
        }
    }
}
</script>