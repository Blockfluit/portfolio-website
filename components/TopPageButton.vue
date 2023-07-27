<script setup>
</script>

<template>
    <a class="fade-in scale-in" href="#home">
        <font-awesome-icon icon="fa-regular fa-circle-up" size="2xl" style="color:var(--color-2)" />
    </a>
</template>

<style scoped> a {
     z-index: 9999;
     position: fixed;
     bottom: 30px;
     right: 30px;
     width: 50px;
     height: 50px;
     border-radius: 25px;
     display: flex;
     justify-content: center;
     align-items: center;
     background: var(--color-3)
 }

 .jello-vertical {
     -webkit-animation: jello-vertical 0.9s both;
     animation: jello-vertical 0.9s both;
 }

 @-webkit-keyframes jello-vertical {
     0% {
         -webkit-transform: scale3d(1, 1, 1);
         transform: scale3d(1, 1, 1);
     }

     30% {
         -webkit-transform: scale3d(0.75, 1.25, 1);
         transform: scale3d(0.75, 1.25, 1);
     }

     40% {
         -webkit-transform: scale3d(1.25, 0.75, 1);
         transform: scale3d(1.25, 0.75, 1);
     }

     50% {
         -webkit-transform: scale3d(0.85, 1.15, 1);
         transform: scale3d(0.85, 1.15, 1);
     }

     65% {
         -webkit-transform: scale3d(1.05, 0.95, 1);
         transform: scale3d(1.05, 0.95, 1);
     }

     75% {
         -webkit-transform: scale3d(0.95, 1.05, 1);
         transform: scale3d(0.95, 1.05, 1);
     }

     100% {
         -webkit-transform: scale3d(1, 1, 1);
         transform: scale3d(1, 1, 1);
     }
 }

 @keyframes jello-vertical {
     0% {
         -webkit-transform: scale3d(1, 1, 1);
         transform: scale3d(1, 1, 1);
     }

     30% {
         -webkit-transform: scale3d(0.75, 1.25, 1);
         transform: scale3d(0.75, 1.25, 1);
     }

     40% {
         -webkit-transform: scale3d(1.25, 0.75, 1);
         transform: scale3d(1.25, 0.75, 1);
     }

     50% {
         -webkit-transform: scale3d(0.85, 1.15, 1);
         transform: scale3d(0.85, 1.15, 1);
     }

     65% {
         -webkit-transform: scale3d(1.05, 0.95, 1);
         transform: scale3d(1.05, 0.95, 1);
     }

     75% {
         -webkit-transform: scale3d(0.95, 1.05, 1);
         transform: scale3d(0.95, 1.05, 1);
     }

     100% {
         -webkit-transform: scale3d(1, 1, 1);
         transform: scale3d(1, 1, 1);
     }
 }
</style>