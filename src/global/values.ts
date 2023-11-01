import { EmojiSkinTone } from 'solid-emoji-picker'

export const SECTION_SERCH = 'Search'
export const SECTION_CATEGORIES = 'Categories'
export const SECTION_SKIN_TONE = 'Skin tone'
export const FIRST_CATEGORY = 'Smileys & Emotion'
export const SKINTONE_PICKER: EmojiSkinTone[] = ['light', 'medium-light', 'medium', 'medium-dark', 'dark']
export const CURRENT_SECTION_CLASS = 'px-5 py-1.5 text-xl font-medium text-white bg-[var(--primary-theme-items)] dark:bg-[var(--secondary-theme-items)] dark:text-gray-900 rounded-lg'
export const DEFAULT_SECTION_CLASS = 'px-5 py-1.5 text-xl font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg'
export const SECTIONS = [SECTION_SERCH, SECTION_SKIN_TONE, SECTION_CATEGORIES]
