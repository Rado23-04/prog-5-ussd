import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inactivityTimeout: NodeJS.Timeout;

function exitDueToInactivity() {
  console.log("\nInactivité détectée. Fermeture de la session USSD.");
  rl.close();
}

function showMainMenu() {
  console.clear();
  console.log("YAS et MOI");
  console.log("1 MVOLA");
  console.log("2 Rappelle moi");
  console.log("3 SOS crédit");
  console.log("4 Service YAS");
  console.log("5 Promotion");
  console.log("6 Produits et divertissant");
  console.log("7 Banques et Micro-Finance");
  console.log("0 Page suivante");
  askMainMenuChoice();
}

function showMvolaMenu() {
  console.clear();
  console.log("=== MENU MVOLA ===");
  console.log("1 Acheter Credit ou Offre Yas");
  console.log("2 Transfert d'argent");
  console.log("3 Mvola crédit ou épargne");
  console.log("4 Retrait d'argent");
  console.log("# Page ");
  askMvolaMenuChoice();
}

function askMainMenuChoice() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(exitDueToInactivity, 5000);

  rl.question("Choisissez une option : ", (choice) => {
    clearTimeout(inactivityTimeout);
    switch (choice.trim()) {
      case "1":
        showMvolaMenu();
        break;
      case "0":
        console.log("Aller à la page suivante (simulé)");
        rl.close();
        break;
      default:
        console.log("Option invalide.");
        askMainMenuChoice();
        break;
    }
  });
}

function askMvolaMenuChoice() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(exitDueToInactivity, 5000);

  rl.question("Choisissez une option MVOLA : ", (choice) => {
    switch (choice.trim()) {
      case "0":
        showMainMenu();
        break;
    case "1":
        buyCreditOrOffre();
        askCreditForMe();
        break;
      case "2":
        transfertMoney();
        break;    
      case "#":
        moreMvolaChoice();
        askMvolaMenuChoice();
        break;  
      default:
        console.log("Fonctionnalité non encore implémentée.");
        askMvolaMenuChoice();
        break;
    }
  });
}

function moreMvolaChoice(){
    console.clear()
    console.log("5 Paiement & Parteneire");
    console.log("6 Mon compte");
    console.log("7 Recevoir de l'argent");
    console.log("8 Banque et Micro-Finance");
}



function buyCreditOrOffre(){
    console.clear();
    console.log("Acheter Credit ou Offre Yas");
    console.log("1 Credit pour mon numéro");
    console.log("2 Credit pour autre numéro");
    console.log("3 Offre pour mon numéro");
    console.log("4 Offre pour autre numéro");
}
function transfertMoney(){
    console.clear();
    console.log("Entrez numéro de tel.");
    console.log("Destinataire ou:");
    console.log("0 Sans numero");
    console.log("5 MVola epargne");
    console.log("6 Rempbourser une avance");
    console.log("9 repertoire Mvola");    
}

function askCreditForMe(){
    rl.question("Credit a envoyer : ", (choice)=>{
        switch (choice.trim()) {
            case "1":
                creditTosend();
                askCodeOrDirect();
                break;
        
            default:
                break;
        }
    })
}

function creditTosend(){
    console.clear();
    console.log("1 Recharger directement");
    console.log("2 Code de recharge");
}
function askCodeOrDirect(){
    rl.question("Entrez votre choix : ",(choice)=>{
        switch (choice.trim()) {
            case "1":
                showDirect();
                break;
             case "2":
                useCode();
                break;
            default:
                break;
        }
    } )
}

function showDirect(){
    console.clear();
    console.log("Montant: ");
}

function useCode(){
    console.clear();
    console.log("Entrer votre code de rechargement : ");
    
}
showMainMenu();
