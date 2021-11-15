<template lang='pug'>
ion-page
  ion-header

  ion-content
    h2 Camera Test Page
    p.big-box.ion-margin Indented fill up many spaces
    ion-input(placeholder="Type something")

</template>

<script>
import { IonPage, IonHeader, IonContent, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Camera',
  components: {
		IonPage,
		IonHeader,
		IonContent,
		IonInput
  }
});
</script>

<style scoped>
	.big-box {
		height: 60vh;
	}
	ion-input {
		background-color: grey;
	}
</style>
