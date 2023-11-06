<script>
export default {
    name: "AppContatti"
}
</script>

<template>
    <h1>Contatti</h1>
    <div class="container">
        <p>NAPOLI</p>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, alias.</h5>
        <address>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, voluptatem inventore voluptates debitis
            adipisci omnis possimus. Nostrum magnam reiciendis suscipit.</address>
        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui placeat maiores aliquid voluptate voluptates
            inventore earum vero nesciunt reprehenderit delectus.</h5>
        <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae!</address>
        <address>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</address>
        <p>ROMA:</p>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, officiis.</h5>
    </div>
    <div class="img">
        <img src="../../assets/img_fabio/4.jpg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non ipsa hic harum voluptas libero voluptatem
            obcaecati nemo doloremque sit.</p>
    </div>
</template>

<style scoped>
h1 {
    color: #8c5332;
    text-align: center;
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

p {
    width: 500px;
    margin-top: 20px;
    color: #8c5332;
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
    .img {
        margin: 0 auto;
    }

}
</style>