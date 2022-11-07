  <template>
    <nav>
      <RouterLink to="/" class="ul1"> Inicio </RouterLink> 
      <RouterLink to="/feed" class="ul1"> Feed </RouterLink> 
      <RouterLink to="/register" class="ul1"> Registrarse </RouterLink> 
      <RouterLink to="/sign-in" class="ul1"> Iogin </RouterLink> 
      <button @click="handleSignOut" v-if="isLoggedIn" >Sign out</button>
    </nav>
    <RouterView />
  </template>

<script setup>
  import { onMounted, ref } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";

  const isLoggedIn = ref(false);
  const router = useRouter();

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else{
        isLoggedIn.value = false;
      }
    });
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };

</script>

<style scoped>

  .ul1{
    font-size: 40px;
    margin-right: 2%;
    margin-left: 2%;

  }

  nav {
    /* background-color: #A0C3D9; */
    margin: auto;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
    /* width: 50%; */
  }

  button{
    height: 50px;
  }

</style>
