<script>
export default {
    name: "AppAbout"
}
</script>

<template>
    <div class="container">
        <h1>CHI SONO</h1>
        <div class="row">
            <div class="col-md-6">
                <img src="../../assets/img_fabio/14.jpg" alt="Immagine" class="img-fluid">
            </div>
            <div class="col-md-6">
                <p>
                    SONO FABIO CARANDENTE, EDUCATORE, EBANISTA E MASSAGGIATORE PROFESSIONISTA.
                    FIN DA PICCOLO AMANTE DELLA PACE INTERIORE, DELLA NATURA, DELL 'ARTE. HO VOLUTO QUINDI FARE DI QUESTA
                    MIA PASSIONE UNA PROFESSIONE CAPACE DI TRASMETTERE ALL' ALTRO LE MEDESIME SESAZIONI DI BENESSERE...
                </p>
            </div>
        </div>
    </div>

    <div class="linea"></div>
    <div class="row justify-content-center subtitle">
        <div class="col-12 text-center">
            <img class="logo" src="../../assets/img_fabio/logo.png" alt="Logo">
            <h1 class="title">MAYDAYMASSAGE</h1>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 20px;
}

h1 {
    text-align: center;
    color: #8c5332;
}



p {
    font-size: 40px;
}

.logo {
    width: 70px;
}


.linea {
    background-color: #8c5332;
    width: 90%;
    height: 3px;
    margin: 60px auto;
}

.title {
    color: white;
    font-size: 20px;
}
</style>