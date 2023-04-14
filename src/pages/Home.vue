<template>
  <div id="home">


    <div class="home">
      <!-- tab -->
      <div class="flex justify-center">
        <div id="tabs" class="container">
          <nav class="-mb-px p-2 shadow-lg text-sm font-medium">
            <div class="tabs">
              <div>
                <a class="text-xl cursor-pointer -mb-px  p-4 text-black font-normal" v-on:click="activetab = '1'"
                  :class="[activetab === '1' ? 'active' : '']" @click="scrollToTop()">All</a>
                <a class="text-xl cursor-pointer -mb-px  p-4 text-black font-normal" v-on:click="activetab = '2'"
                  :class="[activetab === '2' ? 'active' : '']" @click="scrollToTop()">From workflows</a>
              </div>
              <div class="flex gap-10">
                <div class="relative text-gray-600 mb-10">
                  <input type="search" name="serch" placeholder="Search products..."
                    class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none">
                  <button type="submit" class="absolute top-0 right-0 mt-3 mr-4">
                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
                <router-link to="/dashboard/wizard">
                  <button class="p-2 w-40 h-12 rounded-md text-center CreateFlow">+ Create flow</button>
                </router-link>
              </div>
            </div>
          </nav>
          <div class="mt-8 ">
            <div v-if="activetab === '1'" class="tabcontent">
              <div class="flex justify-center items-center flex-col">
                <h2 class="text-2xl font-bold mt-3">Create your first workflow!</h2>
                <p class="text-center">
                  Workflows map all the places where work happens, giving you powerful visibility <br> across the tools
                  your
                  team
                  uses — all in just a few clicks.
                </p>
                <div class="mt-10">
                  <router-link to="/dashboard/wizard">
                    <button class="p-2 w-40 h-12 rounded-md text-center CreateFlow">+ Create flow</button>
                  </router-link>
                </div>
              </div>
            </div>
            <div v-if="activetab === '2'" class="tabcontent">
              <div class="flex justify-center items-center flex-col">
                <img src="https://app.unito.io/static/media/emptyState.3bbf37178c6cf2f8df76827a9e07388d.svg" alt="">
                <h2 class="text-2xl font-bold mt-3">Create your first workflow!</h2>
                <p class="text-center">
                  Workflows map all the places where work happens, giving you powerful visibility <br> across the tools
                  your
                  team
                  uses — all in just a few clicks.
                </p>
                <div class="mt-10">
                  <button class="p-2 w-40 h-12 rounded-md text-center CreateFlow">+ Create flow</button>
                </div>
              </div>
              <div class="flex justify-around gap-12 mt-10 mb-10">
                <a class="relative flex items-start justify-between rounded-xl bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                  href="#">
                  <div class="pt-4 text-gray-500">
                    <svg class="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                      </path>
                    </svg>
                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                      Science of Chemistry
                    </h3>
                    <p class="mt-2 hidden text-sm sm:block">
                      You can manage phone, email and chat conversations all from a single
                      mailbox.
                    </p>
                  </div>
                  <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                    4.3
                  </span>
                </a>
                <a class="relative flex items-start justify-between rounded-xl bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                  href="#">
                  <div class="pt-4 text-gray-500">
                    <svg class="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                      </path>
                    </svg>
                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                      Science of Chemistry
                    </h3>
                    <p class="mt-2 hidden text-sm sm:block">
                      You can manage phone, email and chat conversations all from a single
                      mailbox.
                    </p>
                  </div>
                  <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                    4.3
                  </span>
                </a>
                <a class="relative flex items-start justify-between rounded-xl bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                  href="#">
                  <div class="pt-4 text-gray-500">
                    <svg class="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                      </path>
                    </svg>
                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                      Science of Chemistry
                    </h3>
                    <p class="mt-2 hidden text-sm sm:block">
                      You can manage phone, email and chat conversations all from a single
                      mailbox.
                    </p>
                  </div>
                  <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                    4.3
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'DashboardHome',
  data() {
    return {
      activetab: '1',
      buyersData: {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            backgroundColor: "rgba(99,179,237,0.4)",
            strokeColor: "#63b3ed",
            pointColor: "#fff",
            pointStrokeColor: "#63b3ed",
            data: [203, 156, 99, 251, 305, 247, 256]
          },
          {
            backgroundColor: "rgba(198,198,198,0.4)",
            strokeColor: "#f7fafc",
            pointColor: "#fff",
            pointStrokeColor: "#f7fafc",
            data: [86, 97, 144, 114, 94, 108, 156]
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      },
      reviewsData: {
        type: 'bar',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            backgroundColor: "rgba(99,179,237,0.4)",
            strokeColor: "#63b3ed",
            pointColor: "#fff",
            pointStrokeColor: "#63b3ed",
            data: [203, 156, 99, 251, 305, 247, 256]
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }

      }
    }
  },
  mounted() {
    new Chart(document.getElementById('buyers-chart'), this.buyersData)
    new Chart(document.getElementById('reviews-chart'), this.reviewsData)
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>
<style scoped>
.active {
  transition: all .2s;
  box-shadow: 0px 22px 15px -18px #a3a3a3;
}

.tabs {
  display: flex;
  justify-content: space-between;
}

.CreateFlow {
  background-color: #63b3ed;
  color: white;
  font-size: 18px;
}

nav {
  background-color: #bbdae736;
  border-radius: 10px;
}
</style>