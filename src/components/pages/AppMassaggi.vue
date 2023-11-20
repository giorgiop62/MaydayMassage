<script>
import info from "../../data/info";
export default {
    name: "AppMassaggi",
    data() {
        return {
            info,
            loveSelected: {},
            isModalOpen: false
        }
    },
    methods: {
        showDetail(love) {
            console.log(love)
            this.isModalOpen = true;
            this.loveSelected = love;
        },
        closeModal() {
            this.isModalOpen = false;
            this.loveSelected = {};
        }

    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center p-3">I MIEI MASSAGGI</h1>
        <div id="id_carousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active" v-for="(love, index) in info" :key="index">
                    <img :src="love.img" class="d-block w-100" alt="maydaymassage">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ love.title }}</h5>
                        <p>{{ love.description }}</p>
                        <button :data-bs-target="'#myModal' + love.title" v-on:click="showDetail(love)"
                            class="btn btn-primary">Dettaglio</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#id_carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#id_carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!--Modal-->
        <div v-if="isModalOpen" class="modal fade" :id="'myModal' + loveSelected.title" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ loveSelected.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="loveSelected.img" class="d-block w-100" alt="maydaymassage">
                        <p>{{ loveSelected.Dettaglio }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="closeModal">Close</button>
                    </div>
                </div>
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
    width: 700px;
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