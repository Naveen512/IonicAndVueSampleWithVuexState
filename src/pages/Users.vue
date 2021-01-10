<template>
  <master-layout pageTitle="Users">
    <div>
      <ion-button expand="full" @click="showUsers()">Show Users</ion-button>
      <ion-card v-for="user in allUsers" :key="user.id">
        <ion-card-content>
          <ion-card-title>{{ user.name }}</ion-card-title>
        </ion-card-content>
        <ion-item> <ion-label>Email</ion-label>{{ user.email }} </ion-item>
         <ion-item> 
           <ion-buttons>
             <ion-icon @click="edit(user.id)" :icon="create" slot="end"></ion-icon>
             <ion-icon @click="deleteUser(user.id)" :icon="trash" slot="end"></ion-icon>
           </ion-buttons>
        </ion-item>
      </ion-card>
    </div>
    <template v-slot:footerdata>
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button routerLink="/add-or-update/0">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </template>
  </master-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons
} from "@ionic/vue";
import { add, create,trash } from "ionicons/icons";
export default {
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButtons
  },
  computed: {
    ...mapGetters("users", {
      allUsers: "allUsers",
    }),
  },
  methods: {
    ...mapActions("users", {
      fetchUsers: "fetchUsers",
      deletUserAction: "deleteUser"
    }),
    async showUsers() {
      await this.fetchUsers();
    },
    edit(id){
      this.$router.push(`/add-or-update/${id}`);
    },
    deleteUser(id){
      this.deletUserAction(id);
    }
  },
  data() {
    return {
      add,
      create,
      trash
    };
  },
  
};
</script>