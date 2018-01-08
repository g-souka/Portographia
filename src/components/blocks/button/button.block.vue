<template lang="pug">
button.button(:class="createStyles('button', styles)")
	.button__container
		.button__icon
			//- vector(:src="require('@/assets/icons/'+icon+'.svg')")
		.button__text(v-if="title") {{ title }}

</template>

<script src="./button.block.js"></script>