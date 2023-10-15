import React from 'react'
import bg from '../data/empty-shopping.jpg'
const Cart = ({cart,chekcart}) => {
  return (
    <div className='min' style= {{ backgroundImage:`url(${bg})` }} >
{cart.map((item)=>(
<div>
<span>

</span>
<span>

</span>
<span>
  <Button> +</Button>
</span>
</div>
))}


    </div>
  )
}

export default Cart