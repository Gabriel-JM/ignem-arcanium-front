export interface PresenterResult<T = unknown> {
  ok: boolean
  data: T | null
  validationErrors: string[] | null
}

export interface Presenter<T = unknown> {
  handle(data?: unknown): Promise<PresenterResult<T>>
}
