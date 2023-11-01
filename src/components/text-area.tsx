import { type Component, onMount } from 'solid-js'
import { setTextArea } from '../global/share'

const TexArea: Component = () => {
  let textAreaRef: HTMLTextAreaElement | undefined
  onMount(() => setTextArea(textAreaRef))
  return (
    <div class='w-full h-fit'>
      <form>
        <label for='chat' class='sr-only'>Your message</label>
        <div class='flex items-center h-20 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700'>
          <textarea
            id='chat'
            rows='1'
            class='block resize-none mx-4 p-2.5 w-full h-full text-2xl text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Your message...'
            ref={textAreaRef}
          />
          <button type='submit' class='inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600'>
            <svg class='w-8 h-8 rotate-90' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 20'>
              <path d='m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z' />
            </svg>
            <span class='sr-only'>Send message</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TexArea
