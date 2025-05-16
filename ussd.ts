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
      default:
        console.log("Fonctionnalité non encore implémentée.");
        askMvolaMenuChoice();
        break;
    }
  });
}

showMainMenu();
