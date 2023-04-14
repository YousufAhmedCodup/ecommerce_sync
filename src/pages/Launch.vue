<template>
    <div>
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="items-end justify-between sm:flex">
                    <div class="max-w-xl">
                        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                            Your Flow
                        </h2>

                        <p class="mt-8 max-w-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            praesentium natus sapiente commodi. Aliquid sunt tempore iste
                            repellendus explicabo dignissimos placeat, autem harum dolore
                            reprehenderit quis! Quo totam dignissimos earum.
                        </p>
                    </div>

                    <div class="flex justify-center gap-10 items-center">
                        <button v-on:click="toggleModal()" href="#"
                            class="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-600 px-5 py-3 font-medium text-blue-600 hover:bg-blue-600 hover:text-white sm:mt-0 lg:mt-8">
                            Launch Your Flow

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <span class="mt-8 font-bold text-xl text-blue-600">Or</span>
                        <router-link to="/dashboard/connect-service">
                            <button href="#"
                                class="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-600 px-5 py-3 font-medium text-blue-600 hover:bg-blue-600 hover:text-white sm:mt-0 lg:mt-8">
                                Edit Your Flow

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </router-link>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                        <div>

                            <div class="mt-4">
                                <h3 class="text-xl font-bold text-blue-600 sm:text-2xl">
                                    flow services
                                </h3>

                                <p class="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
                                    ab laudantium vel.
                                </p>
                            </div>
                        </div>

                        <footer class="mt-8 text-gray-500">Eddie Murphy</footer>
                    </blockquote>

                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                        <div>

                            <div class="mt-4">
                                <h3 class="text-xl font-bold text-blue-600 sm:text-2xl">
                                    Your Services
                                </h3>

                                <p class="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
                                    ab laudantium vel.
                                </p>
                            </div>
                        </div>

                        <footer class="mt-8 text-gray-500">Eddie Murphy</footer>
                    </blockquote>

                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                        <div>

                            <div class="mt-4">
                                <h3 class="text-xl font-bold text-blue-600 sm:text-2xl">
                                    flow direction
                                </h3>

                                <p class="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
                                    ab laudantium vel.
                                </p>
                            </div>
                        </div>

                        <footer class="mt-8 text-gray-500">Eddie Murphy</footer>
                    </blockquote>

                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                        <div>

                            <div class="mt-4">
                                <h3 class="text-xl font-bold text-blue-600 sm:text-2xl">
                                    Field mapping
                                </h3>

                                <p class="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
                                    ab laudantium vel.
                                </p>
                            </div>
                        </div>

                        <footer class="mt-8 text-gray-500">Eddie Murphy</footer>
                    </blockquote>
                </div>
            </div>
        </section>
        <!-- modal -->
        <div>
            <div v-if="showModal"
                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                <div class="relative w-auto my-6 mx-auto max-w-4xl">
                    <!--content-->
                    <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <!--header-->
                        <div class="rounded-lg bg-white p-8 shadow-2xl">
                            <h2 class="text-lg font-bold">Are you sure you want to Launch?</h2>

                            <p class="mt-2 text-sm text-gray-500">
                                Doing that could have cause some issues elsewhere, are you 100% sure it's
                                OK?
                            </p>

                            <div class="mt-4 flex gap-2">
                                <router-link to="/dashboard/flow">
                                    <button v-on:click="toggleModal()" type="button"
                                        class="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                                        Launch flow
                                    </button>
                                </router-link>

                                <button v-on:click="toggleModal()" type="button"
                                    class="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                                    No, go back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style lang="scss" scoped></style>