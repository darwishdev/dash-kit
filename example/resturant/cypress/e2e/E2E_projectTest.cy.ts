/// <reference types="cypress" />
describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5175/')
    })
  
    it('should redirect to login page when you are unauthenticated user visiting the website', () => {
      cy.url().should('eq', 'http://localhost:5175/login')
    })
    it('should redirect to home page when submitting valid credentials and login successfully', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5175/dashboard')
    })
    it('should save the token,sidebar and permissions in the local storage after successful login', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5175/dashboard')
      cy.window().then($window => {
        const storageToken = $window.localStorage.getItem('token') // get the token from local storage
        const sideBar = $window.localStorage.getItem('sideBar') // get the token from local storage
        const permissions = $window.localStorage.getItem('permissions') // get the token from local storage
        expect(storageToken).to.not.be.null // assert that the value of the key is not null
        expect(sideBar).to.not.be.null // assert that the value of the key is not null
        expect(permissions).to.not.be.null // assert that the value of the key is not null
        expect(storageToken).to.not.be.undefined // assert that the value of the key is not undefined
        expect(sideBar).to.not.be.undefined // assert that the value of the key is not undefined
        expect(permissions).to.not.be.undefined // assert that the value of the key is not undefined

      })
    })
    it('should redirect to unauthorized route if an authenticated user tried to access a page that he has no permissions for', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5175/dashboard')
      cy.visit('http://localhost:5175/administration')
      cy.url().should('eq', 'http://localhost:5175/unauthorized')
    })
    it('the sidebar should match the value of sidebar variable saved in local storage', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5175/dashboard')
      cy.window().then($window => {
        const sidebarEncoded = $window.localStorage.getItem('sideBar'); // get the encoded sidebar value from local storage
        const sidebarDecoded = JSON.parse(atob(sidebarEncoded as string)); // decode and parse the sidebar value
        sidebarDecoded.forEach(element => {
          cy.get('aside').invoke('text').should('match', new RegExp(`.*${element.label}.*`));
        });

        
      });
    })

  })