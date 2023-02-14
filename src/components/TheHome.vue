<script setup>
  import logo from '../assets/img/logo.png'
  const socials = [
    {name: 'Stackoverflow', url: 'https://stackoverflow.com/users/18720071/uchkunrakhimov', icon: 'pi pi-external-link'},
    {name: 'Linkedin', url: 'https://www.linkedin.com/in/uchkun-rakhimov-667a8a226/', icon: 'pi pi-linkedin'},
    {name: 'Dev.to', url: 'https://stackoverflow.com/users/18720071/uchkunrakhimov', icon: 'pi pi-external-link'},
    {name: 'Codepen', url: 'https://codepen.io/uchkunrakhimov', icon: 'pi pi-external-link'},
  ]
  const experiences = [
    {time: '2021-2022', desc: 'I worked as a frontend developer in the', compainURL: 'https://Light.uz', compainName: 'Light solutions'},
    {time: '2022-to present', desc: 'I am currently working as a developer in', compainURL: 'https://etc.uz', compainName: 'East telecom'},
  ]
</script>
<template>

  <!-- Title -->
  <section class="mt-4">
    <div class="text-center">
      <img :src="logo" alt="" width="100" height="100" class="rounded-pill pointer hover-transform">
    </div>
    <div class="text-center bg-dark rounded-3 p-2 mt-4">
        <VueWriter :array="[`Hi, I'm a Javascript developer`]" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
    </div>
  </section>

   <!-- Skills -->
  <section class="mt-5">
    <div>
      <h5 class="text-decoration-underline font-cursive">Skills</h5>
      <div class="ps-3">
        <code>JavaScript, Vuejs, Nuxtjs, Nodejs, Sass, BootstrapCSS, TailwindCSS, Git, Linux</code>
      </div>
    </div>
  </section>

  <!-- Experiences -->
  <section class="mt-5">
    <div>
      <h5 class="text-decoration-underline font-cursive">Experiences</h5>
      <ul class="mt-3 ps-3">
        <li v-for="experience in experiences" class="mb-2">
          <strong>{{ experience.time }}</strong>
          <div>{{ experience.desc }} <a class="text-secondary" :href="experience.compainURL">{{ experience.compainName }}</a></div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Social Networks -->
  <section class="mt-5">
    <div>
      <h5 class="text-decoration-underline font-cursive">Social networks</h5>
      <ul class="mt-3 list-unstyled">
        <li v-for="social in socials">
          <button class="btn-none">
            <a class="nav-link" :href="social.url">
              <i :class="social.icon"></i>
              {{ social.name }}
            </a>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>