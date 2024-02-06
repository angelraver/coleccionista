<script lang="ts">
import { ItemController } from '@/controllers/Item'
import Camera from "simple-vue-camera";

export default {
  props: {
    idUser: {
      type: Number,
      required: true,
    },
    idItem: {
      type: Number,
      required: true,
    },
  },
  components: {
    'simple-v-camera': Camera,
  },
  methods: {
    async snapshot() {
      const idUser = this.idUser
      const idItem = this.idItem
      const ref = this.$refs;
      if (ref) {
        const camera = ref.camera as typeof Camera
        if (camera) {
          const blob = await camera.snapshot();
          const formData = new FormData();
          formData.append('image', blob, 'snapshot.jpg');
          formData.append('iduser', idUser.toString());
          formData.append('iditem', idItem.toString());
          await ItemController.uploadImage(formData)
          this.$router.push({ name: 'Item', params: { id: idItem } })
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <simple-v-camera
      :resolution="{ width: 400, height: 400 }"
      ref="camera"
      autoplay
    />
    <v-btn
      @click="snapshot()"
      class="bg-amber mt-2"
    >
      <v-icon icon="mdi-camera" size="large" start />
      Tomar Foto
    </v-btn>
  </div>
</template>