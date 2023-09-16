<template>
<div>
<!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Daftar Reservasi Kamar</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <div class="content">
          <b-container class="bv-example-row">
              <b-row>
                <b-col>
                    <b-table striped hover
                           :items="reservasi_items"
                           :fields="fields"
                  >
                    <template #cell(status)="row">
                      <b-badge v-if="row.item.status==0" pill variant="warning">Menunggu Verifikasi</b-badge>
                      <b-badge v-if="row.item.status==1" pill variant="secondary">Terverifikasi</b-badge>
                      <b-badge v-if="row.item.status==2" pill variant="primary">Lunas</b-badge>
                      <b-badge v-if="row.item.status==3" pill variant="primary">Checkout</b-badge>
                    </template>
                    <template #cell(actions)="row">
                      <b-button size="sm" :to="'detail_reservasi/'+row.item.uniqid">Details</b-button>
                    </template>
                  </b-table>
                </b-col>
              </b-row>                  
          </b-container>
      </div>
      <!-- /.content -->    
</div>    
</template>


<script>
    const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

    module.exports = {

      data() {
        return {
          fields: [{
              key: 'no_reservasi',
              label: 'No Reservasi'
            },
            {
              key: 'waktu_reservasi',
              label: 'Waktu Reservasi'
            },
            {
              key: 'status',
              label: 'Status'
            },
            {
              key: 'actions',
              label: 'Actions'
            }
          ],
          reservasi_items: []

        }
      },

      methods: {
      
        showAll() {
          var start_index = this.indexAwal

          this.loading = true
          var _this = this

          axios.get(base_url + "Reservasi").then(function (response) {

              // _this.rows = response.data.recordsTotal
              _this.reservasi_items = response.data.data

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
      mounted() {
        this.showAll()
      }

    }
</script>

<style>
  .invisible {
    visibility: hidden;
  }
</style>