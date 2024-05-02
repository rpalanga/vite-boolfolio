<script>
export default {
    name: "Appfooter",
};
</script>


<template>
    <div class="text-center bg-body-tertiary p-0">
        <hr class="">
        <div class="d-flex justify-content-around gap-5 bg-body-tertiary p-3">


            <div class="">
                <h5 class="">Special title treatment</h5>
                <p class="">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            <div class="d-flex flex-column">
                <h5>Download</h5>
                <div class="d-flex flex-column align-items-start">
                    <span>windows app</span>
                    <span>mac app</span>
                    <span>linux app</span>
                    <span>desktop app</span>
                </div>
            </div>

            <div class="d-flex flex-column">
                <h5>Products</h5>
                <div class="d-flex flex-column align-items-start">
                    <span>web</span>
                    <span>app</span>
                    <span>software</span>
                    <span>ecommerce</span>
                </div>
            </div>

            <div>
                <h5>Get in touch</h5>
                <div class="d-flex gap-3">
                    <span>
                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </span>
                    <span>
                        <a href="">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </span>
                    <span>
                        <a href="">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </span>
                </div>
            </div>

            <div class="d-flex flex-column align-items-lg-start">
                <div>
                    <h5>Subscribe</h5>
                </div>
                <form>
                    <div class="d-flex flex-column align-items-lg-start b-3">
                        <label for="exampleInputEmail1" class="form-label"></label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            placeholder="enter email adress" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </form>

            </div>

            <div>

            </div>

        </div>
        <hr>
        <div class="">
            Portfolio created by
            <span class="badge rounded-pill text-bg-success">
                <a href="">Roberto</a>
            </span>
            <span class="badge rounded-pill text-bg-danger">
                <a href="">Gian Marco</a>
            </span>
            <span class="badge rounded-pill text-bg-warning">
                <a href="">Luca</a>
            </span>
        </div>
        <hr>
        <div class="card-footer text-body-secondary">
            Boolean class 118
        </div>
        <hr>
    </div>

</template>


<style scoped lang="scss"></style>