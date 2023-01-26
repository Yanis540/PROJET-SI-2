
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()    
const villes=await prisma.ville.createMany({
    data: [
        { num_ville: 1, nom_ville:"Alger",superficie:422.56, pays:"Algérie"},
        { num_ville: 2, nom_ville:"Paris",superficie:500.46, pays:"France"},
        { num_ville: 3, nom_ville:"Oran",superficie:56.56, pays:"Algérie"},
      ],
});
const provinces=await prisma.province.createMany({
    data: [
        { num_province: 1, nom_province:"Alger",num_ville:1},
        { num_province: 2, nom_province:"Paris",num_ville:2},
        { num_province: 3, nom_province:"Oran",num_ville:3},
      ],
});
const arrondissements=await prisma.arrondissement.createMany({
    data: [
        { num_arrondissement: 1, nom_arrondissement:"Bab El Oued",num_province:1},
        { num_arrondissement: 2, nom_arrondissement:"Noisy Le Grand",num_province:2},
        { num_arrondissement: 3, nom_arrondissement:"Oran",num_province:3},
        { num_arrondissement: 4, nom_arrondissement:"Hussen Dey",num_province:1},
        { num_arrondissement: 5, nom_arrondissement:"Dar El Beïda",num_province:1},
        { num_arrondissement: 6, nom_arrondissement:"Rouïba",num_province:1},
      ],
});

const communes=await prisma.commune.createMany({
    data: [
        { num_commune: 1, nom_commune:"Casbah",num_arrondissement:1,num_ville:1},
        { num_commune: 2, nom_commune:"Bretagne",num_arrondissement:2,num_ville:2},
        { num_commune: 3, nom_commune:"Oran",num_arrondissement:3,num_ville:3},
        { num_commune: 4, nom_commune:"Kouba",num_arrondissement:4,num_ville:1},
        { num_commune: 5, nom_commune:"Bab Ezzouar",num_arrondissement:5,num_ville:1},
        { num_commune: 6, nom_commune:"Reghaïa",num_arrondissement:6,num_ville:1},
    ],
});
const my_photo="https://lh3.googleusercontent.com/a-/AOh14GiMIG9MnHmOWtoSDw9UKljFzVklztvVdqhAoOqd=s96-c"
const officiers=await prisma.officier.createMany({
    data: [
        { nom:"Yanis",prenom:"Tabellout",email:"yanistabellout4@gmail.com",password:"yanis",isValid:true,photo:my_photo,role:"MAIRE",num_commune:4},
        { nom:"Salim",prenom:"Tabellout",email:"salimtabellout4@gmail.com",password:"yanis",isValid:true,photo:my_photo,role:"MAIRE",num_commune:6},
        
    ],
})

const personne=await prisma.personne.createMany({
    data:[
        {NIN:10002058,CNI:116266832,nom:"Tabellout",prenom:" Yanis"},
        {NIN:10002059,CNI:116266833,nom:"Tabellout ",prenom:"Salim"},
        {NIN:10002060,CNI:116266834,nom:"Ramdani",prenom:"Meriem"}
    ]
});

const acte_naissance_yanis={
    "type_acte":"NAISSANCE",
    "numero_registre":"ea488788-d9d6-427b-9a02-b43f13176e9e",
    "list_declarants":[{"NIN":10002058}],
    "sexe":"HOMME",
    "lieu":"Kouba",
    "nom_nouveau_ne":"Tabellout",
    "prenom_nouveau_ne":"Yanis",
}
const acte_naissance_salim={
    "type_acte":"NAISSANCE",
    "numero_registre":"ea488788-d9d6-427b-9a02-b43f13176e9e",
    "list_declarants":[{"NIN":10002058}],
    "sexe":"HOMME",
    "lieu":"Kouba",
    "nom_nouveau_ne":"Tabellout",
    "prenom_nouveau_ne":"Salim",
}
const acte_naissance_meriem={
    "type_acte":"NAISSANCE",
    "numero_registre":"ea488788-d9d6-427b-9a02-b43f13176e9e",
    "list_declarants":[{"NIN":10002058}],
    "sexe":"FEMME",
    "lieu":"Kouba",
    "nom_nouveau_ne":"Ramdani",
    "prenom_nouveau_ne":"Meriem"
}
const acte_naissance_damya={
    "type_acte":"NAISSANCE",
    "numero_registre":"ea488788-d9d6-427b-9a02-b43f13176e9e",
    "list_declarants":[{"NIN":10002058}],
    "sexe":"FEMME",
    "lieu":"Kouba",
    "nom_nouveau_ne":"Khati",
    "prenom_nouveau_ne":"Damya"
}
const acte_deces={
    "type_acte":"DECES",
    "numero_registre":"8d6b685d-1045-4825-85b2-e587b7ff6a3b",
    "list_declarants":[{"NIN":10002058}],
    "lieu":"Hopital Ain Taya",
    "num_acte_naissance_personne_decede":20
}
const acte_mariage={
    "type_acte":"MARIAGE",
    "numero_registre":"b8e8d7da-5b3c-4508-8898-a4cda2ea35df",
    "list_declarants":[{"NIN":10002058}],
    "lieu":"Kouba",
    "mariage":{
        "numero_acte_naissance_femme":"18",
        "numero_acte_naissance_mari":"19"
    },
    "list_temoins":[{"NIN":10002058}]

}