<script>
export default {
    name: "AppCollaborazioni"
}
</script>

<template>
    <div class="contaner">
        <h1>ARTICOLO & VIP</h1>
        <div class="box">
            <img src="../../assets/img_fabio/1.1.jpg" alt="">
        </div>
        <div class="box">
            <img src="../../assets/img_fabio/1.2.jpg" alt="">
        </div>
        <div class="box">
            <img src="../../assets/img_fabio/1.3.jpg" alt="">
        </div>
        <div class="box">
            <img src="../../assets/img_fabio/1.4.jpg" alt="">
        </div>
        <div class="box">
            <img src="../../assets/img_fabio/1.5.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #8c5332;
    margin-top: 30px;
    text-align: center;
}

.box {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}

img {
    width: 500px;
}

@media only screen and (max-width: 430px) {
    img {
        width: 200px;
    }

    .box {
        text-align: center;
        margin: 0 auto;
    }
}
</style>