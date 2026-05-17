import { Info, AlertTriangle, Lightbulb } from "lucide-react"
import type { ReactNode } from "react"

type CalloutType = "info" | "warning" | "tip"

const styles: Record<CalloutType, { bg: string; border: string; icon: ReactNode; label: string }> = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: <Info className="w-5 h-5 text-blue-600" aria-hidden />,
    label: "Info",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden />,
    label: "Heads up",
  },
  tip: {
    bg: "bg-copper/[0.07]",
    border: "border-copper/30",
    icon: <Lightbulb className="w-5 h-5 text-copper" aria-hidden />,
    label: "Tip",
  },
}

export function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType
  children: ReactNode
}) {
  const style = styles[type] ?? styles.info
  return (
    <div
      className={`my-8 rounded-xl border ${style.border} ${style.bg} p-5 md:p-6 flex gap-4`}
    >
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="text-foreground/90 leading-relaxed [&_p]:m-0 [&_p+p]:mt-3">
        {children}
      </div>
    </div>
  )
}
