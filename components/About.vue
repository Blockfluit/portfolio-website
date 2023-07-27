<script setup>
const dob = new Date(2001, 10, 20)
const diff = Date.now() - dob.getTime()
const age = ref(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)))
</script>

<template>
    <div class="about center">
        <div id="about-content" class="fade-in scale-in">
            <section>
                <h1>Wie ben ik?</h1>
                <p class="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis nisi in augue molestie,
                    nec varius lectus fermentum. Etiam id ante non ex viverra scelerisque. Morbi vitae neque et neque mollis
                    aliquam. In tortor est, varius id augue in, mollis cursus sem. Quisque quis sagittis libero, eget
                    rhoncus augue. Proin vel nibh ante. In pulvinar massa sit amet congue dictum. Curabitur hendrerit, elit
                    pulvinar elementum dapibus, turpis dolor eleifend quam, ac lobortis arcu tortor quis enim. Aenean
                    tristique suscipit hendrerit. Sed sit amet faucibus ex. Suspendisse tristique libero eget velit euismod,
                    et iaculis dui dignissim. Praesent pulvinar lacus quam, sed aliquet ipsum lobortis eget.
                    <br /><br />
                    Aliquam finibus tellus ac risus tristique interdum. Proin libero tellus, consequat id interdum vitae,
                    varius eget elit. Mauris sed rhoncus nulla. Ut id rhoncus enim. Nunc lacinia tempor neque fringilla
                    eleifend. Sed ac tempus turpis. Pellentesque diam elit, finibus eget eros eget, aliquet ultricies ex.
                    Nunc varius a metus eu varius. Praesent ultricies, eros id scelerisque suscipit, augue sem porttitor
                    risus, quis venenatis felis sapien sit amet orci.
                    <br /><br />
                    Vestibulum consequat turpis id leo scelerisque efficitur. Pellentesque euismod, est quis laoreet
                    euismod, tellus orci elementum lorem, eu eleifend sem erat ut ipsum. Morbi pellentesque ligula non orci
                    porta facilisis. Vestibulum ac rutrum ligula, sit amet laoreet purus. Aenean eu orci eget enim
                    ullamcorper pretium. Pellentesque tincidunt ipsum sit amet sollicitudin tempor. In vitae libero odio.
                    Donec ullamcorper hendrerit dolor, gravida iaculis diam faucibus et. Sed fermentum semper vehicula.
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
.about {
    box-shadow: inset 0px 25px 6px -24px var(--color-1), inset 0px -25px 6px -24px var(--color-5);
    color: var(--color-1);
    font-family: 'Space Mono', monospace;
    padding: 8vh 10vw;
}

.center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

section h1 {
    font-size: var(--font-size-1);
    text-align: center;
    margin-right: 50px;
    white-space: nowrap;
}

section p {
    font-size: var(--font-size-2);
}

@media only screen and (max-width: 1000px) {
    .about {
        padding: 8vh 5vw;
    }

    section {
        flex-direction: column;
    }

    section h1 {
        margin-right: 0;
        margin-bottom: 30px;
    }
}
</style>