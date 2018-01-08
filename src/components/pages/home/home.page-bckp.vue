<template lang="pug">
// portographia
.map
    img(src='/static/mapa.gif')
    
    .overlay
        .overlay-content
            .project-logo
                img(src='/static/portographiaLogo.svg', alt='Portographia text logotype', title='Portographia Logo')
                
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
                a.button(href='javascript:void(0)' onclick='closeOverlay()') Navegar Memórias
</template>

<script src="./home.page.js"></script>
<style src="./home.page.sass" lang="sass" scoped></style>