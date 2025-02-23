import { Telegram } from './src/globalTypes/TelegramTypes'

declare global {
  interface Window {
    WebKitHapticFeedback: never
    Telegram: Telegram
  }
}
