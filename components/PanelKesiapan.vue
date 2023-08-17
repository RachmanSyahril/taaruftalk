<template>
  <v-expansion-panel>
    <v-expansion-panel-header> Kesiapan menikah </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div>
        <v-card-text>
          <div
            style="
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              flex-direction: column;
            "
          >
            <v-card-title>Visi</v-card-title>

            <div
              class="text--primary"
              style="text-align: center; font-style: italic"
            >
              Menikah adalah untuk memperbesar kesempatan masuk Surga Allah ﷻ,
              dan diakui sebagai umat Nabi Muhammad ﷺ
            </div>

            <v-card-title>Misi</v-card-title>

            <div
              class="text--primary"
              style="text-align: center; font-style: italic"
            >
              Saling belajar, Saling mengingatkan, Saling toleran, Saling
              memotivasi untuk Meraih SaMaWa.
            </div>

            <div class="mt-10 mb-4">Beberapa Rencana Tentang</div>

            <ul>
              <li
                class="my-2"
                v-for="(d, i) in [
                  {
                    title: 'Rumah Tangga',
                    value:
                      'Menjadi keluarga kecil yang SaMaWa, Mendidik Anak sesuai dengan Ajaran Islam dan Sunah, Kompak dalam Menjaga Silaturahmi dengan Keluarga.',
                  },
                  {
                    title: 'Keturunan',
                    value:
                      'Allah yang menentukan, namun keinginan pribadi dikaruniani 2 Anak Perempuan dan 1 Laki-Laki',
                  },
                  {
                    title: 'Pekerjaan',
                    value:
                      'Sangat Berminat untuk memiliki Usaha Pribadi sambil tetap Menata ekonomi harian.',
                  },
                  {
                    title: 'Tempat Tinggal',
                    value:
                      'Terdapat Rumah Kecil di Ciwidey yang dapat dipakai, namun diharapkan tidak mengapa jika harus mengontrak dekat dengan lokasi Kerja.',
                  },
                  {
                    title: 'Dakwah Keluarga & Masyarakat',
                    value:
                      'Diharapkan berperan aktif dalam Syiar Islam di Masyarakat, seperti mengikuti Kajian, berkumpul dengan orang-orang soleh, rajin berbagi. Hal itu dapat terwujud bila terlebih dahulu dipupuk pondasi Syiar Islam di level Keluarga. ',
                  },
                ]"
                :key="i"
              >
                {{ d.title }}:
                <p style="margin-top: 4px">
                  {{ d.value }}
                </p>
              </li>
            </ul>
          </div>
        </v-card-text>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {}
</script>

<style></style>
