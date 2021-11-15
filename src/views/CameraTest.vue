<template lang='pug'>
ion-page
  ion-header
    ion-toolbar
      ion-buttons(slot="start")
        ion-back-button
      ion-title CameraTest

  ion-content
    h2 Camera Test Page
    div.big-box.ion-margin
      p Indented fill up many spaces
      ion-button(@click="takeMultiImages") Select Multi Images

    ion-input(placeholder="Type something")

</template>

<script>
import { IonPage, IonHeader, IonContent, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera } from '@capacitor/camera';

export default defineComponent({
  name: 'Camera',
  components: {
		IonPage,
		IonHeader,
		IonContent,
		IonInput
  },
	setup() {
		return {
			async takeMultiImages() {
				const { photos }  = await Camera.pickImages({
					quality: 100, // 0 - 100
					limit: 4
				})
				console.warn(photos)
				return photos
			}
		}
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
