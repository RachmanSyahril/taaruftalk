<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-expansion-panels v-model="openedPanel" focusable>
        <PanelDataDiri />
        <PanelKesiapan />
        <PanelKelebihkurangan />
        <PanelKriteria />
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    openedPanel: 0,
  }),
}
</script>

<style>
table {
  width: 100%;
  margin: 24px 12px;
  padding: 6px;
  font-size: 15px;
  border-collapse: collapse;
}

.v-expansion-panel-content__wrap {
  padding: 0 0 16px;
}
</style>
