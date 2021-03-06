import { RemoteVerifyToken } from '@/domain/use-cases'
import { Base64TokenDecoder } from '@/infra/cryptography'
import { LocalStorageCacheStore } from '@/infra/stores'
import { ErrorHandlingPresenterDecorator } from '@/main/decorators'
import { makeAccountService } from '@/main/factories/services'
import { VerifyTokenPresenter } from '@/presentation/presenters'
import { UiNotifier } from '@/ui/notifiers'
import { LithenRouterAdapter } from '@/ui/routers'
import { AccountStore } from '@/ui/stores'

export function makeVerifyTokenPresenter() {
  const accountService = makeAccountService()
  const base64TokenDecoder = new Base64TokenDecoder()
  const localStorageCacheStore = new LocalStorageCacheStore()
  const verifyToken = new RemoteVerifyToken(
    localStorageCacheStore,
    accountService,
    base64TokenDecoder
  )

  const presenter = new VerifyTokenPresenter(
    verifyToken,
    new AccountStore(),
    new LithenRouterAdapter()
  )

  return new ErrorHandlingPresenterDecorator(new UiNotifier(), presenter)
}
