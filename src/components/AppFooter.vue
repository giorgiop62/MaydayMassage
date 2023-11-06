<script>
export default {
    name: "AppFooter"
}
</script>

<template>
    <footer class="bg-dark text-white d-flex">
        <div class="left">
            <p>Fabio Caradente</p>
        </div>
        <div class="logo">
            <img src="../assets/img_fabio/logo.png" alt="logo">
        </div>
        <div class="social">
            <ul class="d-flex">
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
footer {
    height: 100px;
    align-items: center;
    justify-content: space-between;
}

p {
    color: #e1b264;
}

img {
    width: 30px;
}

ul {
    list-style-type: none;
}

li {
    color: #e1b264;
}
</style>