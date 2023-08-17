<template>
  <v-expansion-panel>
    <v-expansion-panel-header> Data Diri </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="my-4 mx-auto">
        <v-img
          class="mx-auto"
          src="/taaruftalk/foto.jpg"
          style="width: 45%; margin: auto; border-radius: 50%"
        ></v-img>

        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="(d, i) in [
                    { title: 'Nama', value: 'Syahril Rachman' },
                    { title: 'TTL', value: 'Bandung, 08 September 1994' },
                    { title: 'Tinggi Badan', value: '165 cm' },
                    { title: 'Berat Badan', value: '85 kg' },
                    {
                      title: 'Pendidikan Terakhir',
                      value: 'D4 Manajemen Informatika (Piksi Ganesha)',
                    },
                    {
                      title: 'Pekerjaan',
                      value: 'Programmer (Frontend Web Developer)',
                    },
                    { title: 'Suku', value: 'Sunda' },
                    {
                      title: 'Status',
                      value: 'Belum Pernah Menikah (Lajang)',
                    },
                    {
                      title: 'Alamat Domisili',
                      value: 'Ciwidey, Kab. Bandung',
                    },
                    {
                      title: 'Alamat Kerja',
                      value: 'Gegerkalong, Kota Bandung',
                    },
                  ]"
                  :key="i"
                >
                  <td width="30%">{{ d.title }}</td>
                  <td width="5%">:</td>
                  <td v-html="d.value"></td>
                </tr>
                <tr>
                  <td width="30%">Email</td>
                  <td width="5%">:</td>
                  <td>
                    <a href="mailto:rachman.syahril@gmail.com">
                      rachman.syahril@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="30%">Instagram</td>
                  <td width="5%">:</td>
                  <td>
                    <a href="https://www.instagram.com/rachman.syahril/">
                      @rachman.syahril
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="30%">LinkedIn</td>
                  <td width="5%">:</td>
                  <td>
                    <a
                      href="https://www.linkedin.com/in/syahril-rachman-9764a9137/"
                    >
                      syahril-rachman
                    </a>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {}
</script>

<style></style>
