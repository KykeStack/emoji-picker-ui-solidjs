import { onMount, type JSX } from 'solid-js'
import { EmojisBox } from './emoji-box'
import twemoji from 'twemoji'
import {
  parseHTML,
  setEmojiAppDiv
} from '../global/share'
import {
  convertSkinToneToComponent,
  getEmojiWithSkinTone
} from 'solid-emoji-picker'
import type {
  EmojiSkinTone,
  Emoji,
  EmojiComponents,
  EmojiData
} from 'solid-emoji-picker'

export function getTwemoji (
  emojis: EmojiData,
  emoji: Emoji,
  components: EmojiComponents,
  tone?: EmojiSkinTone
) {
  const skinTone = convertSkinToneToComponent(components, tone)
  const tonedEmoji = getEmojiWithSkinTone(emojis, emoji, skinTone)
  return twemoji.parse(tonedEmoji)
}

function renderTwemoji (
  emojis: EmojiData,
  emoji: Emoji,
  components: EmojiComponents,
  tone?: EmojiSkinTone
): JSX.Element {
  const data = getTwemoji(emojis, emoji, components, tone)
  return (
    <span>
      {parseHTML(data)}
    </span>
  )
}

export default function EmojiPickerApp (): JSX.Element {
  let emojieAppRef: HTMLDivElement | undefined
  onMount(() => setEmojiAppDiv(() => emojieAppRef))
  return (
    <EmojisBox
      renderProvider={renderTwemoji}
    />
  )
}
