<script>
export default {
    name: "AppMassaggi"
}
</script>

<template>
    <h1>I MIEI MASSAGGI</h1>
    <div class="container d-flex ">
        <div class="card">
            <img src="../../assets/img_fabio/2.jpg" class="card-img-top" alt="Immagine">
            <div class="card-body">
                <h5 class="card-title">Maydayrelax</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque nulla sed ab amet distinctio
                    corporis voluptate quaerat excepturi maxime cum tempora assumenda modi magnam iste voluptatum doloribus
                    ducimus similique.</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Dettagli</button>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">MaydayRELAX</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed impedit aperiam sapiente
                            doloribus cupiditate at, consectetur quas laboriosam harum quisquam praesentium quibusdam unde
                            dignissimos atque repudiandae itaque vel quae hic delectus libero? Eos recusandae molestias
                            accusamus adipisci magni omnis rerum necessitatibus dolorem neque dolor praesentium nemo
                            corrupti
                            inventore voluptatem, vel aut est aliquid eaque labore cumque voluptas numquam quis non amet!
                            Molestiae fuga aspernatur sunt dolorem sequi aperiam, modi tenetur repellendus veniam ipsam
                            culpa
                            repellat iste, laudantium architecto quia. Doloribus sint voluptatem saepe, illo accusamus nihil
                            expedita praesentium porro!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/img_fabio/2.jpg" class="card-img-top" alt="Immagine">
            <div class="card-body">
                <h5 class="card-title">Maydayrelax</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque nulla sed ab amet distinctio
                    corporis voluptate quaerat excepturi maxime cum tempora assumenda modi magnam iste voluptatum doloribus
                    ducimus similique.</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Dettagli</button>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">MaydayRELAX</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed impedit aperiam sapiente
                            doloribus cupiditate at, consectetur quas laboriosam harum quisquam praesentium quibusdam unde
                            dignissimos atque repudiandae itaque vel quae hic delectus libero? Eos recusandae molestias
                            accusamus adipisci magni omnis rerum necessitatibus dolorem neque dolor praesentium nemo
                            corrupti
                            inventore voluptatem, vel aut est aliquid eaque labore cumque voluptas numquam quis non amet!
                            Molestiae fuga aspernatur sunt dolorem sequi aperiam, modi tenetur repellendus veniam ipsam
                            culpa
                            repellat iste, laudantium architecto quia. Doloribus sint voluptatem saepe, illo accusamus nihil
                            expedita praesentium porro!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-top: 20px;
    color: #8c5332;
}

.container {}

img {
    width: 250px;

}

.card {
    width: 320px;
    border: 2px solid #e1b264;
    background-color: #e1b264;
    margin: 20px;

}

p {
    color: #8c5332;
}

h5 {
    color: #8c5332;
}

@media only screen and (max-width: 600px) {
    .card {
        margin: 0 auto;
    }
}
</style>