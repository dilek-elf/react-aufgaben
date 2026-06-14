// Badge is a small, reusable label — the smallest building block (an "atom")
// It just displays text with some styling, nothing fancy
type BadgeProps = {
  text: string
}

function Badge({ text }: BadgeProps) {
  return <span className="badge badge-primary">{text}</span>
}

export default Badge