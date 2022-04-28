const assert = require('assert');
const { Given, When, Then } = require('cucumber');




// Buy 1 item from marketplace to my wallet 

{
    Given('I have wallet with private key {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Given('My wallet connected to provider {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    When('I buy {int} NFT ID {string} from contract address {string}', function (int, string, string2) {
        // When('I buy {float} NFT ID {string} from contract address {string}', function (float, string, string2) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });



    Then('I should receive an NFT in my wallet {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('Balance in my wallet will be deducted from the listed price', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('Seller of the item will receive money', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
};

// Buy 1 pack from marketplace to my wallet 
{

    Given('I have wallet with private key {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Given('My wallet connected to provider {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('I buy {int} item ID {string} with price {string} from contract address {string}', function (int, string, string2, string3) {
        // When('I buy {float} item ID {string} with price {string} from contract address {string}', function (float, string, string2, string3) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });



    Then('I should receive an NFT in my wallet {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('Balance in my wallet will be deducted', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('Seller of the item will receive money', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
};

// List 1 item  from my wallet to marketplace 
{
    Given('I have wallet with private key {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Given('My wallet connected to provider {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    When('I list {int} item ID {string} with price {string} from to my wallet {string}', function (int, string, string2, string3) {
        // When('I list {float} item ID {string} with price {string} from to my wallet {string}', function (float, string, string2, string3) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('My wallet will lose that item id {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('That item will tranfer to contract address {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
};

// List 1 pack from my wallet to marketplace 
{
    Given('I have wallet with private key {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Given('My wallet connected to provider {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    When('I list {int} pack ID {string} with price {string} from to my wallet {string}', function (int, string, string2, string3) {
        // When('I list {float} pack ID {string} with price {string} from to my wallet {string}', function (float, string, string2, string3) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('My wallet will lose that item id {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('That pack will tranfer to contract address {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

};

//Cannot buy item from marketplace to wallet # features\nftmarket.feature:34
{
    Given('I have wallet with private key {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Given('My wallet connected to provider {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });



    Given('My wallet not enough money {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    When('I buy {int} item ID {string} with price {string} from to my wallet {string}', function (int, string, string2, string3) {
        // When('I buy {float} item ID {string} with price {string} from to my wallet {string}', function (float, string, string2, string3) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('I cannot buy item ID {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    Then('That item ID {string} still list on marketplace', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
}