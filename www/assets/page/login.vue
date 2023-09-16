<template>
<div class="login-box">
          <div class="login-logo">
            <img src="img/logo.jpeg" height="100%" width="50%">
           <p>Admin Reservasi</p>
          </div>
          <!-- /.login-logo -->
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Masuk</p>
        
                <div class="input-group mb-3">
                  <input v-model="username" type="email" class="form-control" placeholder="Email">
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input v-model="password" type="password" class="form-control" placeholder="Password">
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <!-- /.col -->
                  <div class="col-4">
                    <button @click="login()" class="btn btn-primary btn-block">Sign In</button>
                  </div>
                  <!-- /.col -->
                </div>
              
              

            </div>
            <!-- /.login-card-body -->
          </div>
        </div>
        <!-- /.login-box -->

</template>

<script>
module.exports = {
    computed: {
      data_login() {
        return Qs.stringify({username:this.username,password:this.password})
      },
      
    },
    created() {
        
    },
    data: function(){
      return{
  
        title : 'Login',
        gambar : 'img/visimisi.png',
        loading:false,
        username:'',
        password:''
  
      }
    },

  
    methods: {
            goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
        },
        login(){
            this.loading = true
            axios.post(base_url+"/api/auth/login",this.data_login)
            .then(function (response) {
            localStorage.setItem('jwt',response.data.token)
            localStorage.setItem('id_user',response.data.id_user)
            localStorage.setItem('nama_user',response.data.nama_user)
            localStorage.setItem('id_perusahaan',response.data.id_perusahaan)
            v.nama_user=localStorage.getItem('nama_user')
            v.$router.push('/')
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
        }
        
  
      },
  }


</script>