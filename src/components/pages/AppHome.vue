<script>
export default {
    name: "AppHome"
}
</script>


<template>
    <div>
        <div class="container text-center">
            <h2>CIAO SONO FABIO CARANDENTE, L'IDEATORE DEL METODO</h2>
            <div class="video">
                <video autoplay loop class="w-100" style="max-width: 100%;">
                    <source src="../../assets/img_fabio/video4.mp4" type="video/mp4">
                </video>
                <p class="may">MAYDAYmassage</p>
            </div>
        </div>

        <div class="linea  my-4"></div>

        <div class="title text-center">
            <div class="row justify-content-center">
                <div class="col-12">
                    <img class="logo" src="../../assets/img_fabio/logo.png" alt="Logo" width="100" height="100">
                    <h1>MAYDAYMASSAGE</h1>
                </div>
            </div>
        </div>

        <div class="descrizione text-center  text-white my-4 p-4 rounded">
            <p class="text">
                Il SEGNALE MAYDAY INDICA UN'
                IMMEDIATA NECESSITA DI AIUTO,
                LA CUI ORIGINE E' DA RISCONTRARSI
                NELL'ESPRESSIONE FRANCESE (VENEZ MAID AIDERI)
                (VENITE AD AIUTARMI)
            </p>
        </div>

        <div class="box-img text-center">
            <img class="box img-fluid" src="../../assets/img_fabio/13.jpg" alt="">
        </div>
    </div>
</template>
  
<style scoped>
h2 {
    margin-top: 20px;
    color: #e1b264;
}

.may {
    color: #8c5332;
    font-size: 60px;
}

video {
    width: 100%;
    height: 600px;
}

.linea {
    height: 3px;
    width: 80%;
    margin: 0 auto;
    background-color: #8c5332;
}

.descrizione {
    width: 30%;
    background-color: #8c5332;
    height: 200px;
    margin: 0 auto;

}

.box {
    max-width: 30%;
    margin-bottom: 20px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .descrizione {
        width: 90%;
    }

    .box {
        max-width: 100%;
    }

    .may {
        font-size: 40px;
    }
}
</style>
