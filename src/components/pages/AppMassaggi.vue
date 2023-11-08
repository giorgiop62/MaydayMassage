<script>
import info from "../../data/info";
export default {
    name: "AppMassaggi",
    data() {
        return {
            info,
            loveSelected: {}
        }
    },
    methods: {
        showDetail(love) {
            this.loveSelected = love;
        }

    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center p-3">I MIEI MASSAGGI</h1>
        <div class="carousel">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div v-for="(love, index) in info" :key="index" class="carousel-item active" data-bs-interval="10000">
                        <img :src="love.img" class="d-block w-100" alt="maydaymassage">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ love.title }}</h5>
                            <p>{{ love.description }}</p>
                            <button v-on:click="showDetail(love)" class="btn btn-primary">Dettaglio</button>
                        </div>
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content ">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{ loveSelected.title }}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Chiudi"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>{{ loveSelected.dettaglio }}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Chiudi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
}

h1 {
    color: #8c5332;
}

h5,
p {
    font-weight: bold;
    font-size: 20px;
    color: wheat;
}

.carousel {
    width: 700px;
    margin: 0 auto;
    padding: 20px;
}

img {
    width: 900px;
    height: 500px;
}


@media only screen and (max-width: 430px) {
    .carousel {
        width: 100%;
    }

    img {
        width: 100%;
        height: 300px;
    }

}
</style>