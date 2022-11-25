import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import { getID } from '../module/getID'
import Totallizer from './Totallizer'

type props = {
  products: any[];
  totalizer: any[];
}

const HANDLES_CSS = ['container_table', 'table', 'table_header', 'table_header_tr', 'table_header_th', 'table_body', 'table_body_tr', 'table_body_td', 'table_body_image']

export const TableProduct = ({ products, totalizer }: props) => {

  const handles = useCssHandles(HANDLES_CSS)

  return (
    <div className={handles.container_table}>
      <table className={handles.table}>
        <thead className={handles.table_header}>
          <tr className={handles.table_header_tr}>
            <th className={handles.table_header_th}>Image</th>
            <th className={handles.table_header_th}>Nombre</th>
            <th className={handles.table_header_th}>SKU</th>
            <th className={handles.table_header_th}>Referencia</th>
            <th className={handles.table_header_th}>Precio</th>
            <th className={handles.table_header_th}>Cantidad</th>
            <th className={handles.table_header_th}>Precio Total</th>
          </tr>
        </thead>
        <tbody className={handles.table_body}>
          {
            products.map((e) => (
              <tr key={getID(3)} className={handles.table_body_tr}>
                <td className={handles.table_body_td}>
                  <img src={e.imageUrls.at3x} alt={`${e.name} imagen`} className={handles.table_body_image} />
                </td>
                <td className={handles.table_body_td}>{e.name}</td>
                <td className={handles.table_body_td}>{e.skuName}</td>
                <td className={handles.table_body_td}>{e.refId}</td>
                <td className={handles.table_body_td}>{(e.price / 100).toFixed(2)}</td>
                <td className={handles.table_body_td}>{e.quantity}</td>
                <td className={handles.table_body_td}>{(e.quantity * (e.price / 100)).toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Totallizer itemCount={products.length} totalizer={totalizer} />
    </div>
  )
}
