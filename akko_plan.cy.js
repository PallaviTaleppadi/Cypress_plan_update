///<reference types="cypress"/>

it('Akko plan purchase', () =>{
    cy.visit('https://staging.checkout.akko.app/us/dynamic-checkout/phone-plan?interval=annual')
    cy.wait(5000)   
    cy.contains('AKKO Phone Plan')
     cy.get('.CheckoutSummary_phoneInputClass__\\+FMnB').should('be.visible').type('9901460922')
     cy.get('[autocomplete="cc-given-name"]').type('Pallavi')
     cy.get(':nth-child(1) > .CustomerBasicInformation_mt1__T71CT').type('Rao')
     cy.get('div.CustomerBasicInformation_cardName__Wr7R\\+ > .Control', {timeout: 6000}).type('pallavirao@live.com')
     cy.get('#postal-code').type('570088')
  
  
  cy.wait(3000)
  cy.get('.__PrivateStripeElement > iframe')
  .then($element => {
  
    const $body = $element.contents().find('body')
  
    let stripe = cy.wrap($body);
                  stripe
                      .find('[name="cardnumber"]').eq(0)
                      //.click()
                      .type(4000056655665556);
  
                  stripe = cy.wrap($body);
                  stripe
                      .find('[name="exp-date"]')
                     // .click()
                      .type(1226);
  
                  stripe = cy.wrap($body);
                  stripe
                      .find('[name="cvc"]')
                      //.click()
                      .type(424);
  })   
  
  cy.wait(2000)
  cy.get(':nth-child(4) > .d-flex > div > input').should('be.visible').check()
  cy.get('.DynamicCheckout_mmb1__I\\+C7T > :nth-child(5) > .btn').click()
  cy.wait(10000)
  cy.contains('Special Offer').should('be.visible')
  cy.get('.UpsellToCyberBundle_callToActionBtn__zeC-q').should('be.visible').click()
  
  cy.wait(2000)
  cy.contains('Confirm Add-On').should('be.visible')
  cy.get('.modal-footer').contains('Add to my plan').click()
  
  })