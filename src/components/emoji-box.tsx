import { textArea } from '../global/share'
import { PropsEmojiApp, sectionCategories } from '../global/types'
import {
  Emoji,
  EmojiSkinTone,
  useEmojiComponents,
  useEmojiData,
  useEmojiGroupData
} from 'solid-emoji-picker'
import {
  For,
  Index,
  JSX,
  Show,
  Suspense,
  createMemo,
  createSignal
} from 'solid-js'
import {
  CURRENT_SECTION_CLASS,
  DEFAULT_SECTION_CLASS,
  FIRST_CATEGORY,
  SECTIONS,
  SECTION_CATEGORIES,
  SECTION_SERCH,
  SECTION_SKIN_TONE,
  SKINTONE_PICKER
} from '../global/values'

export function EmojisBox (props: PropsEmojiApp): JSX.Element {
  const setPickedEmoji = (e: MouseEvent) => {
    const target = e.target as HTMLImageElement
    const textarea = textArea()
    if (textarea && target) {
      textarea.value = `${textarea.value}${target.alt}`
      setTimeout(() => {
        textarea.scrollTop = textarea.scrollHeight
      }, 100)
    }
  }

  const [selected, setSelected] = createSignal(FIRST_CATEGORY)
  const [sectionVisible, setSectionVisible] = createSignal<sectionCategories>(SECTION_SERCH) // (SECTION_SERCH)
  const [skinTone, setSkinTone] = createSignal<EmojiSkinTone>(SKINTONE_PICKER[3])
  const [search, setSearch] = createSignal('')
  const renderEmoji = createMemo(() => props.renderProvider)
  const filterEmoji = (emoji: Emoji) => (search() !== '' ? emoji.name.includes(search()) : true)
  const emojiData = useEmojiData()
  const componentData = useEmojiComponents()
  const emojiGroupData = useEmojiGroupData()
  return (
    <div class='w-full'>
      <Suspense>
        {
        // @ts-ignore
        () => {
          const emoji = emojiData()
          const components = componentData()
          const emojiGroup = emojiGroupData()
          if (emoji && components && emojiGroup) {
            return (
              <div class='rounded-lg p-4 bg-gray-50 dark:bg-gray-700'>
                <div class='w-full px-4'>
                  <div
                    class='
                      grid
                      h-14
                      grid-cols-3
                      gap-1
                      mx-auto
                      my-2
                      bg-gray-100
                      rounded-lg
                      dark:bg-gray-600'
                    role='group'
                  >
                    <Index each={SECTIONS}>{(section, i) =>
                      <button
                        type='button'
                        id={section() + i}
                        onClick={() => setSectionVisible(section() as sectionCategories)}
                        class={sectionVisible() === section() ? CURRENT_SECTION_CLASS : DEFAULT_SECTION_CLASS}
                      >
                        {section()}
                      </button>}
                    </Index>
                  </div>
                </div>
                <div class='flex flex-col m-4 h-[4rem]'>
                  <div class='relative' classList={{ hidden: sectionVisible() !== SECTION_SERCH }}>
                    <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        class='
                          w-4
                          h-4
                          text-gray-500
                          dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      class='
                        block
                        w-full
                        h-16
                        p-4
                        pl-10
                        text-2xl
                        text-gray-900
                        border
                        border-gray-300
                        rounded-lg
                        bg-gray-50
                        focus:ring-blue-500
                        focus:border-blue-500
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500'
                      placeholder='emoji search'
                      value={search()}
                      onInput={(e) => setSearch(e.currentTarget.value)}
                      autofocus
                    />
                  </div>
                  <select
                    classList={{ hidden: sectionVisible() !== SECTION_SKIN_TONE }}
                    onInput={e => {
                      const skinColor = e.currentTarget.value as EmojiSkinTone
                      setSkinTone(skinColor)
                    }}
                    value={skinTone()}
                    id='skinpicker'
                    class='
                      h-32
                      bg-gray-50
                      border
                      border-gray-300
                      text-gray-600
                      text-2xl
                      rounded-lg
                      focus:ring-blue-500
                      focus:border-blue-500
                      block
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500'
                  >
                    <For each={SKINTONE_PICKER}>
                      {(group) => (
                        <option class='text-gray-900 text-2xl' value={group}>{group}</option>
                      )}
                    </For>
                  </select>
                  <select
                    classList={{ hidden: sectionVisible() !== SECTION_CATEGORIES }}
                    onInput={e => setSelected(e.currentTarget.value)}
                    value={selected()}
                    id='emojies'
                    class='
                      h-32
                      bg-gray-50
                      border
                      border-gray-300
                      text-gray-600
                      text-2xl
                      rounded-lg
                      focus:ring-blue-500
                      focus:border-blue-500
                      block w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500'
                  >
                    <For each={Object.keys(emojiGroup)}>
                      {(group) => (
                        <option class='text-gray-900 text-2xl' value={group}>{group}</option>
                      )}
                    </For>
                  </select>
                </div>
                <div class='overflow-y-auto w-full h-96'>
                  <For each={emojiGroup[selected()]}>
                    {(emojiItem) => (
                      <Show when={filterEmoji(emojiItem)}>
                        <button
                          type='button'
                          class='w-8 h-8 m-4'
                          onClick={(e) => setPickedEmoji(e)}
                          onFocus={props.onEmojiFocus && [props.onEmojiFocus, emojiItem]}
                          onMouseOver={props.onEmojiHover && [props.onEmojiHover, emojiItem]}
                          title={emojiItem.name}
                        >
                          {renderEmoji()(emoji, emojiItem, components, skinTone())}
                        </button>
                      </Show>
                    )}
                  </For>
                </div>
              </div>
            )
          }
          return null
        }
      }
      </Suspense>
    </div>
  )
}
