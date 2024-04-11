<template>
    <div class="route-page">
      <NavBar selecteditem="about" />
  
      <div
        class="subsection mob-center scroll-reveal"
        style="background: #f5f5f5"
      >
        <h2>
          <i
            class="fas fa-user-friends text-gradient"
            style="padding-right: 16px"
          ></i
          >Our Team
        </h2>
        <span class="underbar"></span><br />
        <div  v-for="(team,index) in teamList" :key="index">
          <h3>{{team[0].team.name}}</h3>
          <span class="underbar"></span>
          <div class="team-holder">
            
            <TeamItem v-for="item in team" :key="item._id" :item="item" />
            
          </div>
        </div>
      </div>
  
      <!-- <WaveDivider position="top" foreground="#F5F5F5" background="#FFFFFF" /> -->
  
      <!-- <div class="subsection mob-center slide-in-left" style="background: #FFF;">
              <h2><i class="fas fa-landmark text-gradient" style="padding-right: 16px;"></i>Our Vision &amp; Mission</h2>
              <span class="underbar"></span><br>
              <p style="line-height: 28px;">
                  Our mission is to: <b>Educate. Enlighten. Empower.</b> <br><br>
                  A mind that challenges itself, is a mind that shines through tough circumstances.We serve to educate these minds today, so they may be empowered to do the same for the generations to come and enkindle in them a spirit that is just as enlightened as theirs.<br>
                  As we live in an extremely competitive world, the roots of compassion and kindness are losing their strength to hold and ground us. Our mission is to remind everyone of their humanity, to be better and do better every single day.<br>
              </p> -->
      <!-- <iframe style="margin-top: 32px" class="yt-embed" src="https://www.youtube.com/embed/NpEaa2P7qZI"> -->
      <!-- </iframe> -->
      <!-- </div> -->
  
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
 
  import TeamItem from "./TeamItem.vue";
  
  import client from "../../client";
  
  export default {
    components: {
      NavBar,
      Footer,
      
      TeamItem,
    },
    data() {
      return {
        teamList: [],
      };
    },
    mounted: async function () {
      const query = '*[_type == "teamMember"]{..., team->} | order(_createdAt asc)';
      const team = await client.fetch(query);
      // console.log(team);
      this.teamList = Object.values(
        team.reduce((acc, current) => {
          // console.log(acc,current)
          acc[current.team._id] = acc[current.team._id] ?? [];
          acc[current.team._id].push(current);
          return acc;
        }, {})
      );
      console.log(this.teamList)
      // const team = await client.fetch(query);
      // team.sort(function (a, b) {
      //   return a.order - b.order;
      // });
      // this.team = team;
      // console.log(this.team)
    },
  };
  </script>
  
  <style>
  .team-holder {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 32px;
    border-radius: 20%;
    gap: 15px;
  }
  
  h3 {
    text-transform: uppercase;
  }
  </style>