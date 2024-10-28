// import filtPropContInte from "@functions.listToRender.js";

// export let contCeck={}
// export let showBtn = true
// export function listToRender(){ 
//   // contCheck = [];
//   contInterest = filtPropContInte($property, $currContList)
//   if(contInterested === "Posobles_Interesados"){
//     msgToShow = "Contactos Les Puede Interesar Esta Propiedad"
//       contToRender = contInterest
//   } else if(contInterested === "Por_Enviar"){
//       toSend=[];
//       msgToShow = "Pendiente Para Enviar Esta Propieadad"
//       res =  $currBinnList.filter(item =>
//       item.comment === $property.nameProperty)
//       const contsT = res.map(doc => doc.to)
//       toSend = contInterest.filter(doc => !contsT.includes(doc.telephon))               
//       contToRender = toSend
//   } else if(contInterested === "Ya_Se_Envió"){
//       sent=[];
//       msgToShow = "Ya se les envió esta propiedad"
//       res = $currBinnList.filter(item =>
//       item.comment === $property.nameProperty)
//       $currContList.filter((cont) =>{
//         res.forEach(binn => {
//           if(cont.telephon === binn.to){
//             sent.push(cont)
//             }
//           })
//           contToRender = sent
//       })
//   } 
// };