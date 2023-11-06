<script>
export default {
    name: "AppHome"
}
</script>

<template>
    <div class="container">
        <h1>CIAO SONO FABIO CARANDENTE, L'IDEATORE DEL METODO</h1>
        <div class="img">
            <p class="">MAYDAYmassage</p>
        </div>
    </div>
    <div class="linea"></div>
    <div class="title">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <img src="../../assets/img_fabio/logo.png" alt="Logo" width="100" height="100">
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
        <img class="box" src="../../assets/img_fabio/5.jpg" alt="">
    </div>
</template>

<style scoped>
h1 {
    color: white;
}

.container {
    text-align: center;
    margin-top: 20px;
}

.img {
    background-image: url('../../assets/img_fabio/10.jpg');
    background-size: cover;
    height: 100vh;
}

p {
    color: #8c5332;
    font-size: 700%;
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
    width: 400px;
    border-radius: 20px;
}

.box-img {
    text-align: center;
    margin-bottom: 40px;
}

@media only screen and (max-width: 600px) {
    .descrizione {
        width: 50%;
    }

    p {
        font-size: 400%;
    }
}
</style>

