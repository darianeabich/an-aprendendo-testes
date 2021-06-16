import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  // tudo o que diz respeito ao artefato que se quer testar

  let service: UniqueIdService = null;
  // antes de iniciar cada it() a variavel service reberá um novo valor de instância
  beforeEach(() => {
    service = new UniqueIdService();
  })

  // cada teste é iniciado com it()
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  // não deixar o que o id seja duplicado
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids  = new Set(); // Set() não aceita strings duplicadas, ignora adição
    for (let i = 0; i < 50; i++){
      ids.add(service.generateUniqueIdWithPrefix('app')); // adiciona os elementos
    }
    expect(ids.size).toBe(50); // espera-se que sejam 50 elementos, caso não deu errado, algum dado foi duplicado
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  })

});

