import { RevealLinesProps } from './interface'

/**
 * Splits a heading into masked lines.
 *
 * Each line is its own overflow box, so the inner span can be pushed below it
 * and slide back into place. The mask is padded by .2em and pulled back by the
 * same negative margin: at line-height .86 the line box is shorter than the ink
 * of capitals with Polish diacritics, and without that padding the mask clipped
 * the accents off the top and bottom.
 */
const RevealLines = ({ lines }: RevealLinesProps) => (
  <>
    {lines.map((line) => (
      <span key={line} className="reveal__line">
        <span>{line}</span>
      </span>
    ))}
  </>
)

export default RevealLines
