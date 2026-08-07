import './style.scss'
import { RESPONSIBILITIES } from 'utils/consts'
import { IResponsibility } from './interface'

const ResponsibilitiesSection = () => {
  return (
    <section id="podzial-obowiazkow" className="responsibilities">
      <div className="responsibilities__inner">
        <h2 className="responsibilities__title">
          Podział
          <br />
          obowiązków
        </h2>

        <div className="responsibilities__content">
          <p className="responsibilities__lead">
            Partner wnosi kapitał, my prowadzimy projekt — od wyszukania lokalu po akt sprzedaży.
            Modele współpracy dobieramy do kapitału i oczekiwań partnera: nie w każdym partner
            finansuje zakup w całości. Zysk dzielimy wprost proporcjonalnie do wniesionego kapitału,
            po odliczeniu wszystkich kosztów projektu — kto wnosi więcej, bierze więcej. Udział
            ustalamy przed zakupem i zapisujemy w umowie. Podział obowiązków poniżej zostaje taki
            sam w każdym modelu.
          </p>

          <table className="responsibilities__table">
            <caption>Kto za co odpowiada, etap po etapie</caption>
            <thead>
              <tr>
                <th scope="col">Etap</th>
                <th scope="col">Partner</th>
                <th scope="col">Kult</th>
              </tr>
            </thead>
            <tbody>
              {RESPONSIBILITIES.map((row: IResponsibility) => (
                <tr key={row.stage}>
                  <th scope="row">{row.stage}</th>
                  {row.span ? (
                    <td colSpan={2} className="responsibilities__span">
                      {row.span}
                    </td>
                  ) : (
                    <>
                      <td data-label="Partner">{row.partner}</td>
                      <td data-label="Kult">{row.kult}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ResponsibilitiesSection
