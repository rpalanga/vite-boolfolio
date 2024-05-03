<script>
export default {
    name: 'AppJumbotron',
}
</script>
<template>
    <div class="bg-color-jumbotron pt-5 pb-5">
        <div class="container">

            <div class="jumbo-top p-5 mb-4 rounded-3">
                <div class="container-fluid">
                    <h1 class="display-5 fw-bold">Reactor Games</h1>
                    <p class="col-md-8 fs-4 ">We are always happy to develope your ideas.</p>
                    <button class="btn btn-primary btn-lg" type="button">contact us</button>



                </div>

            </div>
            <div class="row align-items-md-stretch jumbo-left-content">
                <div class="col-md-6 p-5">
                    <div class="h-100">
                        <h2>Our mission</h2>
                        <p>Our mission is to provide the best service to our customers. We are always happy to
                            develope your ideas.</p>

                    </div>
                </div>
                <div class="col-md-6 p-5">
                    <div class="h-100">
                        <h2>Our vision</h2>
                        <p>Our vision is to be the best company in the world. We are always happy to develope
                            your
                            ideas.</p>
                    </div>

                </div>

            </div>
        </div>
    </div>


</template>
<style lang="scss" scoped>
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

.bg-color-jumbotron {
    background-color: $primary_color;
}

.jumbo-top {
    background-color: $tertiary_color;


}
</style>
