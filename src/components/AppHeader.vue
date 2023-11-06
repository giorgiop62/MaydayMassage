<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <img src="../assets/img_fabio/logo.png" alt="logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <li><router-link class="nav-link" to="/home" tag="button">Home</router-link></li>
                        <li><router-link class="nav-link" to="/about" tag="button">Chi Sono</router-link></li>
                        <li><router-link class="nav-link" to="/massaggi" tag="button">Massaggi</router-link></li>
                        <li><router-link class="nav-link" to="/collaborazioni" tag="button">Collaborazioni</router-link>
                        </li>
                        <li><router-link class="nav-link" to="/contatti" tag="button">Contatti</router-link></li>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scss="lang" scoped>
img {
    width: 60px
}

.nav-link {
    margin-left: 50px;
    color: #e1b264;
    font-size: 20px
}

button {
    border: 3px solid #e1b264;
}

.nav-link {
    transition: transform 0.3s;
}

@media (min-width: 1200px) {
    .nav-link:hover {
        transform: scale(1.2);
    }
}
</style>





