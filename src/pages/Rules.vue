<template>
    <div>
        <div class="flex gap-10">
            <ul class="flex flex-col gap-5 bg-white p-5 w-3/12 shadow-xl rounded-lg h-40">
                <span class="text-xl font-bold">your's workspace</span>
                <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase"
                        class="svg-inline--fa fa-briefcase fa-fw sc-lgExqj gThRUE" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab1'" :class="{ 'is-active': activeTab === 'tab1' }">Profile</li>
                </div>
                <!-- <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users"
                        class="svg-inline--fa fa-users fa-fw sc-lgExqj gThRUE" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512">
                        <path fill="currentColor"
                            d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab2'" :class="{ 'is-active': activeTab === 'tab2' }">Members & active users
                    </li>
                </div> -->
                <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="far" data-icon="credit-card"
                        class="svg-inline--fa fa-credit-card fa-fw sc-lgExqj gThRUE" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab3'" :class="{ 'is-active': activeTab === 'tab3' }">Pricing & plans</li>
                </div>
                <!-- <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-fw sc-lgExqj gThRUE" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab4'" :class="{ 'is-active': activeTab === 'tab4' }">Usage & billing</li>
                </div> -->
                <!-- <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic"
                        class="svg-inline--fa fa-wand-magic fa-fw sc-lgExqj gThRUE" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab5'" :class="{ 'is-active': activeTab === 'tab5' }">Items in sync</li>
                </div> -->
                <!-- <div class="flex gap-3 cursor-pointer">
                    <svg style="width:1.3rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                        class="svg-inline--fa fa-heart fa-fw sc-lgExqj gThRUE" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z">
                        </path>
                    </svg>
                    <li @click="activeTab = 'tab6'" :class="{ 'is-active': activeTab === 'tab6' }">Earn rewards</li>
                </div> -->
            </ul>
            <component class="bg-white p-5 w-full shadow-xl rounded-lg" :is="activeTab">
                <div v-if="activeTab === 'tab1'">
                    <workSpaceSetting />
                </div>
                <div v-if="activeTab === 'tab2'">
                    <MembersActiveUsers />
                </div>
                <div v-if="activeTab === 'tab3'">
                    <pricingPlan />
                </div>
                <div v-if="activeTab === 'tab4'">
                    <UsageBilling />
                </div>
                <div v-if="activeTab === 'tab5'">
                    <ItemsInSync />
                </div>
                <div v-if="activeTab === 'tab6'">
                    <EarnRewards />
                </div>
            </component>
        </div>
    </div>
</template>
  
<script>
import workSpaceSetting from './workSpaceSetting.vue'
import MembersActiveUsers from './MembersActiveUsers.vue'
import pricingPlan from './pricingPlan.vue'
import UsageBilling from './UsageBilling.vue'
import ItemsInSync from './ItemsInSync.vue'
import EarnRewards from './EarnRewards.vue'
export default {
    components: {
        workSpaceSetting,
        MembersActiveUsers,
        pricingPlan,
        UsageBilling,
        ItemsInSync,
        EarnRewards
    },
    data() {
        return {
            activeTab: 'tab1'
        };
    }
};
</script>
<style>
.is-active {
    color: rgb(31, 33, 160);
    font-weight: bolder;
}
</style>