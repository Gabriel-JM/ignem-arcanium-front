import { WebSocketClient } from '@/infra/clients'

WebSocketClient.serverUrl = import.meta.env.VITE_WS_SERVER_URL

export const makeWebSocketClient = () => new WebSocketClient()
