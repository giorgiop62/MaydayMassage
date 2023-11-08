<script>
export default {
    name: "AppContatti"
}
</script>

<template>
    <h1>CONTATTI</h1>
    <div class="container">
        <p>NAPOLI:</p>
        <h5>CENTRO GYNELIFE FONDATO DAL DOTTOR PASQUALE DE ROSA PRESSO</h5>
        <address>PALAZZO MANNAJUOLO - VIA FILANGIERI - CHIAIA / MARANO DI NAPOLI</address>
        <h5>STELLA GIANNICOLA INSTITUTE - VIALE ANTONIO GRAMSCI - CHIAIA</h5>
        <address>COSMEA HOLISTIC STUDIO - AVERSA</address>
        <p>ROMA:</p>
        <h5>ALESSANDRO STRUMBO HAIR & BEAUTY - VIA VITTORIA 16A - PIAZZA DI SPAGNA</h5>
    </div>
    <div class="img">
        <img src="../../assets/img_fabio/4.jpg" alt="">
        <p>POTETE TROVARMI SU PRENOTAZIONE CONTATTANDO IN PRIVATO SU INSTAGRAM O MANDANDO UN MESSAGGIO SU WHATSAPP</p>
    </div>
    <div class="linea"></div>
    <div class="title">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <img class="logo" src="../../assets/img_fabio/logo.png" alt="Logo" width="100" height="100">
                <h1 class="may">MAYDAYMASSAGE</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #8c5332;
    text-align: center;
    margin-top: 30px;
}

.may {
    color: white;
}

.container {
    margin: 0 auto;
}

address {
    color: #8c5332;
}

.img {
    margin-left: 900px;
    margin-top: 30px;
    margin-bottom: 30px;
}

img {
    width: 500px;
}

.logo {
    width: 70px;
}

p {
    width: 500px;
    margin-top: 20px;
    color: #8c5332;
    font-size: 20px;
}

.linea {
    background-color: #8c5332;
    width: 90%;
    height: 3px;
    margin: 60px auto;
}

@media only screen and (max-width: 600px) {
    .img {
        margin: 0 auto;
    }

}
</style>