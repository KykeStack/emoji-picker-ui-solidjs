import { createSignal } from 'solid-js'

export const [emojiAppDiv, setEmojiAppDiv] = createSignal<HTMLDivElement| null>(null)
export const [textArea, setTextArea] = createSignal<HTMLTextAreaElement | undefined>()

export const parseHTML = (htmlString: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const element = doc.body.firstChild
  return element
}
