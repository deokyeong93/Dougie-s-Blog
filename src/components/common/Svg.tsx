import { iconName, IconSet } from "@/constants"

interface Props {
  icon: iconName
  size: number
  color?: string
  className?: string
}

export default function Svg({ icon, size, color, className }: Props) {
  return (
    <svg
      className={className}
      height={size}
      viewBox={IconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconSet[icon].path} />
    </svg>
  )
}
