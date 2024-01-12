document.addEventListener('DOMContentLoaded', function() {

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        anchors: ['Accueil', 'Produits', 'Panier'],
        menu: '#menu'
        
    });
});

