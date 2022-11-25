import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import { getID } from '../module/getID';

type props = {
  totalizer: any[];
  itemCount: number;
}

const Totallizer = ({ totalizer, itemCount }: props) => {
  const HANDLES_CSS = ['container_table', 'table', 'table_header', 'table_header_tr', 'table_header_th', 'table_body', 'table_body_tr', 'table_body_td', 'totalize_text_error', 'totalize_text_error_content']
  const handles = useCssHandles(HANDLES_CSS);

  const checkTolalizer = totalizer.length !== 0 && itemCount !== 0

  return (
    <>
      {
        checkTolalizer ?
          <table className={handles.table}>
            <thead className={handles.table_header}>
              <tr className={handles.table_header_tr}>
                {
                  totalizer.map((e) => (
                    <th className={handles.table_header_th} key={getID(5)} rowSpan={3}>{e.name}</th>
                  ))
                }
                {/* <th>Items</th>
              <th></th>
              <th></th>
              <th></th>
              <th>Total Items</th>
              <th>Costo Total del Envio</th>
              <th>Total Valor</th> */}
              </tr>
            </thead>
            <tbody className={handles.table_body}>
              <tr className={handles.table_body_tr}>
                {
                  totalizer.map((e) => (
                    <td className={handles.table_body_td} key={getID(5)} rowSpan={3}>{e.value / 100}</td>
                  ))
                }
                {/* <td>{itemCount}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{totalizer[0].value}</td>
              <td>{totalizer[1].value}</td>
            <td></td> */}
              </tr>
            </tbody>
          </table>
          :
          <div className={handles.totalize_text_error_content}>
            <h2 className={handles.totalize_text_error}>Esta compra no se puede calcular, verifique la ubicacion de envio</h2>
          </div>
      }
    </>
  )
}

export default Totallizer
