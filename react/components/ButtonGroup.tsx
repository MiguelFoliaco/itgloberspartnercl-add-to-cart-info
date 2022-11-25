import React from 'react'
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ['row_group_container', 'col_group_container', 'link_group_container', 'button_group_container', 'span_group_container']
const ButtonGroup = () => {

  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.row_group_container}>
      <div className={handles.col_group_container}>
        <a href="/checkout" className={handles.link_group_container}>
          <button className={handles.button_group_container}>
            <span className={handles.span_group_container}>Checkout</span>
          </button>
        </a>
      </div>
      <div className={handles.col_group_container}>
        <a href='/' className={handles.link_group_container}>
          <button className={handles.button_group_container}>
            <span className={handles.span_group_container}>CONTINUA COMPRANDO</span>
          </button>
        </a>
      </div>
      <div className={handles.col_group_container}>
        <a href="/" className={handles.link_group_container}>
          <button className={handles.button_group_container}>
            <span className={handles.span_group_container}>ver carrito</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export { ButtonGroup }
