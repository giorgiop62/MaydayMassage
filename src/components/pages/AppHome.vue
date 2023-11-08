<script>
export default {
    name: "AppHome"
}
</script>

<template>
    <div class="container">
        <h2>CIAO SONO FABIO CARANDENTE, L'IDEATORE DEL METODO</h2>
        <div class="img">
            <img src="../../assets/img_fabio/10.jpg" alt="">
            <p class="">MAYDAYmassage</p>
        </div>
    </div>
    <div class="linea"></div>
    <div class="title">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <img class="logo" src="../../assets/img_fabio/logo.png" alt="Logo" width="100" height="100">
                <h1>MAYDAYMASSAGE</h1>
            </div>
        </div>
    </div>
    <div class="descrizione">
        <p class="text">
            Il SEGNALE MAYDAY INDICA UN'
            IMMEDIATA NECESSITA DI AIUTO,
            LA CUI ORIGINE E' DA RISCONTRARSI
            NELL'ESPRESSIONE FRANCESE (VENEZ MAID AIDERI)
            (VENITE AD AIUTARMI)
        </p>
    </div>
    <div class="box-img">
        <img class="box" src="../../assets/img_fabio/13.jpg" alt="">
    </div>
</template>

<style scoped>
.container {
    text-align: center;
}

img {
    width: 400px
}




h2 {
    color: white;
    margin: 30px 0;
}

.may {
    color: white;
}

.logo {
    width: 70px;
    height: 100px;
}

p {
    color: #8c5332;
    font-size: 500%;
}

.linea {
    background-color: #8c5332;
    width: 90%;
    height: 3px;
    margin: 60px auto;
}

.descrizione {
    background-color: #8c5332;
    width: 30%;
    margin: 30px auto;
    padding: 20px;
    border-radius: 20px;
}

.text {
    color: white;
    font-size: 20px;
}

.box {
    width: 500px;
}

.box-img {
    text-align: center;
    margin-bottom: 40px;
}

@media only screen and (max-width: 430px) {
    h2 {
        font-size: 20px;
    }

    p {
        font-size: 40px;
    }


    .container {
        width: 100%;
    }

    .descrizione {
        width: 100%;
    }
}
</style>

