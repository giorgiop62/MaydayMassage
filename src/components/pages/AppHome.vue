<script>
export default {
    name: "AppHome",

}
</script>

<template>
    <div>
        <div class="container text-center">
            <h2>CIAO SONO FABIO CARANDENTE, L'IDEATORE DEL METODO</h2>
            <div class="fabio">
                <img class="image" src="../../assets/img_fabio/10.jpg" alt="">
            </div>
            <p class="may">MAYDAYmassage</p>
        </div>
    </div>

    <div class="linea  my-4"></div>

    <div class="title text-center">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="img">
                    <img class="logo" src="../../assets/img_fabio/logo.png" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="descrizione text-center  text-white  ">
        <p class="text">
            Il SEGNALE MAYDAY INDICA UN'
            IMMEDIATA NECESSITÀ DI AIUTO,
            LA CUI ORIGINE È DA RISCONTRARSI
            NELL'ESPRESSIONE FRANCESE &quot; VENEZ M'AIDER!&quot;<br>
            (&quot; VENITE AD AIUTARMI &quot;)
        </p>
    </div>

    <div class="box-img text-center">
        <img class="box img-fluid" src="../../assets/img_fabio/13.jpg" alt="">
    </div>
</template>
  
<style scoped>
h2 {
    margin-top: 20px;
    color: #e1b264;
}

.image {
    height: 500px;
}

.may {
    color: #8c5332;
    font-size: 60px;
}

.logo {
    height: 200px;
}

.linea {
    height: 3px;
    width: 80%;
    margin: 0 auto;
    background-color: #8c5332;
}

.descrizione {
    width: 30%;
    height: 200px;
    margin: 0 auto;
    font-size: large;

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
