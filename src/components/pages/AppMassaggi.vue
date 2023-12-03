<script>
import info from "../../data/info";
export default {
    name: "AppMassaggi",
    data() {
        return {
            info,
            loveSelected: {},
            isModalOpen: false,
        }
    },
    methods: {
        showDetail(love) {
            this.isModalOpen = true;
            this.loveSelected = love;
        },
        closeModal() {
            this.isModalOpen = false;
            this.loveSelected = {};
        },


    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="(love, index) in info" :key="index">
                <div class="card">
                    <img :src="love.img" class="card-img-top" alt="Immagine">
                    <div class="card-body">
                        <h5 class="card-title">{{ love.title }}</h5>
                        <p class="card-text">{{ love.description }}</p>
                        <button class="btn btn-primary detail" data-bs-toggle="modal" :data-bs-target="'#myModal' + index"
                            v-on:click="showDetail(love)">Dettagli</button>
                    </div>
                </div>

                <!-- Modal -->
                <div :id="'myModal' + index" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{ love.title }}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Chiudi"></button>
                            </div>
                            <div class="modal-body">
                                <p>{{ love.dettaglio }}</p>
                                <h6 class="text-center">{{ love.durata }}</h6>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.container {
    min-height: 100vh;
}

.card {
    margin: 20px;
    height: 600px;
    background-color: black;
    border: 2px solid #8c5332;
}

p {
    color: #8c5332;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    height: 157px;
}

h5 {
    font-weight: bold;
    font-size: 19px;
    color: #e1b264;
}

h6 {
    text-align: center;
    color: #8c5332;
}
</style>
  