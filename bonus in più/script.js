var miaPagina = new Vue ({
    
    el:"#container",
    data: {
        messaggio: "Scegli il disegno che preferisci:",
        miaImmagine: "",
    },
    methods: {
        scelta: function () {
           let input = document.querySelector('input[name="animal"]:checked')
            switch (input.value) {
            case "GATTI":
                this.miaImmagine = "https://portalebambini.it/wp-content/uploads/2021/06/gatti-colorare-001-1-724x1024.jpg";  
                break;
            case "CANI":
                this.miaImmagine = "https://st2.depositphotos.com/3903847/5567/v/450/depositphotos_55674625-stock-illustration-cute-puppy-dog.jpg";  
                break;
            case "TARTARUGHE":
                this.miaImmagine = "https://portalebambini.it/wp-content/uploads/2021/06/tartaruge-colorare-001-1024x724.jpg";  
                break;
            }  
        }
    }
})