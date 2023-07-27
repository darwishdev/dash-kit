/// <reference types="cypress" />
describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5174/')
    })
  
    it('should redirect to login page when you are unauthenticated user visiting the website', () => {
      cy.url().should('eq', 'http://localhost:5174/login')
    })
    it('should redirect to home page when submitting valid credentials and login successfully', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5174/dashboard')
    })
    it('should save the token,sidebar and permissions in the local storage after successful login', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5174/dashboard')
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
      cy.url().should('eq', 'http://localhost:5174/dashboard')
      cy.visit('http://localhost:5174/administration')
      cy.url().should('eq', 'http://localhost:5174/unauthorized')
    })
    it('should redirect to the login page after logging out', () => {
      cy.clock()
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.get('button[name="submit_2"]').click()
      cy.tick(1000)
      cy.url().should('eq', 'http://localhost:5174/dashboard')
      cy.tick(1000)
      cy.get('#profile-toggler').click()
      cy.tick(500)
      cy.get('#logout-btn').click({force:true})
      cy.url().should('eq', 'http://localhost:5174/login')
    })
    it('should toggle the application into rtl format after clicking on the langauge icon toggler', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5174/dashboard')
      cy.get('#locale-toggler').click()
      cy.get('body').should('have.class', 'rtl')
      cy.contains('body', 'لوحة التحكم').should('be.visible')
    })
    it('the sidebar should match the value of sidebar variable saved in local storage', () => {
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5174/dashboard')
      cy.window().then($window => {
        const sidebarEncoded = $window.localStorage.getItem('sideBar'); // get the encoded sidebar value from local storage
        const sidebarDecoded = JSON.parse(atob(sidebarEncoded as string)); // decode and parse the sidebar value
        sidebarDecoded.forEach(element => {
          cy.get('aside').invoke('text').should('match', new RegExp(`.*${element.label}.*`));
        });

        
      });
    })

  })