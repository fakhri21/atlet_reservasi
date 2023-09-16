<template>
<div>
<!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Detail Rervasi</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <div class="content">
        <b-container ref="data_reservasi" id="data_reservasi" class="bv-example-row">
            <b-row>
              <b-col>
                <h3>Wisma Atlet By Disporasu</h3>
                <hr>
              </b-col>
            </b-row>  
            <b-row>
              <b-col>
                <center><h4>Guest Folio</h4></center>
                <hr>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">Atas Nama : {{data_reservasi.first_name}} {{data_reservasi.last_name}}</b-col>
              <b-col cols="12">Tgl Masuk : {{data_reservasi.waktu_masuk}}</b-col>
              <b-col cols="12">Tgl Keluar : {{data_reservasi.waktu_keluar}}</b-col>
              <b-col cols="12">No. Hp : {{data_reservasi.no_hp}}</b-col>
              <b-col cols="12"><p>Email : {{data_reservasi.email}} </p></b-col>
              <b-col cols="12">No Reservasi : {{data_reservasi.no_reservasi}}</b-col>
              <hr>
            </b-row>
            <b-row>
              <b-col>
                <b>{{data_reservasi.jenis}}</b>
                <p> <b>Kamar : {{data_reservasi.no_kamar}}</b>  </p>
                <hr>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h3><b>Total :Rp. {{data_reservasi.harga|currency}}</b></h3>
              </b-col>
            </b-row>
          </b-container>

            <b-row>
              <b-col>
                <b-button @click="setujui_reservasi()" v-if="data_reservasi.status==0"  variant="success" href="">
                    Setujui Reservasi
                </b-button>
                <b-button @click="bayar_reservasi() ;print()" v-if="data_reservasi.status==1"  variant="success" href="">
                    Terima Pembayaran
                </b-button>
                <b-button @click="print()" v-if="data_reservasi.status>=2 "  variant="danger" href="">
                    Print
                </b-button>
                <b-button @click="chekout()" v-if="data_reservasi.status==2"  variant="danger" href="">
                    Checkout
                </b-button>
                
              </b-col>
            </b-row>                    

      </div>
      <!-- /.content -->    
</div>    
</template>


<script>
    const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

    module.exports =  {
        
        data () {
            return {
                kamar_items:[],
                data_reservasi:[]
            }
        },

        methods: {
           

          print(){
            var elem = this.$refs.data_reservasi.innerHTML;
            console.log(elem)
            print_pdf(elem)
          },

            setujui_reservasi(){
                this.loading = true
            axios.post(base_url+"/Reservasi/setujui_reservasi/",Qs.stringify({id:this.data_reservasi.uniqid}))
            .then(function (response) {
            Swal.fire('Verifikasi Berhasil', '', 'success')
               v.$router.push('/daftar_reservasi')
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Maaf Terjadi Kesalahan',
              html: err.response.data.status
            })
          })
          .finally(() => {
            this.loading = false
          });
            },
            
            chekout(){
                this.loading = true
            axios.post(base_url+"/Reservasi/checkout/",Qs.stringify({id:this.data_reservasi.uniqid,no_kamar:this.data_reservasi.no_kamar}))
            .then(function (response) {
            Swal.fire('Checkout Berhasil', '', 'success')
               v.$router.push('/daftar_reservasi')
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Maaf Terjadi Kesalahan',
              html: err.response.data.status
            })
          })
          .finally(() => {
            this.loading = false
          });
            },
            
            bayar_reservasi(){
                this.loading = true
            axios.post(base_url+"/Reservasi/bayar_reservasi/",Qs.stringify({id:this.data_reservasi.uniqid}))
            .then(function (response) {
            Swal.fire('Terima Pembayaran Berhasil', '', 'success')
               v.$router.push('/daftar_reservasi')
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Maaf Terjadi Kesalahan',
              html: err.response.data.status
            })
          })
          .finally(() => {
            this.loading = false
          });
            },
                         showAll() {
              var start_index = this.indexAwal

              this.loading = true
              var _this = this

              axios.get(base_url + "Reservasi/detail/", {
                  params: {
                    id: this.$route.params.id
                  }
                }).then(function (response) {

                  // _this.rows = response.data.recordsTotal
                  _this.data_reservasi = response.data.data

                  console.log(response.data.data)
                })
                .catch((error) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Maaf Terjadi Kesalahan',
                    text: 'Silahkan coba kembali'
                  })
                })
                .finally(() => {
                  this.loading = false
                });
            },

        
        },
        mounted () {
        this.showAll()
        }

    }
</script>

<style>
  .invisible {
    visibility: hidden;
  }
</style>