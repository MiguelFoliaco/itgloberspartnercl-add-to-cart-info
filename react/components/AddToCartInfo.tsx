import React, { Fragment } from 'react'
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { ButtonGroup } from './ButtonGroup';
import { TableProduct } from './TableProduct';
import './index.css'

export const AddToCartInfo = () => {


  const productContextValue = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()

  console.log("El totoal", totalizers)
  console.log(productContextValue.product)
  return (
    <Fragment>
      <ButtonGroup />
      <TableProduct products={items} totalizer={totalizers} />
    </Fragment>
  )
}
