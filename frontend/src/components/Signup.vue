<template>
  <div class="min-h-screen flex flex-col items-center mt-24 bg-gray-900">
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="background-image: url('https://images.unsplash.com/photo-1604882355165-4450cb6155b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"
          ></div>
          <div
            class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <div
              class="font-medium text-center text-xl sm:text-2xl uppercase text-gray-800 mt-3"
            >
              Inscrivez-vous
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  for="pseudo"
                  >Pseudo :</label
                >
                <input
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
                  id="text"
                  type="text"
                  placeholder="Mon pseudo"
                  v-model="pseudo"
                />
              </div>
              <div class="mb-4">
                <label
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  for="email"
                  >Adresse email :</label
                >
                <input
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
                  id="email"
                  type="email"
                  placeholder="xxx@yyy.zzz"
                  v-model="email"
                />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    for="password"
                    >Mot de passe :</label
                  >
                  <input
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
                    id="password"
                    type="password"
                    placeholder="******************"
                    v-model="password"
                  />
                  <p class="text-xs italic text-green-400">
                    Merci de choisir un mot de passe
                  </p>
                </div>
                <div class="md:ml-2">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    for="c_password"
                    >Confirmez votre mot de passe</label
                  >
                  <input
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    v-model="confirm_password"
                  />
                  <p class="text-xs italic text-green-400">
                    Le mot de passe doit être identique
                  </p>
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  :disabled="!isValid"
                  @click.prevent="signUp"
                  type="button"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-green-500 hover:bg-green-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">S'inscrire</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <router-link to="/">
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-green-500 align-baseline hover:text-green-700"
                    href="./index.html"
                  >
                    Vous êtes déjà inscrit ? Connectez-vous
                  </a>
                </div>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../http'

export default {
  name: 'signup',
  data() {
    return {
      pseudo: '',
      email: '',
      password: '',
      confirm_password: '',
      errors: []
    }
  },
  computed: {
    isValid() {
      if (this.pseudo.length < 3) {
        return false
      }
      if (this.password != this.confirm_password) {
        return false
      }
      return true
    }
  },
  methods: {
    signUp() {
      const payload = {
        pseudo: this.pseudo,
        email: this.email,
        password: this.password
      }
      http
        .post('/auth/signup', payload)
        .then(res => {
          console.log(res)
          alert('Inscription réussie !')
          window.location.href='/'
        })
        .catch(() => {
          console.log("Échec de l'inscription")
        })
    }
  }
}
</script>

<style scoped></style>
