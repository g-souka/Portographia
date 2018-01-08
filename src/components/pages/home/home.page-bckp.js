export default {
	name: "HomePage",
	data () {
		return {
			description1: "Portographia é um website de recolha e partilha de memórias de pessoas que têm uma relação emocional com a cidade do Porto.",
			description2: "Esta plataforma pretende conservar a memória, identidade e história da cidade ao atenuar os efeitos de fenómenos de gentrificação, mudanças culturais, sociais e tecnológicas. Para tal, construímos este repositório que contém as memórias fotográficas e descritivas do olhar dos residentes e visitantes.",
			description3: "As publicações podem ser acontecimentos memoráveis, ou simples rotinas do dia-a-dia, que merecem ser preservadas e partilhadas."
		}
	},

	// Close Overlay
	closeOverlay() {
			document.getElementById("overlay").style.height = "0%"
	} 
}