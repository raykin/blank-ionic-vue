<template lang='pug'>
ion-page
  ion-header
    ion-toolbar
      ion-buttons(slot="start")
        ion-back-button
      ion-title CameraTest

  ion-content
    h2.ion-margin Camera Test Page
    div.big-box.ion-margin
      p Indented fill up many spaces
      ion-button(@click="takeMultiImages") Select Multi Images
      br
      ion-button(@click="getPhoto") Take Photo
      br
      ion-button(@click="cropPhoto") Crop Photo
      br
      ion-button(@click="signInApple") Apple SignIn

    ion-input(placeholder="Type something")

</template>

<script>
import { IonPage, IonHeader, IonContent, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Crop } from 'ionic-native';
import { SignInWithApple } from '@capacitor-community/apple-sign-in';

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
			},
			async getPhoto() {
				const img = await Camera.getPhoto({
					quality: 90,
					allowEditing: true,
					resultType: CameraResultType.Uri
				})
				console.warn(img.webPath)
				return img;
			},
			async cropPhoto() {
				const img = await Camera.getPhoto({
					quality: 90,
					allowEditing: true,
					resultType: CameraResultType.Uri
				})
				const opts = { quality: 100, targetWidth: 320, targetHeight: 180 }
				const crop_img = await Crop.crop(img.path, opts)
				console.warn(crop_img)
				return crop_img;
			},
			signInApple() {
				let opts = {
					clientId: "com.goodmoves.pwa.applelogin",
					scope: "name email",
					redirectURI: 'local-testing',
					state: "client:web",
				}
				SignInWithApple.authorize(opts)
					.then(result => {
						console.warn(result)
					})
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
