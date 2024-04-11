<template>
    <div class="route-page">
      <NavBar selecteditem="about" />
  
      <div class="subsection subsection-head mob-center">
        <h2><i class="fas fa-landmark text-gradient" style="padding-right: 16px;"></i>Our Vision &amp; Mission</h2>
              <span class="underbar"></span><br>
              <p style="line-height: 28px;">
                  Our mission is to: <b>Educate. Enlighten. Empower.</b> <br><br>
                  A mind that challenges itself, is a mind that shines through tough circumstances.We serve to educate these minds today, so they may be empowered to do the same for the generations to come and enkindle in them a spirit that is just as enlightened as theirs.<br>
                  As we live in an extremely competitive world, the roots of compassion and kindness are losing their strength to hold and ground us. Our mission is to remind everyone of their humanity, to be better and do better every single day.<br>
              </p> 
     
      </div>
   
      <WaveDivider position="top" foreground="gradient" background="#FFF" />\

       <div style="display: flex; align-content: center; justify-content: center; padding-bottom: 35px;">
        <iframe style="margin-top: 32px; align-self: center;" class="yt-embed" src="https://www.youtube.com/embed/NpEaa2P7qZI"> 
       </iframe> 
       </div>
     
  
     
  
       
  
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import WaveDivider from "@/components/WaveDivider.vue";

  
  export default {
    components: {
      NavBar,
      Footer,
      WaveDivider,
      
    },
   
  };
  </script>
  
  <style>
  .team-holder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 32px;
  }
  
  h3 {
    text-transform: uppercase;
  }
  </style>