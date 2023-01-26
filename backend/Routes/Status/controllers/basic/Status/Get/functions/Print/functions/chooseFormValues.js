import moment from 'moment';
const chooseFormValues=({acte})=>{
    const {
        commune,acte_naissance,
        declarations,officier
    }=acte;
    const {ville,arrondissement}=commune;
    const {pere,mere,sexe,profession,nom,prenom}=acte_naissance;
    const agePere=pere?`${moment().diff(moment(pere?.acte?.date),'years')}`:''
    const ageMere=mere?`${moment().diff(moment(mere?.acte?.date),'years')}`:''
    const formValues=[
        {name:"ville",value:ville?.nom_ville??"",field:"Text1"},
        {name:"arrondissement",value:arrondissement?.nom_arrondissement??"",field:"Text2"},
        {name:"commune",value:commune?.nom_commune??"",field:"Text3"},
        {name:"numero_acte",value:acte?.num_acte??"",field:"Text4"},
        {name:"date",value:new Date(acte?.date).toLocaleDateString(),field:"Text5"},
        {name:"nom",value:nom??"",field:"Text6"},
        {name:"prenom",value:prenom??"",field:"Text7"},
        {name:"profession",value:profession??"",field:"Text8"},
        {name:"sexe",value:sexe??"",field:"Text9"},
        {name:"prenom_pere",value:pere?.prenom??"",field:"Text10"},
        {name:"age_pere",value:agePere??"" ,field:"Text11"},
        {name:"profession_pere",value:pere?.profession??"",field:"Text12"},
        {name:"nom_mere",value:mere?.nom??"",field:"Text20"},
        {name:"prenom_mere",value:mere?.prenom??"",field:"Text21"},
        {name:"age_mere",value:ageMere??"",field:"Text22"},
        {name:"profession_mere",value:mere?.profession??"",field:"Text19"},
        {name:"nin_declarant",value:declarations[0]?.NIN??"",field:"Text14"},
        {name:"nom_declarant",value:declarations[0]?.nom??"",field:"Text13"},
        {name:"matricule_officier",value:officier?.matricule?.toString()??"",field:"Text16"},
        {name:"nom_officier",value:officier?.nom??"",field:"Text17"},
        {name:"prenom_officier",value:officier?.prenom??"",field:"Text18"},
    ];
    return formValues;
}
export default chooseFormValues;