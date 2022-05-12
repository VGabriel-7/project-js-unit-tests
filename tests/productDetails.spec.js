const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const funcDetails = productDetails('Alcool gel', 'Máscara');

  it('Testa se a função productDeatils está correta.', () => {
      // Teste se productDetails é uma função.
      expect(typeof productDetails).toBe('function');
      
      // Teste se o retorno da função é um array.
      expect(Array.isArray(funcDetails)).toBeTruthy();
      
      // Teste se o array retornado pela função contém dois itens dentro.
      expect(funcDetails.length).toBe(2);
      
      // Teste se os dois itens dentro do array retornado pela função são objetos.
      expect(typeof funcDetails[0]).toBe('object');
      expect(typeof funcDetails[1]).toBe('object');

      // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
      expect(funcDetails[0]).not.toEqual(funcDetails[1]);
      
      // Teste se os dois productIds terminam com 123.
      const details = productDetails('', '');
      expect(details[0].details.productId).toBe('123');
      expect(details[1].details.productId).toBe('123');
    });

});
