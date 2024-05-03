<script>
export default {
    name: "Appfooter",
};
</script>


<template>
    <footer class="text-center p-0">
        <!-- <hr class=""> -->
        <div class="d-flex justify-content-around gap-5 pt-5 pb-5 px-3">


            <div class="d-flex flex-column align-items-start">
                <img src="/src/assets/images/reactor-games.png" alt="">
                <h5 class="pt-2">Reactor games</h5>
                <p class="">We are always happy to develope your ideas.</p>
                <a href="#" class="btn primary-btn ">estimate</a>
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

        <div class="d-flex justify-content-center pb-5 pt-5 pb-5 developers-pills gap-2">
            <div>
                Portfolio created by
            </div>
            <div class="d-flex gap-2">
                <span class="badge rounded-pill">
                    <a href="https://github.com/rpalanga">Roberto</a>
                </span>
                <span class="badge rounded-pill">
                    <a href="https://github.com/GianMarcoPimentel">Gian Marco</a>
                </span>
                <span class="badge rounded-pill">
                    <a href="https://github.com/lucafagiolini">Luca</a>
                </span>
            </div>
        </div>

        <div class="d-flex justify-content-center p-4">
            Boolean class 118
        </div>
    </footer>

</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

footer {


    background-color: $secondary_color;

    img {
        height: 100px;
    }

    .primary-btn {
        @include primary_button_style;
    }


    .developers-pills {
        background-color: $primary_color;
        color: white;
        font-size: 1rem;
        font-weight: 500;

        span {

            width: 150px;

            @include secondary_button_style;

            a {
                text-decoration: none;
                color: $secondary_color;

                &:hover {
                    color: white;
                }

            }
        }
    }
}
</style>