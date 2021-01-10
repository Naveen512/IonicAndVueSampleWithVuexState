<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot> </slot>
    </ion-content>
    <ion-footer>
        <slot name="footerdata"></slot>
    </ion-footer>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonFooter
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonFooter
  },
  props: ["pageTitle"],
  
};
</script>
<style scoped>
ion-toolbar{
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast)
}
</style>