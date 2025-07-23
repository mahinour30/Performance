import { memo } from "react";

// const ListItem = (props) => {

//     const { cartItem } = props
//     return (

//         <li key={cartItem.id}>
//             {cartItem.category} - Quantity: {cartItem.quantity}
//         </li>
//     );
// }


const ListItem = memo((props) => {

    const { cartItem } = props
    return (

        <li key={cartItem.id}>
            {cartItem.category} - Quantity: {cartItem.quantity}
        </li>
    );
})

export default ListItem



