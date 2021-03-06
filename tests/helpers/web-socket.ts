import { SpyInstance } from 'vitest'

export function mockNativeWebSocket(): [SpyInstance, Record<'addEventListener' | 'send', SpyInstance>] {
  const fakeWebSocketInstance = {
    addEventListener: vi.fn(),
    send: vi.fn()
  }
  const WebSocketSpy = vi.spyOn(globalThis, 'WebSocket') as SpyInstance
  WebSocketSpy.mockImplementation(() => fakeWebSocketInstance)

  return [WebSocketSpy, fakeWebSocketInstance]
}

export function mockReceivedMessageResult(data: any = {}) {
  return {
    event: 'any_event',
    statusCode: 200,
    headers: {},
    data
  }
}

export function mockSendMessageClient() {
  const result = mockReceivedMessageResult()

  return {
    result,
    sendMessage: vi.fn(() => Promise.resolve(result))
  }
}

export function mockCreateConnectionService() {
  return {
    create: vi.fn(() => Promise.resolve())
  }
}

export function mockCreateConnectionClient() {
  return {
    createConnection: vi.fn(() => Promise.resolve())
  }
}
