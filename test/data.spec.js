// Ejecuta tu test 
describe('network', () => {
  it('nertwork debería ser un objeto global', () => {
    assert.isObject(network);
  });

  it('Debería contener una función loginGoogle, para logear al usuario mediante Google, en el objeto global network', () => {      
    assert.isFunction(network.loginGoogle);
  });

  it('Debería contener una función loginFacebook, para logear al usuario mediante Facebook, en el objeto global network', () => {
    assert.isFunction(network.loginFacebook);
  });
});

