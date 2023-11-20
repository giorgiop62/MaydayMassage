<script>
export default {
    name: "AppContatti"
}
</script>

<template>
    <div class="container">
        <h1 class="text-center">Contatti</h1>
        <div class="row">
            <div class="info col-md-7">
                <p>NAPOLI:</p>
                <h5>CENTRO GYNELIFE FONDATO DAL DOTTOR PASQUALE DE ROSA PRESSO</h5>
                <address>PALAZZO MANNAJUOLO - VIA FILANGIERI - CHIAIA / MARANO DI NAPOLI</address>
                <h5>STELLA GIANNICOLA INSTITUTE - VIALE ANTONIO GRAMSCI - CHIAIA</h5>
                <address>COSMEA HOLISTIC STUDIO - AVERSA</address>
                <p>ROMA:</p>
                <h5>ALESSANDRO STRUMBO HAIR & BEAUTY - VIA VITTORIA 16A - PIAZZA DI SPAGNA</h5>
            </div>
            <div class="col-md-5">
                <video autoplay loop class="w-100" style="max-width: 100%;">
                    <source src="../../assets/img_fabio/video2.mp4" type="video/mp4">
                </video>
            </div>
            <div class="row">
                <div class="col-md-7 box-img">
                    <div class="img">
                        <img src="../../assets/img_fabio/10.jpg" alt="">
                        <p class="search">POTETE TROVARMI SU PRENOTAZIONE CONTATTANDO IN PRIVATO SU INSTAGRAM O MANDANDO UN
                            MESSAGGIO SU
                            WHATSAPP</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
video {
    height: 500px;
}

img {
    height: 400px;
}

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

p {
    width: 500px;
    margin-top: 20px;
    color: #8c5332;
    font-size: 20px;
}

@media (max-width: 768px) {

    .img {
        text-align: center;
        margin-left: 22px;
    }

    video {
        margin: 0 auto;
    }

    .search {
        width: 264px;
        color: #1f483a;
        font-style: oblique;
        font-weight: bold;
        margin-left: 50px;
    }

    p {
        width: 60%;
    }


}
</style>