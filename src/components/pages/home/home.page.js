import { getData } from "@/data/models/fusion-tables.model.js";

export default {
	name: "home-page",
	data () {
		return {
			isOverlayHidden: false,
			content: null,
			description1: "Portographia é um website de recolha e partilha de memórias de pessoas que têm uma relação emocional com a cidade do Porto.",
			description2: "Esta plataforma pretende conservar a memória, identidade e história da cidade ao atenuar os efeitos de fenómenos de gentrificação, mudanças culturais, sociais e tecnológicas. Para tal, construímos este repositório que contém as memórias fotográficas e descritivas do olhar dos residentes e visitantes.",
			description3: "As publicações podem ser acontecimentos memoráveis, ou simples rotinas do dia-a-dia, que merecem ser preservadas e partilhadas.",
			description4: "Para contribuir com uma memória, basta clicar com a tecla direita do rato (computador) ou premir durante um segundo (telemóvel) no local onde quer adicionar a memória e será direccionado para o formulário."
		}
	},
	created() {
		getData("*").then(data => this.content = data);
	},
	methods: {
		// Close Overlay
		closeOverlay() {
			this.isOverlayHidden = true;
		}
	}
}