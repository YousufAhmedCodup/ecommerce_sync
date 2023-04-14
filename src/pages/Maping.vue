<template>
    <div class="container mx-auto">
        <h2 class="text-3xl mb-5">Field mapping: Specify what information flows between issues and messages</h2>
        <p class="text-gray-600 max-w-6xl text-xl mt-4">
            Get even more specific by only mapping the fields that matter to your work or decide to sync all the information
            within your issues and messages. Here, you can choose the direction of certain fields so that information goes
            one or two-way, regardless of the flow’s direction you set earlier.
        </p>

        <div class="mt-3 relative rounded-xl items-center justify-start">
            <div class="mt-3 p-4 flex gap-12 items-center justify-start">
                <div class="sc-bcXHqe bHfzPm">
                    <div class="sc-bcXHqe gEywWc">
                        <!-- <img alt="Choose auto mapping"
                            src="https://app.unito.io/static/media/ChooseAutoMapping.701630aec6a9dea5be239f66e106324f.svg"> -->
                        <div class="sc-bcXHqe dHXpRH">
                            <p font-style="normal" class="text-white sc-gKPRtg cmKEbv">Auto-map (recommended)</p>
                        </div>
                        <div class="sc-bcXHqe dHXpRH">
                            <p font-style="normal" class="text-white sc-gKPRtg ikwLQc">Matching fields on both sides will be
                                <b>automatically mapped based on their name and type</b>. The next step is for you to
                                review, validate and adjust those mappings to make sure they make sense for this flow.
                            </p>
                        </div>
                        <div class="sc-bcXHqe iOFbrj">
                            <router-link to="/dashboard/manual-maping">
                                <button type="button" class="sc-iBYQkv gXvHNz">
                                    <div class="sc-bcXHqe eixDla">Auto map my fields</div>
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="sc-bcXHqe kdyCXc sc-bqwSkn hdbA-DO"><b>OR</b></div>
                    <div class="sc-bcXHqe dPwDEe">
                        <!-- <img alt="Choose manual mapping"
                            src="https://app.unito.io/static/media/ChooseManualMapping.7b844d2fabce7c688c69626b5c996359.svg"> -->
                        <div class="sc-bcXHqe dHXpRH">
                            <p font-style="normal" class="sc-gKPRtg cmKEbv" style="color:black !important">Start from
                                scratch</p>
                        </div>
                        <div class="sc-bcXHqe dHXpRH">
                            <p font-style="normal" class="sc-gKPRtg ikwLQc text-black" style="color:black !important">We
                                will not map any fields
                                automatically.
                                Instead, you’ll need to <b>individually map fields together</b> in a way that works for this
                                flow. This may take a bit more time, but is recommended if you only want to sync a few
                                specific fields.</p>
                        </div>
                        <div class="sc-bcXHqe iOFbrj">
                            <router-link to="/dashboard/manual-maping">
                                <button type="button" class="sc-iBYQkv jvHKlp">
                                    <div class="sc-bcXHqe eixDla">Start mapping manually</div>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkedNames: []
        }
    }

}
</script>

<style scoped>
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
    background-color: rgb(24, 125, 157);
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
    height: 32px;
    color: rgb(255, 255, 255);
    background: rgb(24, 125, 157);
    border: 2px solid rgb(24, 125, 157);
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



#radios {
    text-align: center;
    margin: 0 auto;
    border: 1px solid gray;
    width: 12rem;
    padding: 10px;
    border-radius: 5px;
}



.bHfzPm {
    box-sizing: border-box;
    margin: 2rem 0rem 0rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row nowrap;
    flex-direction: column;
    gap: 20px;
}

.gEywWc {
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: column nowrap;
    border-radius: 0.5rem;
    width: 100%;
    background: #63b3ed;
    color: white
}

img {
    vertical-align: middle;
}

.dHXpRH {
    box-sizing: border-box;
    margin: 1rem 0rem;
    flex-wrap: nowrap;
}

.cmKEbv {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(255, 255, 255);
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

p {
    margin: 0 0 13.5px;
}

.dHXpRH {
    box-sizing: border-box;
    margin: 1rem 0rem;
    flex-wrap: nowrap;
}

.ikwLQc {
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.iOFbrj {
    box-sizing: border-box;
    margin: 1rem 0rem 0rem;
    flex-wrap: nowrap;
}

.gXvHNz {
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
    background: #63b3ed;
    border: 2px solid #63b3ed;
    box-sizing: border-box;
}

.eixDla {
    box-sizing: border-box;
    padding: 0rem;
    flex-wrap: nowrap;
}

.gXvHNz {
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
    color: #63b3ed;
    background: white;
    border: 2px solid #63b3ed;
    box-sizing: border-box;
}

.kdyCXc {
    box-sizing: border-box;
    margin: 0rem 1.5rem;
    flex-wrap: nowrap;
}

.hdbA-DO {
    align-self: center;
}

.dPwDEe {
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: column nowrap;
    border: 2px dashed rgb(156, 171, 185);
    border-radius: 0.5rem;
    width: 100%;
}

.dHXpRH {
    box-sizing: border-box;
    margin: 1rem 0rem;
    flex-wrap: nowrap;
}

.cmKEbv {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    color: rgb(255, 255, 255);
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: visible;
    text-overflow: clip;
}

.dHXpRH {
    box-sizing: border-box;
    margin: 1rem 0rem;
    flex-wrap: nowrap;
}

.iOFbrj {
    box-sizing: border-box;
    margin: 1rem 0rem 0rem;
    flex-wrap: nowrap;
}

.jvHKlp {
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
    color: #63b3ed;
    background: transparent;
    border: 2px solid #63b3ed;
    box-sizing: border-box;
}
</style>