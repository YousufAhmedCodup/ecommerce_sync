<template>
    <div class=" container m-auto">
        <div class="sc-WKhSL sc-fxhZON kaXeJe jNdLpj">
            <div class="sc-WKhSL jWbXnT">
                <div class="sc-ezfJye dteYhH">
                    <h3 class="sc-dXGMVt eHMxTv title h3">Most recent activity</h3>
                    <a type="href" class="sc-iBYQkv bLodIA">
                        <div class="sc-bcXHqe eixDla">
                            <svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="arrow-up-right-from-square" class="svg-inline--fa fa-arrow-up-right-from-square "
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z">
                                </path>
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="sc-ekFWYn eKrGnM">Last updated: Mar 10, 2023, 11:29:51 AM UTC</div>
            </div>
            <div class="sc-bcXHqe ftNUsY">
                <button class="sc-AHaJN fvncPR" role="switch" aria-checked="true">
                    <div class="sc-bcXHqe fVTjMt sc-khsqcC gaqxFw">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check"
                            class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z">
                            </path>
                        </svg>
                    </div>
                </button>
                <div class="flex gap-12">
                    <label for="toogleA" class="flex items-center cursor-pointer">
                        <!-- toggle -->
                        <div class="relative">
                            <!-- input -->
                            <input id="toogleA" type="checkbox" class="sr-only" />
                            <!-- line -->
                            <div class="w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                            <!-- dot -->
                            <div class="dot absolute w-6 h-6 bg-white top-0 rounded-full shadow -left-1 -top-1 transition">
                            </div>
                        </div>
                        <!-- label -->
                        <div class="ml-3 text-gray-700 font-medium">
                            Auto-refresh
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="sc-hWTqMA iFjQhp" style="background:white">
            <table role="table" class="sc-gkSfol claWOm">
                <thead>
                    <tr class="headers-row" style="background:#2fb5ee" role="row">
                        <th colspan="1" role="columnheader">
                            <div>
                                <span>
                                    <div class="sc-fVuMRb fGworL text-white">
                                        <span class="no-wrap">Timestamp</span>
                                    </div>
                                </span>
                            </div>
                        </th>
                        <th colspan="1" role="columnheader">
                            <div>
                                <span>
                                    <div class="sc-fVuMRb fGworL text-white">
                                        <span class="no-wrap">Activity type</span>
                                    </div>
                                </span>
                            </div>
                        </th>
                        <th colspan="1" role="columnheader">
                            <div>
                                <span>
                                    <div class="sc-fVuMRb fGworL text-white">
                                        <span class="no-wrap">Updated Fields</span>
                                    </div>
                                </span>
                            </div>
                        </th>
                        <th colspan="1" role="columnheader">
                            <div>
                                <span>
                                    <div class="sc-fVuMRb fGworL text-white">
                                        <span class="no-wrap">Status</span>
                                    </div>
                                </span>
                            </div>
                        </th>
                        <th colspan="1" role="columnheader">
                            <div>
                                <span>
                                    <div class="sc-fVuMRb fGworL text-white">
                                        <span class="no-wrap">
                                            <span>Updated item</span>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                    <tr v-if="selectedOption != {}">
                        <td>03 Apr | 11:24:45 AM</td>
                        <td>Create</td>
                        <td>Comments</td>
                        <td>Success</td>
                        <td>https://github.com/Yousuf</td>
                    </tr>
                </tbody>
            </table>
        </div>
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

<style scoped>
.iFjQhp {
    overflow: auto;
    border: 1px solid rgb(215, 221, 232);
    border-radius: 1rem;
}

.claWOm {
    width: 100%;
}

table {
    background-color: transparent;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.headers-row {
    height: unset;
}

.claWOm tr {
    height: 4.5rem;
}

.claWOm thead tr:last-child th {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgb(215, 221, 232);
}

.claWOm .headers-row th {
    border-bottom: 0px none rgb(255, 255, 255);
    padding-bottom: 0px;
}

.claWOm th,
.claWOm td {
    padding-left: 1.1875rem;
    padding-right: 1.1875rem;
}

.claWOm th {
    color: rgb(103, 120, 136);
    padding-top: 1.4375rem;
    padding-bottom: 0.75rem;
    font-weight: 400;
}

caption,
th {
    text-align: left;
}

td,
th {
    padding: 0;
}

.gBbBXd {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
}

.czMoMd {
    box-sizing: border-box;
    margin: 1.5rem 0rem;
}

.cpfMOy {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 40%;
}

.deefsV {
    height: 8rem;
}

img {
    vertical-align: middle;
}

img {
    border: 0;
}

.eHMxTv {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    margin-bottom: 0.5rem;
}

.title {
    margin-top: 0;
}

.cFCGne {
    background-color: rgb(243, 246, 248);
    border-radius: 4px;
}

.ctpCiH {
    box-sizing: border-box;
    margin: 0.5rem 0rem;
    padding: 1rem 1.5rem 1.5rem;
}

.ioEmez {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}

.gnpIgI {
    box-sizing: border-box;
    margin: 0.5rem 0rem 0rem;
}

.htzRvM {
    box-sizing: border-box;
    margin: 0rem 0.5rem 0rem 0rem;
}

.jAmEXd {
    color: rgb(0, 125, 210);
}

a {
    cursor: pointer;
}

a {
    color: #007dd2;
    text-decoration: none;
}

.dWROUD {
    padding: 0.75rem 1rem;
    font-size: 1rem;
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
    height: 40px;
    color: rgb(21, 42, 76);
    background: transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.gSYatj {
    height: 20px;
    vertical-align: text-bottom;
    width: 20px;
    opacity: 1;
}

.kkkiek {
    box-sizing: border-box;
    margin: 0rem 0rem 0rem 0.5rem;
}

.ispIXM {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.25rem;
    line-height: 1.6rem;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.jNdLpj {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end;
}

.kaXeJe {
    box-sizing: border-box;
    margin: 0rem 0rem 1rem;
}

.jWbXnT {
    box-sizing: border-box;
}

.dteYhH {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.eHMxTv {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    margin-bottom: 0.5rem;
}

.title {
    margin-top: 0;
}

.bLodIA {
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
    height: 32px;
    color: rgb(21, 42, 76);
    background: transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
}

a {
    cursor: pointer;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
}

svg:not(:root) {
    overflow: hidden;
}

.eKrGnM {
    color: rgb(103, 120, 136);
    font-size: 1rem;
}

input:checked~.dot {
    transform: translateX(100%);
    background-color: #48bb78;
}

/* Toggle B */
input:checked~.dot {
    transform: translateX(100%);
    background-color: #48bb78;
}
</style>