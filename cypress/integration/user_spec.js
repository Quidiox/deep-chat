describe('User and authentication tests', function() {
  it('Creates user', function() {
    cy.visit('http://deep-chat.com:3000')
    cy.contains('Welcome to Deep Chat application!')
    cy.contains('register').click()
    cy.get('form').within(() => {
      cy.get('input[name=name]').type('cytest name')
      cy.get('input[name=username]').type('cytestUser')
      cy.get('input[name=password]').type('abckissa123')
      cy.get('input[name=passwordConfirm]').type('abckissa123')
      cy.get('button[name=submit]').click()
    })
  })
})
