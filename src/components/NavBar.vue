<template>
  <div id="navholder" mnav-active="false">
    <div id="navbar">
      <router-link to="/"
        ><img class="navlogo" src="../assets/images/logo_icon.png"
      /></router-link>
      <router-link
        to="/contact"
        v-bind:selected="selecteditem == 'contact'"
        class="navbtn"
        >Contact</router-link
      >
      <router-link
        to="/support-us"
        v-bind:selected="selecteditem == 'support'"
        class="navbtn"
        >Support Us</router-link
      >
      <router-link
        to="/our-impact"
        v-bind:selected="selecteditem == 'impact'"
        class="navbtn"
        >Our Impact</router-link
      >
      <router-link
        to="/what-we-do"
        v-bind:selected="selecteditem == 'work'"
        class="navbtn"
        >What We Do</router-link
      >
      <router-link
        to="/about"
        v-bind:selected="selecteditem == 'about'"
        class="navbtn"
        >About Us</router-link
      >
      <router-link
        to="/"
        v-bind:selected="selecteditem == 'home'"
        class="navbtn"
        >Home</router-link
      >
      <a class="mnavbtn" v-on:click="toggleNav">
        <img inactive width="48" src="../assets/images/ic_mnav.png" />
        <img active width="48" src="../assets/images/ic_mnav_close.png" />
      </a>
    </div>
    <div id="mnav">
      <router-link to="/" class="mnav-item">Home</router-link>
      <router-link to="/about" class="mnav-item">About Us</router-link>
      <router-link to="/what-we-do" class="mnav-item">What We Do</router-link>
      <router-link to="/our-impact" class="mnav-item">Our Impact</router-link>
      <router-link to="/support-us" class="mnav-item">Support Us</router-link>
      <router-link to="/contact" class="mnav-item">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    selecteditem: String,
  },
  methods: {
    toggleNav() {
      var navholder = document.getElementById("navholder");
      navholder.setAttribute(
        "mnav-active",
        navholder.getAttribute("mnav-active") == "true" ? "false" : "true"
      );
    },
  },
};
</script>

<style scoped>
#navholder {
  z-index: 999;
}

#navbar {
  width: 100%;
  height: 84px;
  background: #fff;
  padding: 0px 96px;
  transition: all 0.25s;
  z-index: 999;
}

.navlogo {
  height: 84px;
  padding: 16px;
  float: left;
}

.mnavbtn {
  height: 84px;
  line-height: 84px;
  float: right;
  padding: 18px;
  cursor: pointer;
  display: none;
}

#mnav {
  position: absolute;
  top: 84px;
  width: 100%;
  background: #fff;
  transform: scaleY(0);
  transition: all 0.25s;
  transform-origin: 0px 0px;
  display: none;
  z-index: 999;
}

.mnav-item {
  width: 100%;
  padding: 24px 32px;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  border-top: solid #00000010 1px;
  cursor: pointer;
  transition: all 0.25s;
}

.mnav-item:hover {
  color: var(--color-primary);
  background: #f76f020b;
}

.mnav-item:active {
  color: var(--color-primary);
  background: #f76f0220;
}

.navbtn {
  height: 84px;
  line-height: 84px;
  padding: 0px 16px;
  float: right;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
  text-align: center;
  user-select: none;
}

.navbtn::after {
  background: var(--color-primary);
  content: " ";
  display: block;
  width: 100%;
  height: 4px;
  margin-top: -2px;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.25s;
}
.navbtn:hover::after {
  transform: scaleX(0.95);
}

.navbtn:active::after {
  transform: scaleX(0.6);
}

.navbtn[selected] {
  color: var(--color-primary);
}
.navbtn[selected]::after {
  transform: scaleX(1);
}

.navbtn[selected]:active::after {
  transform: scaleX(0.8);
}

.navbtn:hover {
  color: var(--color-primary);
  background: #f76f020b;
}

.navbtn:active {
  background: #f76f0220;
}

@media screen and (max-width: 960px) {
  #navbar {
    padding: 0px 32px;
  }
}

@media screen and (max-width: 840px) {
  #navbar {
    padding: 0px 0px;
  }
  .navbtn {
    display: none;
  }
  .mnavbtn {
    display: block;
  }
  #navholder[mnav-active="false"] .mnavbtn img[inactive] {
    display: block;
  }

  #navholder[mnav-active="false"] .mnavbtn img[active] {
    display: none;
  }

  #navholder[mnav-active="true"] .mnavbtn img[inactive] {
    display: none;
  }

  #navholder[mnav-active="true"] .mnavbtn img[active] {
    display: block;
  }

  #mnav {
    display: block;
  }

  #navholder[mnav-active="true"] #mnav {
    transform: scaleY(1);
  }

  #navholder[mnav-active="false"] #mnav {
    transform: scaleY(0);
  }
}
</style>