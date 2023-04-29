import React, { Component } from 'react'
import bustle from './giphy.gif';

export default class SlotMachine extends Component {
    render() {
        let win , loss, style ;
        const emoji1 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
        let Slot1 = emoji1[Math.floor(Math.random() * emoji1.length)];


        const emoji2 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
        let Slot2 = emoji2[Math.floor(Math.random() * emoji2.length)];


        const emoji3 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
        let Slot3 = emoji3[Math.floor(Math.random() * emoji3.length)];


        if ((Slot1 === Slot2) && (Slot2 === Slot3)) {
            win = "You are winner👍 ! You can eat free food!!!!!!!";
            style = {
                backgroundImage: `url(${bustle})`,
            }
        } else {
            loss = "You Loose👎!!!!!";
        }

        return (
            <React.Fragment>
                <div className='container' style={style}>
                    <div className='SlotMachine'>
                        <h1 className='heading'>{this.props.title}</h1>
                    </div>
                    <div className='spin'>
                        <p>{Slot1}</p>
                        <p>{Slot2}</p>
                        <p>{Slot3}</p>
                    </div>
                    <div className='reward'>
                        <p className='win'>{win}</p>
                        <p className='loss'>{loss}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// export default class SlotMachine extends Component {
    //     render() {
        //         let msg;
        //         const emoji1 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
        //         let Slot1 = emoji1[Math.floor(Math.random() * emoji1.length)];
        

//         const emoji2 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
//         let Slot2 = emoji2[Math.floor(Math.random() * emoji2.length)];


//         const emoji3 = ['🍕', '🍔', '🍟', '🌭', '🍿', '🪙']
//         let Slot3 = emoji3[Math.floor(Math.random() * emoji3.length)];


//         msg = ((Slot1 === Slot2) && (Slot2 === Slot3)) ? "You win" : "You lose";

//         // let RanSlot = `${Slot1} ${Slot2} ${Slot3}`;

//         return (
//                 <div className='container'>
//                     <div className='SlotMachine'>
//                         <h1 className='heading'>{this.props.title}</h1>
//                     </div>
//                     <div className='spin'>
//                         <p>{Slot1}</p>
//                         <p>{Slot2}</p>
//                         <p>{Slot3}</p>
//                     </div>
//                     <div className='reward'>
//                         <p className='win'>{msg}</p>
//                         {/* <p className='lose'>{msg}</p> */}
//                     </div>
//                 </div>
//         )
//     }
// }