'use client'

import { useRef, ReactNode, HTMLFactory } from "react"

interface formProps {
    children: ReactNode,
    actions: (formData: FormData) => Promise<void | boolean>,
    className?: string,
    onSubmit? : () => void 
}

const Form = ({children, actions, className, onSubmit}: formProps) => {
    const ref = useRef<HTMLFormElement>(null)
    return (
    <form
    className={className}
    onSubmit={onSubmit}
    ref={ref}
    action={async (formData) => {
        await actions(formData)
        ref.current?.reset()
    }}
    >
        {children}
    </form>
  )
}

export default Form