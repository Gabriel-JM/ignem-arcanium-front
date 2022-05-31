export function mockCreateAccount() {
  const result = {
    name: 'any_name',
    token: 'any_token'
  }
  
  return {
    result,
    create: vi.fn(() => Promise.resolve(result))
  }
}

export function mockCreateAccountService() {
  const result = {
    name: 'any_name',
    token: 'any_token'
  }
  
  return {
    result,
    create: vi.fn(() => Promise.resolve(result))
  }
}

export function mockAccountLoginService() {
  const result = {
    name: 'any_name',
    token: 'any_token'
  }
  
  return {
    result,
    login: vi.fn(() => Promise.resolve(result))
  }
}

export function mockVerifyTokenService() {
  return {
    verify: vi.fn(() => Promise.resolve())
  }
}

export function mockVerifyToken() {
  return {
    verify: vi.fn(() => Promise.resolve())
  }
}

export function mockSetAccountStore() {
  return {
    setAccountValue: null,
    set account(value: any) {
      this.setAccountValue = value
    }
  }
}
