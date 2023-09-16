<template>
<div>
    <img src="../../img/background.jpeg" alt="" style="
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 81%;
    opacity: 0.4;
    ">
<!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">SELAMAT DATANG DI APLIKASI WISMA ATLET SUMATERA UTARA</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
         
          <!-- /.row -->
             <!-- Modal Component -->
       
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->    
</div>    
</template>


<script>
    const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

    module.exports =  {
        name: 'vuetify-audio',
        computed: {
            duration: function () {
                return this.audio ? formatTime(this.totalDuration) : ''
            },
        },
        data () {
            return {
                data_reservasi:"",
                
            }
        },

        methods: {

              bayar_kamar() {
              this.loading = true
              axios.post(base_url + "Reservasi/bayar_reservasi/", {
                  
                    id: this.data_reservasi.uniqid
                  
                })
                .then(function (response) {
                  Swal.fire('Pembayaran Berhasil', '', 'success')
                  window.location.reload()
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

                
                axios.get(base_url + "Reservasi/user_reservasi",{params: {id_user: localStorage.id_user}})
                .then(function (response) {

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
            
            rubahRepetisi(rep){
                switch (rep) {
                    case 1:
                        this.repetisi=2
                        break;
                    case 2:
                        this.repetisi=3
                        break;
                    case 3:
                        this.repetisi=4
                        break;
                    case 4:
                        this.repetisi=5
                        break;
                    case 5:
                        this.repetisi=Infinity
                        break;
                    case Infinity:
                        this.repetisi=1
                        break;
                
                    
                }

            },

            pilihRange(x){
                this.rangeAyat = this.selectedMp3.filter(function (el) {
                    return (parseInt(el.nomor) >= parseInt(x)) 
                });
            },
            
            pilihSurah(x){
                this.currentIndex=0
                
                this.selectedMp3 = mp3.filter(function (el) {
                    return (el.surah==x) 
                });

                this.dariAyat=1
                this.sampaiAyat=this.selectedMp3.length

                this.setfile()
                console.log(this.currentIndex)
            },
            setfile(){
                this.file="assets/mp3/"+this.selectedMp3[this.currentIndex].surah+"/"+this.selectedMp3[this.currentIndex].file
                this.Arab=this.selectedMp3[this.currentIndex].ar            
                this.Surah=this.selectedMp3[this.currentIndex].surah
                this.ayat=this.selectedMp3[this.currentIndex].nomor
                console.log("set")
            },
            setPlayspeed() {
                this.audio.playbackRate=this.playerSpeed;
            },
            setDuration() {
                this.duration_ = this.audio.duration;
            },
            setloop () {
                this.statusLoop=!this.statusLoop
            },
            setPositionloop () {
                this.audio.currentTime = this.range[1];
            },
            setPosition (x) {
                this.audio.currentTime = this.audio.duration * (x / 1000000.0);
            },
            playSelect (index) {
                this.currentIndex=index;
                this.setfile()
                this.audio.src=this.file
                this.playing = true
                
            },
            nextLoop (dariAyat,sampaiAyat) {
                var indexawal=dariAyat-1
                var indexakhir=sampaiAyat-1

                        
                        if (this.currentIndex>=indexawal && this.currentIndex<indexakhir) {  
                            this.currentIndex++;
                            this.setfile()
                            this.audio.src=this.file
                            this.reload()
                            this.playing = true
                        }
                        else if (this.current_repetisi<this.repetisi){
                            console.log(this.current_repetisi)
                            this.current_repetisi++
                            this.playSelect(indexawal)
                        
                        }
                        else{
                            console.log("selesai")
                        }        
                
            },
            next () {
                this.currentIndex++;
                this.setfile()
                this.audio.src=this.file
                this.reload()
                this.playing = true
                
            },
            previous () {
                if (this.currentIndex > 0) {
                this.currentIndex--;
                }
                this.setfile()
                this.audio.src=this.file
                this.reload()
                this.playing = true
                
            },
            stop () {
                this.audio.pause()
                this.paused = true
                this.playing = false
                this.audio.currentTime = 0
            },
            play () {
                if (this.playing) return
                this.audio.src=this.file
                this.audio.play().then(_ => this.playing = true)
                console.log(this.playerSpeed)
                this.audio.playbackRate=this.playerSpeed
                this.paused = false

                console.log("status playing "+this.playing)
                console.log("status paused "+this.paused)
            },
            pause () {
                this.paused = !this.paused;
                (this.paused) ? this.audio.pause() : this.audio.play()

                console.log(this.playing)
                console.log(this.paused)
            },
            download () {
                this.audio.pause()
                window.open(this.file, 'download')
            },
            mute () {
                this.isMuted = !this.isMuted
                this.audio.muted = this.isMuted
            },
            reload () {
                this.audio.load();
            },
            _handleLoaded: function () {
                if (this.audio.readyState >= 2) {
                    if (this.audio.duration === Infinity) {
                        // Fix duration for streamed audio source or blob based
                        // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
                        this.audio.currentTime = 1e101;
                        this.audio.ontimeupdate = () => {
                            this.audio.ontimeupdate = () => {}
                            this.audio.currentTime = 0
                            this.totalDuration = parseInt(this.audio.duration)
                            this.loaded = true;
                            
                        }
                    } else {
                        this.totalDuration = parseInt(this.audio.duration)
                        this.loaded = true
                    }
                console.log(this.playerSpeed)
                this.audio.playbackRate=this.playerSpeed
                
                    if (this.autoPlay){

                        this.audio.play() 
                        this.playing=true
                    } 

                } else {
                    throw new Error('Failed to load sound file')
                }
            },
            _handlePlayingUI: function (e) {
                this.audio.volume = this.playerVolume
                //this.percentage = this.audio.currentTime
                //this.percentage = this.audio.currentTime / this.audio.duration * 100
                this.currentTimeslider = this.audio.currentTime
                this.currentTime = formatTime(this.audio.currentTime)
                if (this.statusLoop) {
                    if (this.audio.currentTime>=this.range[1]) {
                        this.audio.currentTime=this.range[0]
                    }
                }
                //this.playing = true
            },
            _handlePlayPause: function (e) {
                if (e.type === 'play' && this.firstPlay) {
                    // in some situations, audio.currentTime is the end one on chrome
                    this.audio.currentTime = 0;
                    if (this.firstPlay) {
                        this.firstPlay = false;
                    }
                }
                if (e.type === 'pause' && this.paused === false && this.playing === false) {
                    this.currentTime = '00:00:00'
                }
                
            },
            _handleEnded () {
                
                if (this.ulang_range) {
                    this.nextLoop(this.dariAyat,this.sampaiAyat)                                        
                }
                 else {
                    this.next()
                }


                
                
            },
        
        },
        mounted () {
            this.showAll()
        },
        beforeDestroy () {
            this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
            this.audio.removeEventListener('loadeddata', this._handleLoaded)
            this.audio.removeEventListener('pause', this._handlePlayPause)
            this.audio.removeEventListener('play', this._handlePlayPause)
            this.audio.removeEventListener('ended', this._handleEnded);
        }

    }
</script>

<style>
  .invisible {
    visibility: hidden;
  }
</style>