import { RedirectType } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/photos/1', RedirectType.replace)
}
