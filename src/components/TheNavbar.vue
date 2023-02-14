<script setup>
import { useDark } from '@vueuse/core';
const isDark = useDark({
  selector: 'body',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
});

const navlinks = [
  {href: 'https://github.com/uchkunrakhimov', name: 'Github', icon: 'pi pi-github'},
  {href: '', name: 'Resume', icon: ''},
]

</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand font-cursive" href="">
        Uchkun Rakhimov
      </a>
      <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="pi pi-align-justify"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav me-auto">
          <a v-for="navlink in navlinks" :href="navlink.href" class="nav-link">
            <i :class="navlink.icon"></i> {{ navlink.name }}</a>
        </div>
        <button class="btn btn-primary rounded-3" @click="isDark = !isDark">
            <i v-if="isDark == true" class="pi pi-sun"></i>
            <i v-if="isDark == false" class="pi pi-moon"></i>
        </button>
        
      </div>

    </div>
  </nav>
</template>