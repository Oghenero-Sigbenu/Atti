import "react-responsive-carousel/lib/styles/carousel.css";
import atti from "../../Assests/atti1.jpeg";
function Hero() {
  return (
    <div className=" h-[500px] w-[100%] mb-[rem] bg-[rgba(142,224,254,0.29)] relative">
      <img src={atti} alt="bg" className="h-full object-cover w-full " />
    </div>
  );
}

export default Hero;
// import React  from "react";
// import "./index.css";

// export default function Calculator() {
//   return (
//     <div className="layout-column align-items-center">
//       <div data-testid="total-operations" className="pt-50 total-operations"></div>
//       <div className="card">

//         <section className="card-text">
//           <div className="layout-row justify-content-around align-items-center mt-40">
//             <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
//                   name="input1"/>
//             <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator"></label>
//             <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
//                   placeholder="Eg: 2"/>
//           </div>

//           <div className="layout-row justify-content-around mt-30">
//             <button className="operationFont" type="submit" data-testid="addButton">+</button>
//             <button className="operationFont" type="submit" data-testid="subtractButton">-</button>
//             <button className="operationFont" type="submit" data-testid="multiplyButton">*</button>
//             <button className="operationFont" type="submit" data-testid="divideButton">/</button>
//           </div>

//           <div className="layout-row justify-content-between align-items-center mt-30">
//             <button type="reset" data-testid="resetButton" className="outline danger">Reset</button>
//             <div className="layout-row justify-content-center align-items-center result-container">
//               <div data-testid="result" className="result-value ma-0 slide-up-fade-in"></div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );

// }

// const getData = (id) => {

// }

// async function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//     let num = readLine().trim();
//     for (let i = 0; i < num; i++) {
//         let id = readLine().trim();
//         const result = await getData(id).then((val) => { return val.x + ' ' + val.y }).catch(() => { return "Error" });
//         ws.write(result + '\n');
//     }
//     ws.end();
// }
