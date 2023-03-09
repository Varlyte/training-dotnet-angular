describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Visits SuperHero UI', () => {
    cy.visit('http://localhost:4200/')
  })
})

describe('My First Test', () => {
  it('finds the content "Superhero table"', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Superhero table')
  })
})

describe('Test Click', () => {
  it('finds the content "Edit"', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Edit').click()
  })
})

describe('Test Create Hero', () => {
  it('Creates a Hero', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Create New Hero').click()
    cy.get('#name').type('Batman')
    cy.get('#firstname').type('Bruce')
    cy.get('#lastname').type('Wayne')
    cy.get('#place').type('Gotham city')
    cy.contains('Create').click()
  })
})

describe('Test Edit Hero', () => {
  it('Edits a Hero', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Edit').click()
    cy.get('#name').type('E')
    cy.get('#firstname').type('E')
    cy.get('#lastname').type('E')
    cy.get('#place').type('E')
    cy.contains('Save').click()
  })
})