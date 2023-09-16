const logomuseum = {
  template:'#logomuseum',
  data: function(){
    return{

      judul : 'Arti & makna logo Deli Serdang',
      gambar: 'img/logo-min.png',
      point :[
        {no:1, deskripsi:'Bintang bersudut lima melambangkan Ketuhanan Yang Maha Esa dan berfalsafat Pancasila'},
        {no:2, deskripsi:'17 kuntum bunga kapas, 5 daun sirih, 3 buah pinang, 45 butir padi melambangkan catatan sejarah, tanggal, bulan dan tahun kemerdekaan RI, dimana rakyat Deli Serdang turut memberi dharma bhaktinya dalam kemerdekaan Republik Indonesia.'},
        {no:3, deskripsi:'Sedangkan padi berbuah 11, seekor ikan melambangkan penduduk Kabupaten Deli Serdang sebagian besar terdiri dari petani dan nelayan.'},
        {no:4, deskripsi:'Gunung menunjukkan geografi Deli Serdang yang terdiri dari pegunungan, daratan rendah dan pantai.'},
        {no:5, deskripsi:'Lima gelombang ombak melambangkan bahwa Deli Serdang di airi oleh sungai besar dan kecil yang membawa kemakmuran rakyat.'},
        {no:6, deskripsi:'Matahari terbit yang sedang naik melambangkan masa depan yang gemilang azcita-cita yang tinggi serta kegairahan bekerja yang penuh semangat dan keyakinan.'},
        {no:7, deskripsi:'Pohon kelapa sawit, karet, tembakau melambangkan daerah Deli Serdang adalah daerah perkebunan yang menghasilkan devisa.'},
        {no:8, deskripsi:'Roda mesin bergigi melambangkan cita-cita modernisasi dari mekanisme kehidupan rakyat serta lambang kerajinan tangan.'},
        {no:9, deskripsi:'Sirih, pinang dan puan melambangkan kebudayaan asli, dimana sirih dan pinang merupakan alat pembuka kata dalam segala upacara serta lambang persaudaraan dan toleransi.'},
        {no:10, deskripsi:'lima helai daun sirih melambangkan tiga hukum yang dijunjung tinggi, yaitu hukum politik, hukum adat dan hukum negara'},
      ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const visimisi = {
  template:'#visimisi',
  data: function(){
    return{

      judul : 'Visi & Misi Museum Daerah Deli Serdang',
      gambar : 'img/visimisi.png'

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const gambarmuseum = {
  template:'#gambarmuseum',
  data: function(){
    return{

      judul : 'Gambar Museum Daerah Deli Serdang',
      gambar : [
        {link:'img/museum/museum.jpg'},
        {link:'img/museum/2.jpg'},
        {link:'img/museum/3.jpg'},
        ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const strukturorganisasi = {
  template:'#strukturorganisasi',
  data: function(){
    return{

      judul : 'Struktur Organisasi Museum Daerah Deli Serdang',
      isi : 'Museum Daerah Deli Serdang diresmikan oleh Menteri Pendidikan dan Kebudayaan (Mendikbud) Prof. Dr. Muhadjir Effendy, M.A.P. bersama Gubernur Sumatra Utara (Sumut) Edy Rahmayadi dan Bupati Deli Serdang, H. Ashari Tambunan di Lubuk Pakam pada hari Sabtu, tanggal 8 September 2018. Peresmian museum yang letaknya persis di depan kantor Bupati Deli Serdang itu ditandai dengan pemotongan pita oleh Ketua PKK Sumatera Utara Nawal Lubis Edy Rahmayadi, dan penandatanganan prasasti oleh Mendikbud, Gubernur Sumut dan Bupati Deli Serdang.',
      gambar : 'img/struktur.png',

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const peresmian = {
  template:'#peresmian',
  data: function(){
    return{

      judul : 'Peresmian Museum Daerah Deli Serdang',
      isi : 'Museum Daerah Deli Serdang diresmikan oleh Menteri Pendidikan dan Kebudayaan (Mendikbud) Prof. Dr. Muhadjir Effendy, M.A.P. bersama Gubernur Sumatra Utara (Sumut) Edy Rahmayadi dan Bupati Deli Serdang, H. Ashari Tambunan di Lubuk Pakam pada hari Sabtu, tanggal 8 September 2018. Peresmian museum yang letaknya persis di depan kantor Bupati Deli Serdang itu ditandai dengan pemotongan pita oleh Ketua PKK Sumatera Utara Nawal Lubis Edy Rahmayadi, dan penandatanganan prasasti oleh Mendikbud, Gubernur Sumut dan Bupati Deli Serdang.',
      gambar : [
        {link:'img/Peresmian/peresmian.png'},
        {link:'img/Peresmian/peresmian2.png'},
        {link:'img/Peresmian/peresmian3.png'},
        {link:'img/Peresmian/peresmian4.png'},
        ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const kunjungan = {
  template:'#kunjungan',
  data: function(){
    return{

      isi :'Banyak sekolah mulai dari tingkat SD-SLTA, Mahasiswa Perguruan Tinggi Negeri/Swasta, Instansi Pemerintahan, Tokoh-tokoh penting dan juga masyarakat umum  sudah mengunjungi museum yang menyimpan benda koleksi dan literatur sejarah ini. Jika dihitung jumlahnya sudah mencapai puluhan ribu pengunjung sejak diresmikan.',
      judul : 'Kunjungan Instansi & Masyarakat ke Museum Daerah Deli Serdang',
      gambar : [
        {link:'img/kunjungan/1.jpg', small:'img/kunjungan/small/1.jpg', deskripsi : 'Kunjungan Yayasan Swadaya Dian Khatulistiwa, Pontianak, Kalimantan Barat ke Museum Daerah Deli Serdang. Jum’at, 13 Sept 2019'},
        {link:'img/kunjungan/2.jpg', small:'img/kunjungan/small/2.jpg', deskripsi : 'Kunjungan Team Jelajah Nusantara ke Museum Daerah Deli Serdang'},
        {link:'img/kunjungan/3.jpg', small:'img/kunjungan/small/3.jpg', deskripsi : 'Kunjungan Adik-adik SMA di Museum Daerah Deli Serdang'},
        {link:'img/kunjungan/bek1.jpeg', small:'img/kunjungan/small/bek1.jpeg', deskripsi : 'Kunjungan Badan Ekonomi Kreatif Republik Indonesia'},
        {link:'img/kunjungan/bij.jpeg', small:'img/kunjungan/small/bij.jpeg', deskripsi : 'Kunjungan Bank Indonesia Jakarta'},
        {link:'img/kunjungan/dl1.jpg', small:'img/kunjungan/small/dl1.jpg', deskripsi : 'Kunjungan Dinas Pariwisata dan Budaya Kab. Langkat'},
        {link:'img/kunjungan/dpps.jpeg', small:'img/kunjungan/small/dpps.jpeg', deskripsi : 'Kunjungan Dinas Pariwisata Padang Sidempuan'},
        {link:'img/kunjungan/dprdl.jpeg', small:'img/kunjungan/small/dprdl.jpeg', deskripsi : 'Kunjungan DPRD Kab. Langkat dan Dinas Parbud Kab. Langkat'},
        {link:'img/kunjungan/kij.jpeg', small:'img/kunjungan/small/kij.jpeg', deskripsi : 'kunjungan Inspektorat Jendral KemdikbudDisdik Prov. SUMUT'},
        {link:'img/kunjungan/kms.jpg', small:'img/kunjungan/small/kms.jpg', deskripsi : 'Kunjungan Kepala Museum Negeri Sumut'},
        {link:'img/kunjungan/kcr.jpg', small:'img/kunjungan/small/kcr.jpg', deskripsi : 'kunjungan KESULTANAN KESEPUHAN CIREBON, SULTAN SEPUH XIV PRA Arief Natadiningrat'},
        {link:'img/kunjungan/mtb.jpeg', small:'img/kunjungan/small/mtb.jpeg', deskripsi : 'Kunjungan Museum Tebing Tinggi'},
        {link:'img/kunjungan/pasis.jpeg', small:'img/kunjungan/small/pasis.jpeg', deskripsi : 'kunjungan Pasis Dikreg LVII Seskoad'},
        {link:'img/kunjungan/paskibra.jpeg', small:'img/kunjungan/small/paskibra.jpeg', deskripsi : 'Kunjungan Adik-adik Paskibra Deli Serdang'},
        {link:'img/kunjungan/u1.jpg', small:'img/kunjungan/small/u1.jpg', deskripsi : 'Kunjungan Masyarakat Umum di Museum Daerah Deli Serdang'},

        //SD
        {link:'img/kunjungan/sd/1.jpg', small : 'img/kunjungan/small/sd/1.jpg', deskripsi : 'Kunjungan SDN 101807 Sibiru-Biru'},
        {link:'img/kunjungan/sd/2.jpg', small : 'img/kunjungan/small/sd/2.jpg', deskripsi : 'Kunjungan SD IT DOD Medan'},
        {link:'img/kunjungan/sd/3.jpg', small : 'img/kunjungan/small/sd/3.jpg', deskripsi : 'Kunjungan SD AL-ITTIHADIYAH LAUT DENDANG'},
        {link:'img/kunjungan/sd/4.jpg', small : 'img/kunjungan/small/sd/4.jpg', deskripsi : 'Kunjungan SDN 101779 PERCUT SEI TUAN'},
        {link:'img/kunjungan/sd/5.jpg', small : 'img/kunjungan/small/sd/5.jpg', deskripsi : 'Kunjungan SDN 105295 PERCUT SEI TUAN'},
        {link:'img/kunjungan/sd/6.jpg', small : 'img/kunjungan/small/sd/6.jpg', deskripsi : 'Kunjungan SDN 060814 MEDAN'},
        {link:'img/kunjungan/sd/7.jpg', small : 'img/kunjungan/small/sd/7.jpg', deskripsi : 'Kunjungan SDN 064021 MEDAN HELVETIA'},
        {link:'img/kunjungan/sd/8.jpg', small : 'img/kunjungan/small/sd/8.jpg', deskripsi : 'Kunjungan SD N 104277 TANAH MERAH, GALANG'},
        {link:'img/kunjungan/sd/9.jpg', small : 'img/kunjungan/small/sd/9.jpg', deskripsi : 'Kunjungan SDN 101966 PETANGGUHAN, GALANG'},
        {link:'img/kunjungan/sd/10.jpg', small : 'img/kunjungan/small/sd/10.jpg', deskripsi : 'Kunjungan SDN 101900 l.pakam'},
        {link:'img/kunjungan/sd/11.jpg', small : 'img/kunjungan/small/sd/11.jpg', deskripsi : 'Kunjungan SDN 060821 MEDAN AREA'},
        {link:'img/kunjungan/sd/12.jpg', small : 'img/kunjungan/small/sd/12.jpg', deskripsi : 'Kunjungan SDN 106820 PANCUR BATU'},
        {link:'img/kunjungan/sd/13.jpg', small : 'img/kunjungan/small/sd/13.jpg', deskripsi : 'Kunjungan SDN 106443 HAMPARAN PERAK'},
        {link:'img/kunjungan/sd/14.jpg', small : 'img/kunjungan/small/sd/14.jpg', deskripsi : 'Kunjungan SD RK NAMO PULI, STM HILIR'},
        {link:'img/kunjungan/sd/15.jpeg', small : 'img/kunjungan/small/sd/15.jpeg', deskripsi : 'Kunjungan SD RK SERDANG MURNI LUBUK PAKAM'},
        {link:'img/kunjungan/sd/16.jpg', small : 'img/kunjungan/small/sd/16.jpg', deskripsi : 'Kunjungan SDN 106804 PERCUT SEI TUAN'},
        
        //SMP
        {link:'img/kunjungan/smp/1.jpg', small : 'img/kunjungan/small/smp/1.jpg', deskripsi : 'Kunjungan SMPN 1 BIRU BIRU'},
        {link:'img/kunjungan/smp/2.jpg', small : 'img/kunjungan/small/smp/2.jpg', deskripsi : 'Kunjungan SMPN 3 LUBUK PAKAM'},
        {link:'img/kunjungan/smp/3.jpg', small : 'img/kunjungan/small/smp/3.jpg', deskripsi : 'Kunjungan SMPN 4 PERCUT SEI TUAN'},
        
        //SMA
        {link:'img/kunjungan/sma/1.jpg', small : 'img/kunjungan/small/sma/1.jpg', deskripsi : 'Kunjungan SMAN 1 Lubuk Pakam'},
      ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const kegiatan = {
  template:'#kegiatan',
  data: function(){
    return{

      judul : 'Kegiatan',
      gambar : [
        {link:'img/kegiatan/1.jpg', small :'img/kegiatan/small/1.jpg', deskripsi : 'Kunjungan Pemkab Kepahyang, Bengkulu dalam rangka Study Tiru ke Museum Daerah Deli Serdang. Selasa, 17 Des 2019'},
        {link:'img/kegiatan/2.jpg', small : 'img/kegiatan/small/2.jpg', deskripsi : 'Kasi Museum Daerah Deli Serdang menerima Kunjungan Sekolah Ar-Rahman Fullday School Medan di Museum Daerah Del Serdang. Selasa, 17 Des 2019'},
        {link:'img/kegiatan/l1.jpg', small : 'img/kegiatan/small/l1.jpg', deskripsi : 'Peserta Lomba Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/l2.jpg', small : 'img/kegiatan/small/l2.jpg', deskripsi : 'Peserta Lomba Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/l3.jpg', small : 'img/kegiatan/small/l3.jpg', deskripsi : 'Peserta Lomba Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/m1.jpg', small : 'img/kegiatan/small/m1.jpg', deskripsi : 'Peserta Lomba Melukis se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/m2.jpg', small : 'img/kegiatan/small/m2.jpg', deskripsi : 'Peserta Lomba Mewarnai se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/m3.jpg', small : 'img/kegiatan/small/m3.jpg', deskripsi : 'Peserta Lomba Melukis se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/w1.jpg', small : 'img/kegiatan/small/w1.jpg', deskripsi : 'Peserta Lomba Mewarnai se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/w2.jpg', small : 'img/kegiatan/small/w2.jpg', deskripsi : 'Peserta Lomba Mewarnai se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p1.jpg', small : 'img/kegiatan/small/p1.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p2.jpg', small : 'img/kegiatan/small/p2.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p3.jpg', small : 'img/kegiatan/small/p3.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p4.jpg', small : 'img/kegiatan/small/p4.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p5.jpg', small : 'img/kegiatan/small/p5.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/p6.jpg', small : 'img/kegiatan/small/p6.jpg', deskripsi : 'Penyerahan Hadiah Lomba Mewarnai, Melukis, dan Literasi se Kabupaten Deli Serdang Tingkat PAUD/TK - SD Sederajat'},
        {link:'img/kegiatan/f1.jpg', small : 'img/kegiatan/small/f1.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f2.jpg', small : 'img/kegiatan/small/f2.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f3.jpg', small : 'img/kegiatan/small/f3.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f4.jpg', small : 'img/kegiatan/small/f4.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f5.jpg', small : 'img/kegiatan/small/f5.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f6.jpg', small : 'img/kegiatan/small/f6.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f7.jpg', small : 'img/kegiatan/small/f7.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f8.jpg', small : 'img/kegiatan/small/f8.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f9.jpg', small : 'img/kegiatan/small/f9.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f10.jpg', small : 'img/kegiatan/small/f10.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f11.jpg', small : 'img/kegiatan/small/f11.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f12.jpg', small : 'img/kegiatan/small/f12.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        {link:'img/kegiatan/f13.jpg', small : 'img/kegiatan/small/f13.jpg', deskripsi : 'Kegiatan Lomba Potography'},
        
        
        
        
      ]

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const program = {
  template:'#program',
  data: function(){
    return{

      judul : 'Program Museum Daerah Deli Serdang',
      subjudul : 'Kenang Lemu',
      isi : 'Kenang Lemu (Kenali Deli Serdang Lewat Museum) adalah program kerja untuk mengenali Kabupaten Deli Serdang melalui museum. Pada Museum Daerah Deli Serdang yang telah diresmikan pada tanggal 8 September 2018 oleh Menteri Pendidikan dan Kebudayaan, pengunjung bisa mendapatkan informasi seputar sejarah Kabupaten Deli Serdang termasuk budayanya. Sejarah Kabupaten Deli Serdang yang ditampilkan mulai dari zaman prasejarah sampai zaman setelah kemerdekaan Indonesia. Tak hanya itu, pada Museum Daerah Deli Serdang, pengunjung antara lain bisa belajar tarian daerah yakni Simalungun, Melayu, dan Karo, belajar bahasa asing, musik melayu, belajar sejarah, serta mengikuti kegiatan lainnya.',
      gambar : [
        {link:'img/program/k1.jpg', small:'img/program/small/k1.jpg', deskripsi : 'Perpisahan Kenang Lemu'},
        {link:'img/program/k2.jpg', small:'img/program/small/k2.jpg', deskripsi : 'Perpisahan Kenang Lemu'},
        {link:'img/program/k3.jpg', small:'img/program/small/k3.jpg', deskripsi : 'Adik-adik yang sedang belajar di program Kenang Lemu'},
        {link:'img/program/k4.jpg', small:'img/program/small/k4.jpg', deskripsi : 'Pengenalan koleksi yang ada di Museum'},
        {link:'img/program/k5.jpg', small:'img/program/small/k5.jpg', deskripsi : 'Adik-adik yang sedang belajar di program Kenang Lemu'},
        {link:'img/program/k6.jpg', small:'img/program/small/k6.jpg', deskripsi : 'Adik-adik yang sedang belajar di program Kenang Lemu'},
       
      ],
    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const peraturan = {
  template:'#peraturan',
  data: function(){
    return{

      judul : 'Peraturan & Tata Tertib Museum Daerah Deli Serdang',
      point :[
        {no:1, deskripsi:'Pengunjung wajib mengisi buku tamu'},
        {no:2, deskripsi:'Mohon berbicara dengan lembut dan berjalan dengan tenang'},
        {no:3, deskripsi:'Dilarang menyentuh benda koleksi/karya Museum'},
        {no:4, deskripsi:'Atur ponsel ke mode senyap dan hindari menelpon di area ruang pameran'},
        {no:5, deskripsi:'Dilarang memotret menggunakan kilat'},
        {no:6, deskripsi:'Barang berukuran besar/tas, topi, jaket harap dititipkan'},
        {no:7, deskripsi:'Dilarang membawa, mengkonsumsi makanan dan minuman di area ruang pameran'},
        {no:8, deskripsi:'Dilarang berlari dan menggunakan sepatu roda'},
        {no:9, deskripsi:'Mengikuti petunjuk arah sesuai dengan panduan atau navigasi'},
      ],
      perhatian: 'Staf dan pengunjung museum berhak atas lingkungan yang aman dan bebas dari kekerasan, penganiayaan dan perilaku mengancam. Pengunjung yang tidak mentaati peraturan dapat dikeluarkan oleh Staf Museum.',

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}



const utama = {
  template:'#utama',
  data: function(){
    return{

    }
  }
}




// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: utama },
  { path: '/logomuseum', component: logomuseum },
  { path: '/visimisi', component: visimisi },
  { path: '/gambarmuseum', component: gambarmuseum },
  { path: '/strukturorganisasi', component: strukturorganisasi },
  { path: '/peresmian', component: peresmian },
  { path: '/kunjungan', component: kunjungan },
  { path: '/kegiatan', component: kegiatan },
  { path: '/program', component: program },
  { path: '/peraturan', component: peraturan },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: function () {
  return {

    }
  },

  mounted() {

  }
})

.$mount('#app')

// Now the app has started!