<template>
  <master-layout :pageTitle="pageTitle">
    <ion-card>
      <ion-card-header>
        <ion-card-title></ion-card-title>
      </ion-card-header>
      <ion-card-content v-if="userInfo">
        <ion-item>
          <ion-label position="floating">User Name</ion-label>
          <ion-input v-model="userInfo.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="userInfo.email"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="saveorupdate()">{{
          btnText
        }}</ion-button>
      </ion-card-content>
    </ion-card>
  </master-layout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      userInfo: null,
      routeId: this.$route.params.id,
      btnText: "",
      pageTitle: ""
    };
  },
  computed: {
    ...mapGetters("users", {
      userById: "userById",
    }),
  },
  mounted() {
    if (this.routeId == 0) {
      this.userInfo = {
        id: 0,
        name: "",
        emai: "",
      };
      this.btnText = "Add User";
      this.pageTitle = "Create A User";
    } else {
      this.userInfo = this.userById(this.routeId);
      this.btnText = "Update User";
      this.pageTitle = "Update A User";
    }
  },
  methods: {
    ...mapActions("users", {
      addUser: "addUser",
      updateUser: "updateUser",
    }),
    saveorupdate() {
      if (this.userInfo.id == 0) {
        this.addUser(this.userInfo);
        this.$router.push("/users");
      } else {
        this.updateUser(this.userInfo);
        this.$router.push("/users");
      }
    },
  },
};
</script>