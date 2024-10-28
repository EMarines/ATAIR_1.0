/**
 * @type {number}
 */
let lowRange, range
/**
 * @type {string}
 */
let rng;

/**
 * @type {number}
 */
let upRange;

  /**
 * @param {string} rng
 */
  export function setRange(rng){
      if(rng === "prm"){
        lowRange = 0, upRange=1000000                 // PRM
      }
      else if (rng === "sgn") {
        lowRange = 1000001, upRange=2500000           // SGN
      }
      else if (rng === "trc") {
        lowRange = 2500001, upRange=5000000           // TRC
      }
      else if (rng === "crt") {
        lowRange = 5000001, upRange=8000000           // CRT
      }
      else if (rng === "qnt") {                       // QNT
        console.log("si")
        lowRange = 8000001, upRange=12000000
         
      }
        else if (rng === "sxt") {
        lowRange = 12000000, upRange=1500000000       // SXT
      } 
  };
  
    /**
 * @param {number} price
 */
    export function ranPrice(price){
      if(price <= 1000000){
        lowRange = 0, upRange=1000000                 // PRM
      }
      else if (price <= 2500000) {
        lowRange = 1000001, upRange=2500000           // SGN
      }
      else if (price <= 5000000) {
        lowRange = 2500001, upRange=5000000           // TRC
      }
      else if (price <= 8000000) {
        lowRange = 5000001, upRange=8000000           // CRT
      }
      else if (price <= 12000000) {                   // QNT
        return rng = "qnt"
      }
        else if (price > 12000000) {
        lowRange = 12000000, upRange=1500000000       // SXTre
      } 
      return 
    };

  // Devuelve el rango en letras de un valor
    /**
 * @param {number} price
 */
    export function mosRange(price){
      if(price <= 1000000){
        rng = "PRM";                 // PRM
      }
      else if (price <= 2500000) {
        rng = "SGN"            // SGN
        // console.log("sgn");
      }
      else if (price <= 5000000) {
        // console.log("trc");
        rng = "TRC"            // TRC
      }
      else if (price <= 8000000) {
        // console.log("crt");
        rng = "CRT"            // CRT
      }
      else if (price <= 12000000) {   // QNT
        rng = "QNT"  
      }
        else if (price > 12000000) {
        rng = "SXT"            // SXT
      } 
      if(rng === undefined){
        rng = ""
      }
      return rng     
    };
