<template>
    <div>
        <div class="tab__header">
            <a href="#" style="background-color:#2fb5ee"
                class="tab__link p-4 hover:bg-blue-darker no-underline text-white border-b-2 border-white flex justify-between"
                @click.prevent="active = !active">
                <strong>{{ title }}</strong>
                <span class="down-Arrow" v-show="!active">&#9660;</span>
                <span class="up-Arrow" v-show="active">&#9650;</span>
            </a>
        </div>
        <div class="tab__content p-2" v-show="active">
            <slot />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Accordion',
    props: {
        title: String,
    },
    data() {
        return {
            active: false,
        };
    },
};
</script>