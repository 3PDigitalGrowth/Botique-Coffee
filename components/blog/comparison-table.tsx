type Cell = string | number

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: Cell[][]
}) {
  if (!headers?.length || !rows?.length) return null
  return (
    <div className="my-8 -mx-4 md:mx-0 overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-muted/60 text-foreground">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-serif font-semibold px-4 py-3 border-b border-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                ri % 2 === 0
                  ? "bg-background"
                  : "bg-muted/30"
              }
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 border-b border-border text-foreground/85 leading-relaxed align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
