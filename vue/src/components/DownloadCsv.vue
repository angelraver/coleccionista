<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { ItemController } from '@/controllers/Item'
import { CollectionController } from '@/controllers/Collection'
import Loading from '@/components/Loading.vue'

export enum Bussiness {
    Users = 'Users',
    Collections = 'Collections',
    Items = 'Items'
}

export default {
  components: { Loading },
  props: {
    option: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      idUser: parseInt(loggedUser()?.id + ''),
    }
  },
  methods: {
    getCurrentDateTime(): string {
      const now = new Date();

      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
      const year = now.getFullYear().toString();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      return day + month + year + hours + minutes + seconds;
    },
    async downloadBackup() {
      this.loading = true
      try {
        let jsonData; 
        switch(this.$props.option) {
          case Bussiness.Items:
            jsonData = await ItemController.backup();
          break;
          case Bussiness.Collections:
            jsonData = await CollectionController.backup();
          break;
          default:
            return null;
        }

        const csvData = this.jsonToCSV(jsonData);
        this.downloadCSV(csvData, this.$props.option + this.getCurrentDateTime() + '.csv');
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    jsonToCSV(jsonData: any[], delimiter = ','): string {
      const replacer = (key: string, value: any): any => {
        return value === null ? '' : value; // Modify this as needed for your data
      }     
      const headers = Object.keys(jsonData[0]);
      const csvRows = jsonData.map(row =>
          headers.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(delimiter)
      );

      csvRows.unshift(headers.join(delimiter)); // Add header row
      return csvRows.join('\r\n');
    },
    downloadCSV(csvString: string, filename: string = 'data.csv'): void {
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
}
</script>

<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <v-btn @click="downloadBackup()" >
      <v-icon icon="mdi-file-download" size="large" start />
       {{ option }} backup
    </v-btn>
  </div>
</template>