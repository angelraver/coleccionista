<script lang="ts">
import { ItemController } from '@/controllers/Item'
import { IgdbController } from '@/controllers/Igdb'
import { type Item } from '@/entities/Item'

export type Game = {
  id: number | null,
  title: string | null
  titleSimple: string | null
  year: number | 0
}

export default {
  props: {
    nameCollection: {
      type: String,
      required: true 
    },
    idCollection: {
      type: Number,
      required: true
    },
    idItemType: {
      type: Number,
      required: true
    },
    idUser: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      item: {} as Item,
      loading: false,
      gameOptionSelected: null,
      gameTypedString: '',
      igdbGameList: [] as Game[],
      igdbGame: {} as Game,
    }
  },
  computed: {
    isValid(): boolean {
      return !!this.igdbGame.title && this.igdbGame.title.length > 0
    }
  },
  methods: {
    async create() {
      this.loading = true
      const item = {
        idcollection: this.idCollection,
        iditemtype: this.idItemType,
        iduser: this.idUser,
        title: this.igdbGame.titleSimple + '',
        idigdb: this.igdbGame.id,
        year: this.igdbGame.year
      }
      try {
        await ItemController.create(item)
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async fetchIgdbGames(title: string) {
      this.loading = true
      try {
        const data = await IgdbController.fetch(title)
        this.igdbGameList = data.map((g) => {
          return {
            id: g.id,
            title: `${g.title} (${g.year})`,
            titleSimple: g.title,
            year: g.year
          }
        })
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async handleGameSelected(value: any) {
      this.gameOptionSelected = value
      const game = this.igdbGameList.find(({ id }) => id === value)
      this.igdbGame = game ? JSON.parse(JSON.stringify(game, null, 2)) : {}
    },
    async handleGameInput(value: any) {
      if (value.data) {
        this.gameTypedString = this.gameTypedString + value.data;
      } else {
        this.gameTypedString = this.gameTypedString.substring(0, this.gameTypedString.length - 1);
      }
      if (this.gameTypedString.length > 3) {
        await this.fetchIgdbGames(this.gameTypedString)
      }
    },
    clearGameInput() {
      this.gameTypedString = ''
    }
  },
}
</script>

<template>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <v-form>
            <h2 class="text-h4 font-weight-bold">Agregar un Videojuego a la colección {{ nameCollection }}</h2>
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-autocomplete
                    label="Buscar un título"
                    v-model="gameOptionSelected"
                    :items="igdbGameList"
                    variant="outlined"
                    item-text="title"
                    item-value="id"
                    @update:model-value="handleGameSelected"
                    @input="handleGameInput"
                    v-on:blur="clearGameInput"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="auto">
                  <v-btn
                    class="ma-4"
                    text="Cancelar"
                    @click="$router.push({ name: 'CollectionDetail', params: { id: idCollection }})"
                  ></v-btn>
                  <v-btn
                      :disabled="!isValid"
                      class="bg-green ma-4"
                      text="Guardar"
                      @click="create()"
                  ></v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
