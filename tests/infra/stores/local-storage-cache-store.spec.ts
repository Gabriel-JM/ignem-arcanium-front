import { LocalStorageCacheStore } from '@/infra/stores'

function makeSut() {
  const setItemSpy = vi.spyOn(localStorage, 'setItem')
  const getItemSpy = vi.spyOn(localStorage, 'getItem')
  const sut = new LocalStorageCacheStore()

  return {
    sut,
    setItemSpy,
    getItemSpy
  }
}

describe('LocalStorageCacheStore', () => {
  describe('save()', () => {
    it('should call localStorage.setItem with correct values', () => {
      const { sut, setItemSpy } = makeSut()
  
      sut.save('any_key', { data: 1 })
  
      expect(setItemSpy).toHaveBeenCalledWith(
        '@ignem-arcanium:any_key',
        '{"data":1}'
      )
    })
  })

  describe('get()', () => {
    it('should call localStorage.getItem with correct values', () => {
      const { sut, getItemSpy } = makeSut()
  
      sut.get('any_key')
  
      expect(getItemSpy).toHaveBeenCalledWith('@ignem-arcanium:any_key')
    })

    it('should return null when localStorage.getItem returns an invalid json', () => {
      const { sut, getItemSpy } = makeSut()
      getItemSpy.mockReturnValueOnce('{"name"}')
  
      const response = sut.get('any_key')

      expect(response).toBeNull()
    })

    it('should return the stored data on success', () => {
      const { sut, getItemSpy } = makeSut()
      getItemSpy.mockReturnValueOnce('{"data":true}')
  
      const response = sut.get('any_key')

      expect(response).toEqual({ data: true })
    })
  })
})
