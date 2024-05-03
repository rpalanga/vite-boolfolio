<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <img src="/src/assets/images/reactor-games-2.png" alt="Immagine di un progett" width="200" height="100">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Progetti</a>
                            <a class="nav-link" href="#">Collaboratori</a>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </header>

</template>
<style lang="scss" scoped>
img {
    object-fit: cover;
}
</style>
