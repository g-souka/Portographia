<template lang="pug">
//- portographia
div
    .map
        //- o script do mapa tem que entrar aqui
        map-block
    
    //- no overlay em baixo, ele adiciona a classe overlay--hidden quando este estado se comprova true
    //- mais info https://vuejs.org/v2/guide/class-and-style.html
    .overlay(:class="{'overlay--hidden': isOverlayHidden}")
        .overlay-content
            .project-logo
                vector(src="~@/assets/logos/portographiaLogo.svg", alt="Portographia text logotype", title="Portographia Logo")
                
            .project-description
                p
                    | {{ description1 }}
                    br
                    br
                    | {{ description2 }}
                    br
                    br
                    | {{ description3 }}
                    br
                    br

            .link-map
                button.button(@click="closeOverlay()") Navegar Memórias
</template>

<script src="./map.js"></script>
<script src="./home.page.js"></script>

<style src="./home.page.sass" lang="sass"></style>