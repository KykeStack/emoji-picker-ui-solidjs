import { type JSX } from 'solid-js'
import {
  Emoji,
  EmojiComponents,
  EmojiData,
  EmojiPickerProps,
  EmojiSkinTone
} from 'solid-emoji-picker'
import {
  SECTION_CATEGORIES,
  SECTION_SERCH,
  SECTION_SKIN_TONE
} from './values'

export type sectionCategories = typeof SECTION_SERCH
                                | typeof SECTION_CATEGORIES
                                | typeof SECTION_SKIN_TONE

export interface PropsEmojiApp extends EmojiPickerProps {
  renderProvider : (
    emojis: EmojiData,
    emoji: Emoji,
    components: EmojiComponents,
    skinTone?: EmojiSkinTone
    ) => JSX.Element;
}
