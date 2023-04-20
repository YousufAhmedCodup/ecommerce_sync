<template>
    <div>
        <!-- <acordian title="First Section">
            <p>Content for the first section goes here</p>
        </acordian>
        <acordian title="Second Section">
            <p>Content for the second section goes here</p>
        </acordian> -->


        <div id="app" class="w-2/4  bg-white border-grey-light border">
            <acordian title="Flow 1">
                <div style="border: 1px solid #cbcbcb; padding: 9px 38px 7px; border-radius: 15px;"
                    class="sc-bcXHqe gfeINC">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <img class="mx-auto h-12 w-auto"
                                                        src="data:image/png;base64,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"
                                                        alt="Your Company">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                    <img class="w-16" src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <div>
                                                        <img class="mx-auto h-12 w-auto"
                                                            src="data:image/png;base64,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"
                                                            alt="Your Company">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </acordian>
            <acordian title="Flow 2">
                <div style="border: 1px solid #cbcbcb; padding: 9px 38px 7px; border-radius: 15px;"
                    class="sc-bcXHqe gfeINC">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <img class="mx-auto h-12 w-auto"
                                                        src="data:image/png;base64,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"
                                                        alt="Your Company">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                    <img class="w-16" src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <div>
                                                        <img class="mx-auto h-12 w-auto"
                                                            src="data:image/png;base64,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"
                                                            alt="Your Company">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </acordian>
            <acordian title="Flow 3">
                <div style="border: 1px solid #cbcbcb; padding: 9px 38px 7px; border-radius: 15px;"
                    class="sc-bcXHqe gfeINC">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <img class="mx-auto h-12 w-auto"
                                                        src="data:image/png;base64,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"
                                                        alt="Your Company">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                    <img class="w-16" src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="">
                    <div>
                        <div class="sc-bcXHqe aFZJk">
                            <div class="sc-bcXHqe cQdKma">
                                <span>
                                    <a data-color="#007dd2" class="sc-hjsNop jAmEXd href sc-bcXHqe cQdKma" target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/YousufAhmedCodup/testting/issues">
                                        <div class="sc-hBxehG VYoxG">
                                            <div class="">

                                                <div>
                                                    <div>
                                                        <img class="mx-auto h-12 w-auto"
                                                            src="data:image/png;base64,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"
                                                            alt="Your Company">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </acordian>
        </div>
    </div>
</template>

<script>
import acordian from './acordian.vue';

export default {
    components: {
        acordian,
    },
}
</script>

<style scoped>
/* strong {
    color: black !important;
} */
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
    background-color: rgb(47, 187, 242);
}

.kImHmT {
    box-sizing: border-box;
    padding: 0rem 1rem;
    flex-wrap: nowrap;
}

.klTbkE {
    box-sizing: border-box;
    margin: 1.5rem 0rem;
    flex-wrap: nowrap;
}

.kKWtMI {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(2, 6, 15);
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.bXLVaN {
    box-sizing: border-box;
    margin: 0.5rem 0rem 0rem;
    flex-wrap: nowrap;
}

.izoDZE {
    font-size: 1rem;
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

.dSBTLL {
    color: rgb(103, 120, 136);
}

.gXrlqh {
    box-sizing: border-box;
    margin: 2rem 0rem 1rem;
    padding: 1.5rem;
    flex-wrap: nowrap;
    border: 1px solid rgb(215, 221, 232);
    border-radius: 1rem;
}

.byueIW {
    box-sizing: border-box;
    flex-wrap: nowrap;
    width: 100%;
}

.eLcUsG {
    flex-direction: row;
    pointer-events: auto;
}

.byLcOX {
    outline: none;
    width: 100%;
    cursor: default;
}

.bvVjNp {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

[role=button] {
    cursor: pointer;
}

.hepdPD {
    outline: none;
    width: 100%;
    cursor: pointer;
}

[role=button] {
    cursor: pointer;
}

.eLcUsG {
    flex-direction: row;
    pointer-events: auto;
}

.byLcOX {
    outline: none;
    width: 100%;
    cursor: default;
}

.bvVjNp {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.iClxKy {
    font-size: 1.25rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(2, 6, 15);
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.ZyidQ {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    pointer-events: auto;
    opacity: 1;
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

*,
:after,
:before {
    box-sizing: border-box;
}

/* div {
    display: block;
} */

.eLcUsG {
    flex-direction: row;
    pointer-events: auto;
}

.byLcOX {
    outline: none;
    width: 100%;
    cursor: default;
}

.bvVjNp {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
}

.gfeINC {
    box-sizing: border-box;
    margin: 1.5rem 1rem 1rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.aFZJk {
    box-sizing: border-box;
    margin: 0rem -1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.jAmEXd {
    color: rgb(0, 125, 210);
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

a {
    cursor: pointer;
}

a {
    color: #007dd2;
    text-decoration: none;
}

a {
    background-color: initial;
}

.VYoxG {
    width: 4rem;
    height: 4rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(215, 221, 232);
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.rFXZT {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.psmWh {
    box-sizing: border-box;
    padding: 1rem;
    flex-wrap: nowrap;
}

*,
:after,
:before {
    box-sizing: border-box;
}

/* div {
    display: block;
} */

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

.jauCxb {
    box-sizing: border-box;
    margin: 0rem 0rem 0rem 1rem;
    flex-wrap: nowrap;
}

.jAmEXd {
    color: rgb(0, 125, 210);
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.ggrfXJ {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
}

.hVAkxM {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(2, 6, 15);
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.gDXGse {
    color: rgb(103, 120, 136);
}

.ggrfXJ {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
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

.iILcet {
    box-sizing: border-box;
    margin: 0rem -1rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.jZiZlb {
    box-sizing: border-box;
    margin: 0rem 1rem 0rem 0rem;
    flex-wrap: nowrap;
}

.jAmEXd {
    color: rgb(0, 125, 210);
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.ggrfXJ {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
}

.guIlPU {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(2, 6, 15);
    text-align: right;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.gDXGse {
    color: rgb(103, 120, 136);
}

.ggrfXJ {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
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

.jAmEXd {
    color: rgb(0, 125, 210);
}

.cQdKma {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

a {
    cursor: pointer;
}

a {
    color: #007dd2;
    text-decoration: none;
}

.VYoxG {
    width: 4rem;
    height: 4rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(215, 221, 232);
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.rFXZT {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.psmWh {
    box-sizing: border-box;
    padding: 1rem;
    flex-wrap: nowrap;
}

.egsKZR {
    border-top: 1px solid rgb(215, 221, 232);
}

hr {
    border: 0;
    border-top: 1px solid #eee;
    margin-bottom: 27px;
    margin-top: 27px;
}

hr {
    box-sizing: initial;
    height: 0;
}

.hVrezI {
    box-sizing: border-box;
    margin: 0rem 0rem 1.5rem;
    flex-wrap: nowrap;
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

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
}

svg:not(:root) {
    overflow: hidden;
}

.eJvonZ {
    box-sizing: border-box;
    padding: 0rem 0rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.fQohSU {
    box-sizing: border-box;
    margin: 1rem 3rem;
    flex-wrap: nowrap;
}

.flcxZU {
    box-sizing: border-box;
    padding: 0rem 0.5rem 0rem 2rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px solid transparent;
    border-radius: 0.5rem;
}

.doDKPi {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: flex;
}

.erpXFd {
    box-sizing: border-box;
    padding: 0rem 1.5rem 0rem 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
}

.bPMhhj {
    width: 100%;
}

.gpvtNr {
    box-sizing: border-box;
    padding: 0rem 1rem 0rem 0rem;
    flex-wrap: nowrap;
}

.eGofBn {
    box-sizing: border-box;
    padding: 0.25rem 0rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.hqohdU {
    flex: 1 1 0px;
    max-width: 100%;
    min-width: 0px;
}

.bqwgnO {
    box-sizing: border-box;
    flex-wrap: nowrap;
}

.Mhouh {
    max-width: 100%;
    min-width: 0px;
}

.diViob {
    position: relative;
}

.kNzqiz {
    background: rgb(243, 246, 248);
    border-radius: 0.5rem;
    border: 1px solid rgb(243, 246, 248);
    color: rgb(2, 6, 15);
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

.hPYUW {
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

.jiNOAk {
    min-width: 0px;
}

.bisnyh {
    box-sizing: border-box;
    margin: 0rem 0rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.TbIzk {
    white-space: nowrap;
}

.XsZVk {
    font-style: normal;
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.hFfHWU {
    box-sizing: border-box;
    padding: 0rem 0.25rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
}

.dkKJDz {
    box-sizing: border-box;
    margin: 0rem 1rem;
    flex-wrap: nowrap;
}

.eJwSjD {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(156, 171, 185);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
}

.dIoshd {
    box-sizing: border-box;
    margin: 0.25rem;
    flex-wrap: nowrap;
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

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.dIoshd {
    box-sizing: border-box;
    margin: 0.25rem;
    flex-wrap: nowrap;
}

.kPejpw {
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
    color: rgb(255, 255, 255);
    background: rgb(47, 187, 242);
    border: 2px solid rgb(47, 187, 242);
    box-sizing: border-box;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.dIoshd {
    box-sizing: border-box;
    margin: 0.25rem;
    flex-wrap: nowrap;
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

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.hqohdU {
    flex: 1 1 0px;
    max-width: 100%;
    min-width: 0px;
}

.bqwgnO {
    box-sizing: border-box;
    flex-wrap: nowrap;
}

.Mhouh {
    max-width: 100%;
    min-width: 0px;
}

.diViob {
    position: relative;
}

.kNzqiz {
    background: rgb(243, 246, 248);
    border-radius: 0.5rem;
    border: 1px solid rgb(243, 246, 248);
    color: rgb(2, 6, 15);
    width: 100%;
    outline: none;
    padding: 0px;
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

.hPYUW {
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

.jiNOAk {
    min-width: 0px;
}

.bisnyh {
    box-sizing: border-box;
    margin: 0rem 0rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.TbIzk {
    white-space: nowrap;
}

.XsZVk {
    font-style: normal;
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.hFfHWU {
    box-sizing: border-box;
    padding: 0rem 0.25rem 0rem 0.5rem;
    flex-wrap: nowrap;
}

.hnTIUR {
    box-sizing: border-box;
    padding: 0rem 0.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px solid transparent;
    border-radius: 0.5rem;
}

.byueIW {
    box-sizing: border-box;
    flex-wrap: nowrap;
    width: 100%;
}

.cVuSHd {
    padding: 0px 0.5rem;
}

.eRqITb {
    flex-direction: row-reverse;
    pointer-events: auto;
}

.byLcOX {
    outline: none;
    width: 100%;
    cursor: default;
}

.bvVjNp {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}

.byLcOX {
    outline: none;
    width: 100%;
    cursor: default;
}

.doDKPi {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: flex;
}

.eGKSxz {
    box-sizing: border-box;
    padding: 0rem 1.5rem 0rem 0.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
}

.bPMhhj {
    width: 100%;
}

.xAGvZ {
    box-sizing: border-box;
    padding: 0rem 0.5rem 0rem 0rem;
    flex-wrap: nowrap;
}

.cBAvZH {
    box-sizing: border-box;
    margin: 3rem 0rem 0rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex-wrap: nowrap;
}

.hqdihj {
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
    color: rgb(255, 255, 255);
    background: rgb(47, 187, 242);
    border: 2px solid rgb(47, 187, 242);
    box-sizing: border-box;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}
</style>