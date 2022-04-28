Feature: NFT marketplace

    Scenario: Buy 1 item from marketplace to my wallet
        Given I have wallet with private key 'privateKey'
        Given My wallet connected to provider 'provider'
        When I buy 1 NFT ID 'itemId' from contract address 'contractAddress'
        Then I should receive an NFT in my wallet 'wallet'
        And Balance in my wallet will be deducted from the listed price
        And Seller of the item will receive money

    Scenario: Buy 1 pack from marketplace to my wallet
        Given I have wallet with private key 'privateKey'
        Given My wallet connected to provider 'provider'
        When I buy 1 item ID 'packId' with price 'price' from contract address 'contractAddress'
        Then I should receive an NFT in my wallet 'wallet'
        And Balance in my wallet will be deducted 
        And Seller of the item will receive money

    
    Scenario: List 1 item  from my wallet to marketplace 
        Given I have wallet with private key 'privateKey'
        Given My wallet connected to provider 'provider'
        When I list 1 item ID 'itemId' with price 'price' from to my wallet 'wallet' 
        Then My wallet will lose that item id 'itemId'
        And That item will tranfer to contract address 'contractAddress'

    Scenario: List 1 pack from my wallet to marketplace 
        Given I have wallet with private key 'privateKey'
        Given My wallet connected to provider 'provider'
        When I list 1 pack ID 'packId' with price 'price' from to my wallet 'wallet' 
        Then My wallet will lose that item id 'packId'
        And That pack will tranfer to contract address 'contractAddress'

    Scenario: Cannot buy item from marketplace to wallet
        Given I have wallet with private key 'privateKey'
        Given My wallet connected to provider 'provider'
        Given My wallet not enough money 'balance'
        When I buy 1 item ID 'itemId' with price 'price' from to my wallet 'wallet' 
        Then I cannot buy item ID 'itemId'
        And That item ID 'itemId' still list on marketplace