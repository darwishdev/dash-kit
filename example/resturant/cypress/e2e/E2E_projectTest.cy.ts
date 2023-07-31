/// <reference types="cypress" />
describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/')
    })
  
    // it('should redirect to login page when you are unauthenticated user visiting the website', () => {
    //   cy.url().should('eq', 'http://localhost:5173/login')
    // })
    it('should redirect to home page when submitting valid credentials and login successfully', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5173/dashboard')
    })
    it('should save the token,sidebar and permissions in the local storage after successful login', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5173/dashboard')
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
    // it('should redirect to unauthorized route if an authenticated user tried to access a page that he has no permissions for', () => {
    //   cy.get('input[name="userName"]').type('01118614244')
    //   cy.get('input[name="userPassword"]').type('kimo123456')
    //   cy.get('button[type="submit"]').click()
    //   cy.url().should('eq', 'http://localhost:5173/dashboard')
    //   cy.visit('http://localhost:5175/administration')
    //   cy.url().should('eq', 'http://localhost:5173/unauthorized')
    // })
    it('should redirect to login page after user logging out', () => {
      cy.clock()
      // cy.get('input[name="userName"]').type('01118614244')
      // cy.get('input[name="userPassword"]').type('kimo123456')
      // cy.get('button[type="submit"]').click()
      // cy.url().should('eq', 'http://localhost:5173/dashboard')
      cy.get('#profile-toggler').click()
      cy.tick(500)
      cy.get('#logout-btn').click()
      cy.url().should('eq', 'http://localhost:5173/login')
    })
    it('should change the page format into rtl after clicking on the language toggler icon', () => {
      cy.clock()
      // cy.get('input[name="userName"]').type('01118614244')
      // cy.get('input[name="userPassword"]').type('kimo123456')
      // cy.get('button[type="submit"]').click()
      // cy.url().should('eq', 'http://localhost:5173/dashboard')
      cy.get('#locale-toggler').click()
      cy.tick(500)
      cy.get('body').should('have.class', 'rtl');
    })
    it('the sidebar should match the value of sidebar variable saved in local storage', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:5173/dashboard')
      cy.window().then($window => {
        const sidebarEncoded = $window.localStorage.getItem('sideBar'); // get the encoded sidebar value from local storage
        const sidebarDecoded = JSON.parse(atob(sidebarEncoded as string)); // decode and parse the sidebar value
        sidebarDecoded.forEach(element => {
          cy.get('aside').invoke('text').should('match', new RegExp(`.*${element.label}.*`));
        });
      });
    })

    // Users feature

    it('should display an error messages when submitting with empty inputs in user create page', () => {
      cy.clock();
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.visit('http://localhost:5173/users/create')
      cy.tick(2000)
      cy.get('button[type="submit"]').click({force:true})
      cy.contains('Sorry, not all fields are filled out correctly.')
    })
    it('should create a new user when using valid credentials then update the created user using valid credentials', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.visit('http://localhost:5173/users/create')
      cy.clock();
      const randomUserName = Math.random().toString(36).substring(2, 12);
      const randomPhoneNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
      const randomUserEmail = randomUserName + '@gmail.com'
      const userPw = 'testpw12345' 
      cy.get('input[name="userName"]').type(randomUserName)
      cy.get('input[name="userPhone"]').type(randomPhoneNumber)
      cy.get('input[name="userEmail"]').type(randomUserEmail)
      cy.get('input[name="userPassword"]').type(userPw)
      cy.get('input[name="userPassword_confirm"]').type(userPw)
      cy.get('button[type="submit"]').click({force:true})
      cy.tick(500);
      cy.url().should('eq', 'http://localhost:5173/users')
      cy.tick(2000);
      cy.get(`a[title="${randomUserName}"]`).click()
      cy.url().should('include', 'users/');
      cy.tick(2000);
      cy.get('button[aria-label="Edit User"]').click()
      cy.tick(2000);
      cy.get('input[name="userName"]').should('have.value', randomUserName);
      cy.get('input[name="userPhone"]').should('have.value', randomPhoneNumber);
      cy.get('input[name="userEmail"]').should('have.value', randomUserEmail);
      cy.get('input[name="userName"]').type(' Kimo')
      cy.get('input[name="userPassword"]').type(userPw)
      cy.get('input[name="userPassword_confirm"]').type(userPw)
      cy.get('input[name="userPhone"]').type('10')
      cy.get('input[name="userEmail"]').type('mm')
      cy.get('button[type="submit"]').click({ multiple: true })
      cy.tick(2000);
      cy.url().should('eq', 'http://localhost:5173/users')
    })

    //roles feature

    it('should display an error messages when submitting with empty inputs in role create page', () => {
      cy.clock();
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.visit('http://localhost:5173/roles/create')
      cy.tick(2000)
      cy.get('button[type="submit"]').click({force:true})
      cy.contains('Sorry, not all fields are filled out correctly.')
    })

    it('should create a new role when using valid credentials then update the created role using valid credentials', () => {
      cy.visit('http://localhost:5173/login')
      cy.get('input[name="userName"]').type('01118614244')
      cy.get('input[name="userPassword"]').type('kimo123456')
      cy.get('button[type="submit"]').click()
      cy.visit('http://localhost:5173/roles/create')
      cy.clock();
      const randomroleName = Math.random().toString(36).substring(2, 12);
      const randomroleDescription = Math.random().toString(36).substring(2, 30);
      cy.get('input[name="roleName"]').type(randomroleName)
      cy.get('textarea[name="roleDescription"]').type(randomroleDescription)
      cy.get('button[type="submit"]').click({force:true})
      cy.tick(500);
      cy.url().should('eq', 'http://localhost:5173/roles')
      cy.tick(2000);
      cy.get(`a[title="${randomroleName}"]`).click()
      cy.url().should('include', 'roles/update/');
      cy.tick(2000);
      cy.get('input[name="roleName"]').should('have.value', randomroleName);
      cy.get('input[name="roleName"]').type(' Manager')
      cy.get('button[type="submit"]').click({ multiple: true })
      cy.tick(2000);
      cy.url().should('eq', 'http://localhost:5173/roles')
    })
    
  })