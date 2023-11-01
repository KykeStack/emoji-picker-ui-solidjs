import type { Component } from 'solid-js'
import EmojiPickerApp from './components/emoji-app'
import TexArea from './components/text-area'

const App: Component = () => {
  return (
    <div
      class='
        flex
        items-center
        justify-center
        w-screen
        h-screen'
    >
      <div class='flex flex-col items-center justify-center gap-4 w-[44rem]'>
        <EmojiPickerApp />
        <TexArea />
      </div>
    </div>
  )
}

export default App
