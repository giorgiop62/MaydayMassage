<script>
export default {
    name: "AppFooter"
}
</script>

<template>
    <footer class="bg-dark text-white d-flex ">
        <div class="left">
            <h6>Fabio Caradente</h6>
        </div>
        <div class="creator">
            <p>created by: Giorgio Perez</p>
        </div>
        <div class="social">
            <ul class="d-flex">
                <li><a href="https://www.facebook.com/fabio.carandente1?locale=it_IT%2F"><i
                            class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/maydaymassage/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="tel:+3505255178"><i class="fa-brands fa-whatsapp" title="cliccla per chattare"></i></a></li>
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
    font-size: 8px;
}

h6 {
    color: #e1b264;
    margin-left: 20px;
}

ul {
    list-style-type: none;
}

li {
    margin-right: 20px;
    cursor: pointer;
}

a {
    color: #e1b264;
}
</style>