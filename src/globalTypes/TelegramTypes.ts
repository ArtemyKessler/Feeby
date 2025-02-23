export type InvoiceStatuses = 'pending' | 'failed' | 'cancelled' | 'paid'

export type EventNames =
  | 'invoiceClosed'
  | 'settingsButtonClicked'
  | 'backButtonClicked'
  | 'mainButtonClicked'
  | 'viewportChanged'
  | 'themeChanged'
  | 'popupClosed'
  | 'qrTextReceived'
  | 'clipboardTextReceived'
  | 'writeAccessRequested'
  | 'contactRequested'
  | 'scanQrPopupClosed'

export type EventParams = {
  invoiceClosed: { url: string; status: InvoiceStatuses }
  settingsButtonClicked: void
  backButtonClicked: void
  mainButtonClicked: void
  viewportChanged: { isStateStable: boolean }
  themeChanged: void
  popupClosed: { button_id: string | null }
  qrTextReceived: { data: string }
  clipboardTextReceived: { data: string }
  writeAccessRequested: { status: 'allowed' | 'cancelled' }
  contactRequested: { status: 'sent' | 'cancelled' }
  scanQrPopupClosed: void
}

export interface StoryShareParams {
  text: string
  widget_link: StoryWidgetLink
}

interface StoryWidgetLink {
  url: string
  name: string
}

interface MainButton {
  text: string
  color?: string
  textColor?: string
  isVisible: boolean
  isActive: boolean
  isProgressVisible: boolean
  setText(text: string): MainButton
  onClick(callback: () => void): MainButton
  offClick(callback: () => void): MainButton
  show(): MainButton
  hide(): MainButton
  enable(): MainButton
  disable(): MainButton
  showProgress(leaveActive?: boolean): MainButton
  hideProgress(): MainButton
}

interface HapticFeedback {
  impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void
  notificationOccurred(type: 'error' | 'success' | 'warning'): void
  selectionChanged(): void
}

interface PopupButton {
  id?: string
  type: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'
  text: string
}

interface User {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  photo_url?: string
  is_premium?: string
}

interface Chat {
  id: number
  type: 'private' | 'group' | 'supergroup' | 'channel'
  title?: string
  username?: string
  photo_url?: string
}

interface InitDataUnsafe {
  query_id?: string
  user?: User
  receiver?: User
  chat?: Chat
  start_param?: string
  can_send_after?: number
  auth_date: number
  hash: string
}

interface SettingsButton {
  isVisible: boolean
  show(): void
  hide(): void
  onClick(callback: () => void): void
  offClick(callback: () => void): void
}

interface BackButton {
  isVisible: boolean
  show(): void
  hide(): void
  onClick(callback: () => void): void
  offClick(callback: () => void): void
}

interface IWebApp {
  initData: string
  initDataUnsafe: InitDataUnsafe
  version: string
  platform: string
  colorScheme: 'light' | 'dark'
  themeParams: ThemeParams
  viewportHeight: number
  viewportStableHeight: number
  headerColor: string
  backgroundColor: string
  isExpanded: boolean
  MainButton: MainButton
  HapticFeedback: HapticFeedback
  SettingsButton: SettingsButton
  BackButton: BackButton
  isClosingConfirmationEnabled: boolean
  setHeaderColor(color: string): void
  setBackgroundColor(color: string): void
  close(): void
  expand(): void
  isVersionAtLeast(version: string): boolean
  onEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void
  offEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void
  sendData(data: string): void
  ready(): void
  showPopup(
    popupParams: PopupParams,
    callback?: (buttonId: string) => void
  ): void
  showAlert(message: string, callback?: () => void): void
  showConfirm(message: string, callback: (ok: boolean) => void): void
  showScanQrPopup(params: ScanQrPopupParams): void
  closeScanQrPopup(): void
  openLink(url: string): void
  openTelegramLink(url: string): void
  shareToStory(media_url: string, params?: StoryShareParams): void
  enableVerticalSwipes(): void
  disableVerticalSwipes(): void
  // sendInvoice(): void;
  openInvoice: (
    url: string,
    callback?: (status: InvoiceStatuses) => unknown
  ) => void
}

interface ThemeParams {
  bg_color?: string
  text_color?: string
  hint_color?: string
  link_color?: string
  button_color?: string
  button_text_color?: string
}

interface PopupParams {
  title?: string
  message: string
  buttons?: PopupButton[]
}

interface ScanQrPopupParams {
  text?: string
  format?: 'QR_CODE'
  callback: (data: string) => void
}

export interface Telegram {
  WebApp: IWebApp
}
