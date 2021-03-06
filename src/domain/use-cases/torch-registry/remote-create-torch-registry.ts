import { CreateTorchRegistryService } from '@/domain/protocols/services'
import { CreateTorchRegistry, CreateTorchRegistryParams } from '@/domain/protocols/use-cases'

export class RemoteCreateTorchRegistry implements CreateTorchRegistry {
  constructor(private readonly createTorchRegistryService: CreateTorchRegistryService) {}
  
  async create(params: CreateTorchRegistryParams) {
    const torchRegistryId = await this.createTorchRegistryService.create({
      characterName: params.characterName,
      torchCount: params.torchCount,
      torchCharge: params.torchCharge
    })

    return torchRegistryId
  }
}
