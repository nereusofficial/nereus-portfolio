export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-glow-1 absolute -top-48 left-[8%] h-[36rem] w-[36rem] rounded-full" />
      <div className="bg-glow-2 absolute top-[30%] -left-48 h-[30rem] w-[30rem] rounded-full" />
      <div className="bg-glow-3 absolute -bottom-32 right-[4%] h-[32rem] w-[32rem] rounded-full" />
      <div className="bg-glow-2 absolute top-[60%] right-[20%] h-[22rem] w-[22rem] rounded-full" />
      <div className="bg-vignette absolute inset-0" />
    </div>
  )
}
