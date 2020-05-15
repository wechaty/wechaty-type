import { WeChatOfficialAccountIdList } from './offical-list'

function isOfficialId (id: string): boolean {
  return /^gh_/.test(id) || WeChatOfficialAccountIdList.includes(id)
}

function isRoomId (id: string): boolean {
  // it doesn't work for puppeteer
  return /@chatroom$/.test(id)
  // TODO: WxWork RoomID
}

function isContactId (id: string): boolean {
  // it doesn't work for puppeteer

  // FIXME:
  return !isRoomId(id)
}

function isStrangerV1 (strangerId: string): boolean {
  return /^v1_/i.test(strangerId)
}

function isStrangerV2 (strangerId: string): boolean {
  return /^v2_/i.test(strangerId)
}

export {
  isOfficialId,
  isRoomId,
  isContactId,
  isStrangerV1,
  isStrangerV2,
}
