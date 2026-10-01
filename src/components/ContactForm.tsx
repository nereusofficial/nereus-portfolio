import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mppwnggq'
interface FormValues {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClasses = (hasError: boolean) =>
  `w-full border bg-white px-4 py-3 font-mono text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:outline-none dark:bg-ink dark:text-neutral-100 dark:placeholder:text-neutral-600 ${
    hasError
      ? 'border-neutral-900 dark:border-white'
      : 'border-neutral-300 focus:border-neutral-900 dark:border-line dark:focus:border-neutral-300'
  }`

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'name is required'
  if (!values.email.trim()) errors.email = 'email is required'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'enter a valid email address'
  if (!values.message.trim()) errors.message = 'message is required'
  return errors
}

interface FieldProps {
  id: keyof FormValues
  label: string
  error?: string
  children: React.ReactNode
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs text-neutral-500 dark:text-fog">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 font-mono text-xs text-neutral-900 dark:text-white">
          <span className="text-neutral-400 dark:text-neutral-600">!</span> {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitError(false)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('failed to send message')
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    }
  }

  const handleReset = () => {
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="border border-neutral-300 bg-white p-8 text-center shadow-[8px_8px_0_0_rgb(0_0_0/0.07),0_24px_50px_-16px_rgb(0_0_0/0.28)] dark:border-line dark:bg-panel dark:shadow-[8px_8px_0_0_rgb(255_255_255/0.06),0_24px_50px_-16px_rgb(0_0_0/0.65)]">
        <CheckCircle2 className="mx-auto h-10 w-10" aria-hidden="true" />
        <p className="mt-4 font-mono text-sm text-neutral-500 dark:text-fog">
          <span className="text-neutral-400 dark:text-neutral-600">$</span> send --to {values.email}
        </p>
        <p className="mt-2 font-mono text-lg font-bold">message sent — status: 200 OK</p>
        <p className="mt-2 text-sm text-neutral-600 dark:text-fog">
          thanks for reaching out, i'll get back to you soon.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 cursor-pointer border border-neutral-900 px-4 py-2 font-mono text-sm transition-colors duration-200 hover:bg-neutral-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 border border-neutral-300 bg-white p-6 shadow-[8px_8px_0_0_rgb(0_0_0/0.07),0_24px_50px_-16px_rgb(0_0_0/0.28)] dark:border-line dark:bg-panel dark:shadow-[8px_8px_0_0_rgb(255_255_255/0.06),0_24px_50px_-16px_rgb(0_0_0/0.65)]"
    >
      <Field id="name" label="name *" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="ada lovelace"
          value={values.name}
          onChange={(event) => handleChange('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          className={inputClasses(Boolean(errors.name))}
        />
      </Field>

      <Field id="email" label="email *" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="ada@example.com"
          value={values.email}
          onChange={(event) => handleChange('email', event.target.value)}
          aria-invalid={Boolean(errors.email)}
          className={inputClasses(Boolean(errors.email))}
        />
      </Field>

      <Field id="message" label="message *" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="hello, i have a project for you..."
          value={values.message}
          onChange={(event) => handleChange('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={`${inputClasses(Boolean(errors.message))} resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-neutral-900 bg-neutral-900 px-5 py-3 font-mono text-sm text-white transition-colors duration-200 hover:bg-transparent hover:text-neutral-900 dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
      >
        <Send className="h-4 w-4" />
        send_message
      </button>

      {submitError && (
        <p role="alert" className="mt-3 text-center font-mono text-xs text-neutral-900 dark:text-white">
          <span className="text-neutral-400 dark:text-neutral-600">!</span> failed to send — please try again
        </p>
      )}
    </form>
  )
}
